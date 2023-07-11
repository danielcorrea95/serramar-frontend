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
import { useContext, useState } from 'react'
import { AxiosError } from 'axios'
import Toast from '@/components/Toast'
import { AuthContext } from '@/contexts/AuthContext'

const createTeamFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'O nome precisa ter ao menos 3 caracteres' }),
  nickname: z.string(),
  phone: z.string(),
  birthDate: z.string(),
  document: z.string(),
  filename: z.any().optional(),
})

type CreateTeamFormSchema = z.infer<typeof createTeamFormSchema>

export default function TeamRegister() {
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

  async function findDocument(event: { target: { value: string } }) {
    const { value } = event.target
    if (value) {
      const response = await api.get(`/players/document/${value}`)

      if (response.data) {
        const { data } = response
        const date = new Date(data.date_birth)

        const options: Intl.DateTimeFormatOptions = {
          dateStyle: 'short',
          timeZone: 'UTC',
        }
        const formattedDate = date
          .toLocaleDateString('pt-BR', options)
          .split('/')
          .reverse()
          .join('-')

        setValue('name', String(data.name))
        setValue('nickname', String(data.nickname))
        setValue('birthDate', formattedDate)
        setValue('phone', String(data.phone))
      }
    }
  }

  async function handleCreatePlayer(data: CreateTeamFormSchema) {
    try {
      const info = {
        name: data.name,
        nickname: data.nickname,
        birthDate: data.birthDate,
        document: data.document,
        phone: data.phone,
      }
      const response = await api.post(`/players`, info)

      const categoryTeamPlayer = await api.post(`/link-category-player-team`, {
        categoryId: accountUser?.selCategoryId,
        playerId: response.data.id,
        teamId: accountUser?.selTeamId,
      })

      if (data.filename[0]) {
        const formData = new FormData()
        formData.append('filename', data.filename[0])

        await api.patch(
          `/image-player/${categoryTeamPlayer.data.categoryPlayerTeam.id}`,
          formData,
        )
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
          <Heading>Cadastrar Atleta</Heading>

          <Form onSubmit={handleSubmit(handleCreatePlayer)}>
            <label>
              <Text>CPF</Text>
              <TextInput
                type="text"
                {...register('document', { required: true })}
                onBlur={findDocument}
              />
              {errors.document && (
                <FormError size="sm">{errors.document.message}</FormError>
              )}
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
            description="Atleta cadastrado com sucesso!"
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

    const { data } = await apiClient.get('/me')

    // console.log(data);
    return {
      props: { data },
    }
  },
  {
    permissions: ['create_player'],
    roles: ['admin', 'gestor competicao', 'gestor equipe'],
  },
)
