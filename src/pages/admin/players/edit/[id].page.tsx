import Sidebar from '@/components/SideBar'
import { Box, Heading, Text, TextInput, Button } from '@danielcorrea-ui/react'
import { getAPIClient } from '@/lib/axios'
import { withSSRAuth } from '@/utils/withSSRAuth'
import { ContainerButton, Form, FormError } from './styles'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '@/lib/api'
import { useContext, useEffect, useState } from 'react'
import { AxiosError } from 'axios'
import Toast from '@/components/Toast'
import { AuthContext } from '@/contexts/AuthContext'

const createTeamFormSchema = z.object({
  id: z.string(),
  name: z
    .string()
    .min(3, { message: 'O nome precisa ter ao menos 3 caracteres' }),
  nickname: z.string(),
  phone: z.string(),
  birthDate: z.string(),
  filename: z.any().optional(),
})

interface PlayerProps {
  id: string
  name: string
  nickname: string
  document: string
  birthDate: Date
  phone: string
}

type CreateTeamFormSchema = z.infer<typeof createTeamFormSchema>

export default function EditPlayer({
  id,
  name,
  nickname,
  document,
  birthDate,
  phone,
}: PlayerProps) {
  const [error, setError] = useState()
  const [success, setSuccess] = useState(false)
  const { accountUser } = useContext(AuthContext)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<CreateTeamFormSchema>({
    resolver: zodResolver(createTeamFormSchema),
  })

  useEffect(() => {
    const date = new Date(birthDate)

    const options: Intl.DateTimeFormatOptions = {
      dateStyle: 'short',
      timeZone: 'UTC',
    }
    const formattedDate = date
      .toLocaleDateString('pt-BR', options)
      .split('/')
      .reverse()
      .join('-')

    setValue('id', id)
    setValue('name', name)
    setValue('nickname', nickname)
    setValue('phone', phone)
    setValue('birthDate', formattedDate)
  }, [id, birthDate, name, nickname, phone, setValue])

  async function handleUpdatePlayer(data: CreateTeamFormSchema) {
    try {
      const info = {
        name: data.name,
        nickname: data.nickname,
        birthDate: data.birthDate,
        document,
        phone: data.phone,
      }
      await api.put(`/players/update/${data.id}`, info)

      const categoryTeamPlayer = await api.get(
        `/get-link-id/category-id/team-id/player-id/${accountUser?.selCategoryId}/${accountUser?.selTeamId}/${data.id}`,
      )

      if (data.filename[0]) {
        const formData = new FormData()
        formData.append('filename', data.filename[0])

        await api.patch(`/image-player/${categoryTeamPlayer.data.id}`, formData)
      }

      setSuccess(true)
    } catch (error) {
      console.log(error)
      if (error instanceof AxiosError && error?.response?.data?.message) {
        setError(error.response.data.message)
      }
    }
  }

  return (
    <>
      <Sidebar>
        <Box>
          <Heading>Atualizar Atleta</Heading>

          <Form onSubmit={handleSubmit(handleUpdatePlayer)}>
            <input type="hidden" {...register('id')} />
            <label>
              <Text>CPF</Text>
              <TextInput type="text" value={document} disabled />
            </label>
            <label>
              <Text>Nome </Text>
              <TextInput type="text" {...register('name')} />
              {errors.name && (
                <FormError size="sm">{errors.name.message}</FormError>
              )}
            </label>
            <label>
              <Text>Apelido</Text>
              <TextInput type="text" {...register('nickname')} />
              {errors.nickname && (
                <FormError size="sm">{errors.nickname.message}</FormError>
              )}
            </label>
            <label>
              <Text>Data de nascimento</Text>
              <TextInput type="date" {...register('birthDate')} />
              {errors.birthDate && (
                <FormError size="sm">{errors.birthDate.message}</FormError>
              )}
            </label>
            <label>
              <Text>Telefone</Text>
              <TextInput type="text" {...register('phone')} />
              {errors.phone && (
                <FormError size="sm">{errors.phone.message}</FormError>
              )}
            </label>

            <label>
              <Text>Imagem</Text>
              <TextInput
                type="file"
                accept="image/*"
                {...register('filename')}
              />
            </label>

            <ContainerButton>
              <Button type="submit" disabled={isSubmitting}>
                Salvar
              </Button>
              <Button onClick={() => router.push('/admin/players')}>
                Cancelar
              </Button>
            </ContainerButton>
          </Form>
        </Box>
        {success && (
          <Toast
            title="Feito!"
            description="Atleta atualizado com sucesso!"
            duration={3000}
            linkButton="/admin/players"
            titleButton="Ok!"
            size="small"
            typeToast="success"
          />
        )}

        {error && (
          <Toast
            title="Erro!"
            description={error}
            duration={3000}
            linkButton=""
            titleButton="Ok!"
            size="small"
            typeToast="danger"
          />
        )}
      </Sidebar>
    </>
  )
}

export const getServerSideProps = withSSRAuth(
  async (ctx) => {
    const apiClient = getAPIClient(ctx)
    const playerId = ctx.params?.id
    const { data } = await apiClient.get(`/players/id/${playerId}`)

    return {
      props: {
        id: data.id,
        name: data.name,
        nickname: data.nickname,
        birthDate: data.date_birth,
        document: data.document,
        phone: data.phone,
      },
    }
  },
  {
    permissions: ['update_player'],
    roles: ['admin', 'gestor competicao', 'gestor equipe'],
  },
)
