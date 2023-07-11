import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  BoxForm,
  Container,
  ContainerImageForm,
  DivContent,
  FormError,
} from './styles'
import { AxiosError } from 'axios'
import { useContext } from 'react'
import { Heading, TextInput, Button } from '@danielcorrea-ui/react'
import Image from 'next/image'
import Link from 'next/link'

import loginImage from '../../../../assets/images/login.png'
import logoImage from '../../../../assets/images/logo-rs.png'
import { AuthContext } from '@/contexts/AuthContext'

const signInFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'O usuário precisa ter pelo menos 6 caracteres' })
    .transform((username) => username.toLowerCase()),
  password: z
    .string()
    .min(3, { message: 'A senha precisa ter ao menos 6 caracteres' }),
})

type SignInFormData = z.infer<typeof signInFormSchema>

export default function Login() {
  const { register, handleSubmit } = useForm<SignInFormData>({
    resolver: zodResolver(signInFormSchema),
  })

  const { signIn, userNotFound } = useContext(AuthContext)

  async function handleSignIn(data: SignInFormData) {
    try {
      await signIn(data)
    } catch (error) {
      if (error instanceof AxiosError && error?.response?.data?.message) {
        alert(error.response.data.message)
      }
      alert(error)
    }
  }

  return (
    <>
      <Container>
        <DivContent>
          <Heading>
            <Image src={loginImage} width={500} alt="" />
          </Heading>
        </DivContent>
        <DivContent>
          <BoxForm as="form" onSubmit={handleSubmit(handleSignIn)}>
            <ContainerImageForm>
              <Image src={logoImage} height={50} alt="Logo RS Esportes" />
            </ContainerImageForm>
            <Heading as="h2">Seja bem-vindo</Heading>
            <label>
              <TextInput
                type="text"
                placeholder="Usuário"
                {...register('username')}
              />
              {userNotFound && (
                <FormError size="sm">Usuário ou senha incorretos</FormError>
              )}
            </label>
            <label>
              <TextInput
                type="password"
                placeholder="Senha"
                {...register('password')}
              />
              {userNotFound && (
                <FormError size="sm">Usuário ou senha incorretos</FormError>
              )}
            </label>
            <div>
              <Link href="#">Esqueci minha senha</Link>
            </div>
            <Button type="submit">Entrar</Button>
          </BoxForm>
        </DivContent>
      </Container>
    </>
  )
}
