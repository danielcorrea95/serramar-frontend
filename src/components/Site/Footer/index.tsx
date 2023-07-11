import {
  Align,
  Container,
  Content,
  ContentFooter,
  IconSocial,
  SliderContainer,
  SocialContainer,
} from './styles'
import { useKeenSlider } from 'keen-slider/react'
import logoImage from '../../../../assets/images/logo.png'
import Image from 'next/image'
import { Text } from '@danielcorrea-ui/react'
import { FacebookLogo, InstagramLogo } from '@phosphor-icons/react'
import Link from 'next/link'

import banrisulImg from '../../../../assets/images/patrocinio-banrisul.jpg'
import esportesDaSorteImage from '../../../../assets/images/patrocinio-esportes-da-sorte.jpg'
import fgfImage from '../../../../assets/images/patrocinio-fgf.jpg'

export default function Footer() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 1,
      origin: 'auto',
    },
    loop: true,
  })
  return (
    <Container>
      <Align>
        <Content>
          <ContentFooter>
            <Image src={logoImage} height={100} alt="SERRAMAR" />
            <SocialContainer>
              <Link
                href={'https://www.facebook.com/ligaserramar'}
                target="_blank"
              >
                <IconSocial>
                  <FacebookLogo size={26} style={{ color: '#e2b06d' }} />
                </IconSocial>
              </Link>

              <Link
                href={
                  'https://instagram.com/ligaserramaroficial?igshid=MzRlODBiNWFlZA=='
                }
                target="_blank"
              >
                <IconSocial>
                  <InstagramLogo size={26} style={{ color: '#e2b06d' }} />
                </IconSocial>
              </Link>
            </SocialContainer>
          </ContentFooter>
          <ContentFooter>
            <Text>patrocinio</Text>
            <SliderContainer
              ref={sliderRef}
              className="keen-slider"
              style={{ flex: 'flex', width: '100%', overflow: 'hidden' }}
            >
              <Image
                className="keen-slider__slide"
                src={banrisulImg}
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                alt="Patrocinio"
              />
              <Image
                className="keen-slider__slide"
                src={esportesDaSorteImage}
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                alt="Patrocinio"
              />
              <Image
                className="keen-slider__slide"
                src={fgfImage}
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                alt="Patrocinio"
              />
            </SliderContainer>
          </ContentFooter>
        </Content>
        <Container>
          <Text>
            © Copyright <span style={{ color: '#e2b06d' }}>Serramar</span>.
            Todos os direitos reservados.
          </Text>
        </Container>
      </Align>
    </Container>
  )
}
