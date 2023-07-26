import Layout from '@/components/Site/Layout'
import { Container } from './styles'

export default function About() {
  const pdfUrl = 'https://rs-esportes-copas.s3.amazonaws.com/regulamento.pdf' // Substitua pelo caminho correto do arquivo PDF
  return (
    <Layout>
      <Container>
        <p className="ql-align-center">
          <strong>Regulamento SERRAMAR 2023</strong>
        </p>
        <p>
          Para fazer o download do regulamento do campeonato{' '}
          <a href={pdfUrl}>clique aqui</a>{' '}
        </p>
      </Container>
    </Layout>
  )
}
