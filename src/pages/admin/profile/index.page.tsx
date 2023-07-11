import Sidebar from '@/components/SideBar'
import { getAPIClient } from '@/lib/axios'
import { withSSRAuth } from '@/utils/withSSRAuth'
import { Button, Text, TextInput } from '@danielcorrea-ui/react'
import { ContainerButton, Form, FormError } from './styles'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '@/lib/api'
import { useEffect, useState } from 'react'
import { AxiosError } from 'axios'
import Toast from '@/components/Toast'
import { useRouter } from 'next/router'

interface UserProps {
  id: string
  name: string
  username: string
  email: string
}

const updateProfileFormSchema = z
  .object({
    id: z.string(),
    name: z
      .string()
      .min(3, { message: 'O nome precisa ter ao menos 3 caracteres' }),
    email: z.string().email('Formato do e-mail inválido'),
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

type UpdateProfileFormSchema = z.infer<typeof updateProfileFormSchema>

export default function Profile({ id, name, email, username }: UserProps) {
  const [error, setError] = useState()
  const [success, setSuccess] = useState(false)
  const router = useRouter()
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<UpdateProfileFormSchema>({
    resolver: zodResolver(updateProfileFormSchema),
  })

  useEffect(() => {
    setValue('name', String(name))
    setValue('email', String(email))
  })

  async function handleUpdateProfile(data: UpdateProfileFormSchema) {
    try {
      await api.put(`/users/update/${data.id}`, data)
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
        <Form as="form" onSubmit={handleSubmit(handleUpdateProfile)}>
          <input type="hidden" value={id} {...register('id')} />
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
            <TextInput type="text" disabled value={username} />
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
            <Button onClick={() => router.push('/admin')}>Cancelar</Button>
          </ContainerButton>
        </Form>
      </Sidebar>
      {success && (
        <Toast
          title="Atualizado!"
          description="Dados atualizados com sucesso!"
          duration={3000}
          linkButton="/"
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
export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = getAPIClient(ctx)

  const { data } = await apiClient.get('/me')

  const user: UserProps = {
    id: data.user.id,
    name: data.user.name,
    email: data.user.email,
    username: data.user.username,
  }

  return {
    props: user,
  }
})
