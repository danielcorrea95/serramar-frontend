import Sidebar from '@/components/SideBar'
import { withSSRAuth } from '@/utils/withSSRAuth'
import {
  Button,
  Heading,
  SelectInput,
  Text,
  TextInput,
} from '@danielcorrea-ui/react'
import { ContainerButton, Form, FormError, Option } from './styles'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '@/lib/api'
import { AxiosError } from 'axios'
import Toast from '@/components/Toast'
import { useRouter } from 'next/router'
import { getAPIClient } from '@/lib/axios'
import { useContext, useState } from 'react'
import { AuthContext } from '@/contexts/AuthContext'

interface SelectProps {
  id: string
  name: string
}

interface RequestProps {
  roles: SelectProps[]
  teams: SelectProps[]
}

const createUserFormSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: 'O nome precisa ter ao menos 3 caracteres' }),
    email: z.string().email('Formato do e-mail inválido'),
    username: z
      .string()
      .min(3, { message: 'O usuário precisa ter no minimo 3 caracteres' }),
    roleName: z.string(),
    teamId: z.string().optional(),
    password: z.string().regex(/^$|^.{6,}$/, {
      message: 'A senha precisa ter ao menos 6 caracteres',
    }),
    confirmPassword: z.string().regex(/^$|^.{6,}$/, {
      message: 'A senha precisa ter ao menos 6 caracteres',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas devem ser iguais',
    path: ['confirmPassword'],
  })

type CreateUserFormSchema = z.infer<typeof createUserFormSchema>

export default function RegisterUser({ roles, teams }: RequestProps) {
  const [error, setError] = useState()
  const [success, setSuccess] = useState(false)
  const [roleSelect, setRoleSelect] = useState(true)
  const { accountUser } = useContext(AuthContext)
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateUserFormSchema>({
    resolver: zodResolver(createUserFormSchema),
  })

  async function handleCreateUser(data: CreateUserFormSchema) {
    try {
      const createUser = {
        name: data.name,
        email: data.email,
        username: data.username,
        password: data.password,
        confirmPassword: data.confirmPassword,
      }
      const user = await api.post(`/users`, createUser)
      const paramsUser = {
        userId: user.data.id,
        roleName: data.roleName,
        teamId: data.teamId,
        cupConfigId: accountUser?.selCupConfigId,
      }
      await api.post(`/users/role/permissions/teams`, paramsUser)

      setSuccess(true)
    } catch (error) {
      console.log(error)
      if (error instanceof AxiosError && error?.response?.data?.message) {
        setError(error.response.data.message)
      }
    }
  }

  function changeRole(event: { target: { value: string } }) {
    const { value } = event.target

    if (value === 'gestor equipe') {
      setRoleSelect(false)
    } else {
      setRoleSelect(true)
    }
  }

  return (
    <>
      <Sidebar>
        <Heading>Cadastrar Usuários</Heading>

        <Form as="form" onSubmit={handleSubmit(handleCreateUser)}>
          <label>
            <Text size="sm">Nome</Text>
            <TextInput type="text" {...register('name')} />
            {errors.name && (
              <FormError size="sm">{errors.name.message}</FormError>
            )}
          </label>

          <label>
            <Text size="sm">E-mail</Text>
            <TextInput type="email" {...register('email')} />
            {errors.email && (
              <FormError size="sm">{errors.email.message}</FormError>
            )}
          </label>
          <label>
            <Text size="sm">Usuário</Text>
            <TextInput type="text" {...register('username')} />
          </label>

          <label>
            <Text size="sm">Permissão</Text>
            <SelectInput {...register('roleName')} onChange={changeRole}>
              <Option>Selecione uma permissão</Option>
              {roles.map((item) => {
                return (
                  <Option key={item.id} value={item.name}>
                    {item.name}
                  </Option>
                )
              })}
            </SelectInput>
            {errors.roleName && (
              <FormError size="sm">{errors.roleName.message}</FormError>
            )}
          </label>

          <label>
            <Text size="sm">Equipe</Text>
            <SelectInput disabled={roleSelect} {...register('teamId')}>
              <Option>Selecione uma equipe</Option>
              {teams.map((item) => {
                return (
                  <Option key={item.id} value={item.id}>
                    {item.name}
                  </Option>
                )
              })}
            </SelectInput>
            {errors.teamId && (
              <FormError size="sm">{errors.teamId.message}</FormError>
            )}
          </label>

          <label></label>

          <label>
            <Text size="sm">Senha</Text>
            <TextInput
              type="password"
              placeholder="Senha"
              {...register('password')}
            />
            {errors.password && (
              <FormError size="sm">{errors.password.message}</FormError>
            )}
          </label>

          <label>
            <Text size="sm">Confirme a senha</Text>
            <TextInput
              type="password"
              placeholder="Confirme a senha"
              {...register('confirmPassword')}
            />
            {errors.confirmPassword && (
              <FormError size="sm">{errors.confirmPassword.message}</FormError>
            )}
          </label>

          <ContainerButton>
            <Button type="submit" disabled={isSubmitting}>
              Salvar
            </Button>
            <Button onClick={() => router.push('/admin/users')}>
              Cancelar
            </Button>
          </ContainerButton>
        </Form>
      </Sidebar>
      {success && (
        <Toast
          title="Atualizado!"
          description="Dados atualizados com sucesso!"
          duration={3000}
          linkButton="/admin/users"
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
          linkButton="#"
          titleButton="Ok!"
          size="small"
          typeToast="danger"
        />
      )}
    </>
  )
}
export const getServerSideProps = withSSRAuth(
  async (ctx) => {
    const apiClient = getAPIClient(ctx)
    const user = await apiClient.get('/me')

    const { data } = await apiClient.get('/roles')

    const roles: SelectProps[] = data

    const response = await apiClient.get(
      `/teams/context/user-id/${user.data.user.id}`,
    )

    const teams: SelectProps[] = response.data

    return {
      props: { roles, teams },
    }
  },
  {
    permissions: ['create_user'],
    roles: ['admin', 'gestor competicao'],
  },
)
