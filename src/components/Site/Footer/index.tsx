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
import logoImage from '../../../../assets/images/LOGO COPA BRANCO.png'
import Image from 'next/image'
import { Text } from '@danielcorrea-ui/react'
import { FacebookLogo, InstagramLogo } from '@phosphor-icons/react'
import Link from 'next/link'

import benderImg from '../../../../assets/images/BENDER SITE COPA.jpg'
import delsol from '../../../../assets/images/DELSOL SITE COPA.jpg'
import kto from '../../../../assets/images/KTO SITE COPA.jpg'
import latina from '../../../../assets/images/LATINA SITE COPA.jpg'
import nedel from '../../../../assets/images/NEDEL  SITE COPA.jpg'
import prefeitura from '../../../../assets/images/PREFEITURA SITE COPA.jpg'
import rbt from '../../../../assets/images/RBT SITE COPA.jpg'
import rs from '../../../../assets/images/RSesportes Site Copa.jpg'
import sicredi from '../../../../assets/images/SICREDI  Site Copa.jpg'
import weefe from '../../../../assets/images/WEEFE Site Copa.jpg'

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
            <Image src={logoImage} height={100} alt="RS ESPORTES" />
            <SocialContainer>
              <Link
                href={'https://www.facebook.com/profile.php?id=100047287016119'}
                target="_blank"
              >
                <IconSocial>
                  <FacebookLogo size={26} style={{ color: '#e2b06d' }} />
                </IconSocial>
              </Link>

              <Link
                href={'https://www.instagram.com/copadoscampeoesfutsal'}
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
                src={benderImg}
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                alt="Patrocinio"
              />
              <Image
                className="keen-slider__slide"
                src={delsol}
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                alt="Patrocinio"
              />
              <Image
                className="keen-slider__slide"
                src={kto}
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                alt="Patrocinio"
              />
              <Image
                className="keen-slider__slide"
                src={latina}
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                alt="Patrocinio"
              />
              <Image
                className="keen-slider__slide"
                src={nedel}
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                alt="Patrocinio"
              />
              <Image
                className="keen-slider__slide"
                src={prefeitura}
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                alt="Patrocinio"
              />
              <Image
                className="keen-slider__slide"
                src={rbt}
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                alt="Patrocinio"
              />
              <Image
                className="keen-slider__slide"
                src={rs}
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                alt="Patrocinio"
              />
              <Image
                className="keen-slider__slide"
                src={sicredi}
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                alt="Patrocinio"
              />
              <Image
                className="keen-slider__slide"
                src={weefe}
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
            © Copyright{' '}
            <span style={{ color: '#e2b06d' }}>Copa dos Campeões</span>. Todos
            os direitos reservados.
          </Text>
        </Container>
      </Align>
    </Container>
  )
}
