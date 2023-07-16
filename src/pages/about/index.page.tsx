import Layout from '@/components/Site/Layout'
import { Container } from './styles'

import regulamento from '../../../assets/images/regulamento.pdf'

export default function About() {
  return (
    <Layout>
      <Container>
        <p className="ql-align-center">
          <strong>Regulamento SERRAMAR 2023</strong>
        </p>
        <p>
          Para fazer o download do regulamento do campeonato,{' '}
          <a href={regulamento} download={regulamento}>
            clique aqui
          </a>
        </p>
      </Container>
    </Layout>
  )
}
