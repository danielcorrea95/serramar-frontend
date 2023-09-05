import Layout from '@/components/Site/Layout'
import {
  AccordionContent,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger,
  Container,
  Table,
} from './styles'

export default function Classification() {
  return (
    <Layout>
      <Container>
        <AccordionRoot type="single" collapsible>
          <AccordionItem value="adulto">
            <AccordionTrigger>Adulto</AccordionTrigger>
            <AccordionContent>
              <Table>
                <thead>
                  <tr>
                    <td></td>
                    <td>Serramar</td>
                    <td>P</td>
                    <td>J</td>
                    <td>V</td>
                    <td>E</td>
                    <td>D</td>
                    <td>GP</td>
                    <td>GC</td>
                    <td>CA</td>
                    <td>CV</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1º</td> {/* POSICAO  */}
                    <td>Mar Azul</td> {/* EQUIPE  */}
                    <td>1</td> {/* PONTOS  */}
                    <td>1</td> {/* JOGOS  */}
                    <td>0</td> {/* VITORIAS  */}
                    <td>1</td> {/* EMPATES  */}
                    <td>0</td> {/* DERROTAS  */}
                    <td>1</td> {/* GOLS PRO  */}
                    <td>1</td> {/* GOLS CONTRA  */}
                    <td>2</td> {/* CARTAO AMARELO  */}
                    <td>0</td> {/* CARTAO VERMELHO  */}
                  </tr>
                  <tr>
                    <td>2º</td> {/* POSICAO  */}
                    <td>Serraria</td> {/* EQUIPE  */}
                    <td>1</td> {/* PONTOS  */}
                    <td>1</td> {/* JOGOS  */}
                    <td>0</td> {/* VITORIAS  */}
                    <td>1</td> {/* EMPATES  */}
                    <td>0</td> {/* DERROTAS  */}
                    <td>1</td> {/* GOLS PRO  */}
                    <td>1</td> {/* GOLS CONTRA  */}
                    <td>2</td> {/* CARTAO AMARELO  */}
                    <td>0</td> {/* CARTAO VERMELHO  */}
                  </tr>
                  <tr>
                    <td>3º</td> {/* POSICAO  */}
                    <td>Aliança</td> {/* EQUIPE  */}
                    <td>0</td> {/* PONTOS  */}
                    <td>0</td> {/* JOGOS  */}
                    <td>0</td> {/* VITORIAS  */}
                    <td>0</td> {/* EMPATES  */}
                    <td>0</td> {/* DERROTAS  */}
                    <td>0</td> {/* GOLS PRO  */}
                    <td>0</td> {/* GOLS CONTRA  */}
                    <td>0</td> {/* CARTAO AMARELO  */}
                    <td>0</td> {/* CARTAO VERMELHO  */}
                  </tr>
                  <tr>
                    <td>4º</td> {/* POSICAO  */}
                    <td>Central</td> {/* EQUIPE  */}
                    <td>0</td> {/* PONTOS  */}
                    <td>0</td> {/* JOGOS  */}
                    <td>0</td> {/* VITORIAS  */}
                    <td>0</td> {/* EMPATES  */}
                    <td>0</td> {/* DERROTAS  */}
                    <td>0</td> {/* GOLS PRO  */}
                    <td>0</td> {/* GOLS CONTRA  */}
                    <td>0</td> {/* CARTAO AMARELO  */}
                    <td>0</td> {/* CARTAO VERMELHO  */}
                  </tr>
                  <tr>
                    <td>5º</td> {/* POSICAO  */}
                    <td>Farroupilha</td> {/* EQUIPE  */}
                    <td>0</td> {/* PONTOS  */}
                    <td>0</td> {/* JOGOS  */}
                    <td>0</td> {/* VITORIAS  */}
                    <td>0</td> {/* EMPATES  */}
                    <td>0</td> {/* DERROTAS  */}
                    <td>0</td> {/* GOLS PRO  */}
                    <td>0</td> {/* GOLS CONTRA  */}
                    <td>0</td> {/* CARTAO AMARELO  */}
                    <td>0</td> {/* CARTAO VERMELHO  */}
                  </tr>
                  <tr>
                    <td>6º</td> {/* POSICAO  */}
                    <td>GAO</td> {/* EQUIPE  */}
                    <td>0</td> {/* PONTOS  */}
                    <td>0</td> {/* JOGOS  */}
                    <td>0</td> {/* VITORIAS  */}
                    <td>0</td> {/* EMPATES  */}
                    <td>0</td> {/* DERROTAS  */}
                    <td>0</td> {/* GOLS PRO  */}
                    <td>0</td> {/* GOLS CONTRA  */}
                    <td>0</td> {/* CARTAO AMARELO  */}
                    <td>0</td> {/* CARTAO VERMELHO  */}
                  </tr>
                  <tr>
                    <td>7º</td> {/* POSICAO  */}
                    <td>Minuano</td> {/* EQUIPE  */}
                    <td>0</td> {/* PONTOS  */}
                    <td>0</td> {/* JOGOS  */}
                    <td>0</td> {/* VITORIAS  */}
                    <td>0</td> {/* EMPATES  */}
                    <td>0</td> {/* DERROTAS  */}
                    <td>0</td> {/* GOLS PRO  */}
                    <td>0</td> {/* GOLS CONTRA  */}
                    <td>0</td> {/* CARTAO AMARELO  */}
                    <td>0</td> {/* CARTAO VERMELHO  */}
                  </tr>
                  <tr>
                    <td>8º</td> {/* POSICAO  */}
                    <td>Serraria</td> {/* EQUIPE  */}
                    <td>0</td> {/* PONTOS  */}
                    <td>0</td> {/* JOGOS  */}
                    <td>0</td> {/* VITORIAS  */}
                    <td>0</td> {/* EMPATES  */}
                    <td>0</td> {/* DERROTAS  */}
                    <td>0</td> {/* GOLS PRO  */}
                    <td>0</td> {/* GOLS CONTRA  */}
                    <td>0</td> {/* CARTAO AMARELO  */}
                    <td>0</td> {/* CARTAO VERMELHO  */}
                  </tr>
                  <tr>
                    <td>9º</td> {/* POSICAO  */}
                    <td>Tramandaí</td> {/* EQUIPE  */}
                    <td>0</td> {/* PONTOS  */}
                    <td>0</td> {/* JOGOS  */}
                    <td>0</td> {/* VITORIAS  */}
                    <td>0</td> {/* EMPATES  */}
                    <td>0</td> {/* DERROTAS  */}
                    <td>0</td> {/* GOLS PRO  */}
                    <td>0</td> {/* GOLS CONTRA  */}
                    <td>0</td> {/* CARTAO AMARELO  */}
                    <td>0</td> {/* CARTAO VERMELHO  */}
                  </tr>
                  <tr>
                    <td>10º</td> {/* POSICAO  */}
                    <td>União</td> {/* EQUIPE  */}
                    <td>0</td> {/* PONTOS  */}
                    <td>0</td> {/* JOGOS  */}
                    <td>0</td> {/* VITORIAS  */}
                    <td>0</td> {/* EMPATES  */}
                    <td>0</td> {/* DERROTAS  */}
                    <td>0</td> {/* GOLS PRO  */}
                    <td>0</td> {/* GOLS CONTRA  */}
                    <td>0</td> {/* CARTAO AMARELO  */}
                    <td>0</td> {/* CARTAO VERMELHO  */}
                  </tr>
                  <tr>
                    <td>11º</td> {/* POSICAO  */}
                    <td>Xangri-lá</td> {/* EQUIPE  */}
                    <td>0</td> {/* PONTOS  */}
                    <td>0</td> {/* JOGOS  */}
                    <td>0</td> {/* VITORIAS  */}
                    <td>0</td> {/* EMPATES  */}
                    <td>0</td> {/* DERROTAS  */}
                    <td>0</td> {/* GOLS PRO  */}
                    <td>0</td> {/* GOLS CONTRA  */}
                    <td>0</td> {/* CARTAO AMARELO  */}
                    <td>0</td> {/* CARTAO VERMELHO  */}
                  </tr>
                </tbody>
              </Table>
            </AccordionContent>
          </AccordionItem>
        </AccordionRoot>
      </Container>
    </Layout>
  )
}
