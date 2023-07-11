import { Heading } from '@danielcorrea-ui/react'
import { Container } from './styles'

import logoImage from '../../../assets/images/logo-rs.png'
import Image from 'next/image'

export default function NotFound() {
  return (
    <Container>
      <Image src={logoImage} alt="RS Esportes" height={40} />
      <Heading>404 - Página não encontrada</Heading>
    </Container>
  )
}
