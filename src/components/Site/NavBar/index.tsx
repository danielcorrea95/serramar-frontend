import { Button } from '@danielcorrea-ui/react'
import {
  Container,
  ContainerLink,
  ContainerNav,
  NavbarCollapseButton,
  NavbarLogo,
} from './styles'

import logoImage from '../../../../assets/images/LOGO COPA BRANCO.png'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { List } from '@phosphor-icons/react'

export default function NavBar() {
  const route = useRouter()

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(true)
      } else {
        setIsMenuOpen(false)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <Container>
      <ContainerNav>
        <div>
          <NavbarLogo src={logoImage} height={60} alt="" />
        </div>
        <NavbarCollapseButton>
          <List size={24} onClick={toggleMenu} />
        </NavbarCollapseButton>
        <ContainerLink style={{ display: isMenuOpen ? 'flex' : 'none' }}>
          <Link href={'/'}>Início</Link>
          <Link href={'/about'}>Sobre</Link>
          <Link href={'/games'}>Jogos</Link>
          <Link href={'/teams'}>Equipes</Link>
          <Link href={'/classification'}>Classificação</Link>
          <Button
            onClick={() => route.push('/admin/login')}
            variant={'secondary'}
          >
            Painel
          </Button>
        </ContainerLink>
      </ContainerNav>
    </Container>
  )
}
