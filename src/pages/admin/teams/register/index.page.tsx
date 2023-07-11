import Sidebar from '@/components/SideBar'
import {
  Box,
  Heading,
  Text,
  TextInput,
  Button,
  SelectInput,
} from '@danielcorrea-ui/react'
import { getAPIClient } from '@/lib/axios'
import { withSSRAuth } from '@/utils/withSSRAuth'
import { ContainerButton, Form, FormError, Option } from './styles'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '@/lib/api'
import { useContext, useEffect, useState } from 'react'
import { AxiosError } from 'axios'
import Toast from '@/components/Toast'
import { AuthContext } from '@/contexts/AuthContext'

interface CitiesProps {
  id: number
  name: string
}

const createTeamFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'O nome precisa ter ao menos 3 caracteres' }),
  code: z.string().nullable(),
  responsible: z.string(),
  email: z.string().nullable(),
  phone: z.string(),
  fundation: z.string(),
  cityId: z.string().refine((val) => !Number.isNaN(parseInt(val, 10)), {
    message: 'Esperado um numero, recebemos uma string',
  }),
  filename: z.any().optional(),
})

type CreateTeamFormSchema = z.infer<typeof createTeamFormSchema>

export default function TeamRegister() {
  const [error, setError] = useState()
  const [success, setSuccess] = useState(false)
  const [cities, setCities] = useState<CitiesProps[]>([])
  const { accountUser } = useContext(AuthContext)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateTeamFormSchema>({
    resolver: zodResolver(createTeamFormSchema),
  })

  useEffect(() => {
    async function allCities(stateId: number) {
      const response = await api.get(`/cities/${stateId}`)

      setCities(response.data)
    }
    allCities(23)
  }, [])

  async function handleCreateTeam(data: CreateTeamFormSchema) {
    try {
      const info = {
        code: data.code,
        name: data.name,
        responsible: data.responsible,
        email: data.email,
        phone: data.phone,
        fundation: data.fundation,
        cityId: Number(data.cityId),
      }
      const response = await api.post(`/teams`, info)
      if (data.filename[0]) {
        const formData = new FormData()
        formData.append('filename', data.filename[0])

        await api.patch(`/teams/shield/${response.data.team.id}`, formData)
      }

      await api.post(`/category/team/${accountUser?.selCategoryId}`, {
        teamId: response.data.team.id,
      })

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
          <Heading>Cadastrar Equipe</Heading>

          <Form onSubmit={handleSubmit(handleCreateTeam)}>
            <label>
              <Text>Código identificador</Text>
              <TextInput type="text" {...register('code')} />
              {errors.code && (
                <FormError size="sm">{errors.code.message}</FormError>
              )}
            </label>
            <label>
              <Text>Nome Equipe</Text>
              <TextInput type="text" {...register('name')} />
              {errors.name && (
                <FormError size="sm">{errors.name.message}</FormError>
              )}
            </label>
            <label>
              <Text>Responsável</Text>
              <TextInput type="text" {...register('responsible')} />
              {errors.responsible && (
                <FormError size="sm">{errors.responsible.message}</FormError>
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
              <Text>Email</Text>
              <TextInput type="text" {...register('email')} />
              {errors.email && (
                <FormError size="sm">{errors.email.message}</FormError>
              )}
            </label>
            <label>
              <Text>Data de Fundação</Text>
              <TextInput type="date" {...register('fundation')} />
              {errors.email && (
                <FormError size="sm">{errors.email.message}</FormError>
              )}
            </label>
            <label>
              <Text>Cidade</Text>
              <SelectInput {...register('cityId')}>
                <Option>Selecione uma cidade</Option>
                {cities.map((item) => {
                  return (
                    <Option key={item.id} value={item.id}>
                      {item.name}
                    </Option>
                  )
                })}
              </SelectInput>
              {errors.cityId && (
                <FormError size="sm">{errors.cityId.message}</FormError>
              )}
            </label>
            <label>
              <Text>Logo</Text>
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
              <Button onClick={() => router.push('/admin/teams')}>
                Cancelar
              </Button>
            </ContainerButton>
          </Form>
        </Box>
        {success && (
          <Toast
            title="Feito!"
            description="Equipe cadastrada com sucesso!"
            duration={3000}
            linkButton="/admin/teams"
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
    permissions: ['create_team'],
    roles: ['admin', 'gestor'],
  },
)
