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
                    <td>J</td>
                    <td>P</td>
                    <td>V</td>
                    <td>E</td>
                    <td>D</td>
                    <td>SG</td>
                    <td>GP</td>
                    <td>GC</td>
                    <td>CA</td>
                    <td>CV</td>
                  </tr>
                </thead>
                <tbody>
                  {/* 2 games */}
                  <tr>
                    <td>1º</td> {/* POSICAO  */}
                    <td>Central</td> {/* EQUIPE  */}
                    <td>4</td> {/* JOGOS  */}
                    <td>10</td> {/* PONTOS  */}
                    <td>3</td> {/* VITORIAS  */}
                    <td>1</td> {/* EMPATES  */}
                    <td>0</td> {/* DERROTAS  */}
                    <td>7</td> {/* SALDO DE GOLS  */}
                    <td>10</td> {/* GOLS PRO  */}
                    <td>3</td> {/* GOLS CONTRA  */}
                    <td>15</td> {/* CARTAO AMARELO  */}
                    <td>0</td> {/* CARTAO VERMELHO  */}
                  </tr>
                  <tr>
                    <td>2º</td> {/* POSICAO  */}
                    <td>Serraria</td> {/* EQUIPE  */}
                    <td>4</td> {/* JOGOS  */}
                    <td>8</td> {/* PONTOS  */}
                    <td>2</td> {/* VITORIAS  */}
                    <td>2</td> {/* EMPATES  */}
                    <td>0</td> {/* DERROTAS  */}
                    <td>2</td> {/* SALDO DE GOLS  */}
                    <td>4</td> {/* GOLS PRO  */}
                    <td>2</td> {/* GOLS CONTRA  */}
                    <td>11</td> {/* CARTAO AMARELO  */}
                    <td>0</td> {/* CARTAO VERMELHO  */}
                  </tr>
                  <tr>
                    <td>3º</td> {/* POSICAO  */}
                    <td>Minuano</td> {/* EQUIPE  */}
                    <td>4</td> {/* JOGOS  */}
                    <td>7</td> {/* PONTOS  */}
                    <td>2</td> {/* VITORIAS  */}
                    <td>1</td> {/* EMPATES  */}
                    <td>1</td> {/* DERROTAS  */}
                    <td>0</td> {/* SALDO DE GOLS  */}
                    <td>6</td> {/* GOLS PRO  */}
                    <td>6</td> {/* GOLS CONTRA  */}
                    <td>15</td> {/* CARTAO AMARELO  */}
                    <td>0</td> {/* CARTAO VERMELHO  */}
                  </tr>
                  <tr>
                    <td>4º</td> {/* POSICAO  */}
                    <td>Xangri-lá</td> {/* EQUIPE  */}
                    <td>4</td> {/* JOGOS  */}
                    <td>6</td> {/* PONTOS  */}
                    <td>2</td> {/* VITORIAS  */}
                    <td>0</td> {/* EMPATES  */}
                    <td>2</td> {/* DERROTAS  */}
                    <td>-3</td> {/* SALDO DE GOLS  */}
                    <td>4</td> {/* GOLS PRO  */}
                    <td>7</td> {/* GOLS CONTRA  */}
                    <td>16</td> {/* CARTAO AMARELO  */}
                    <td>0</td> {/* CARTAO VERMELHO  */}
                  </tr>
                  <tr>
                    <td>5º</td> {/* POSICAO  */}
                    <td>Mar Azul</td> {/* EQUIPE  */}
                    <td>4</td> {/* JOGOS  */}
                    <td>5</td> {/* PONTOS  */}
                    <td>1</td> {/* VITORIAS  */}
                    <td>2</td> {/* EMPATES  */}
                    <td>1</td> {/* DERROTAS  */}
                    <td>2</td> {/* SALDO DE GOLS  */}
                    <td>5</td> {/* GOLS PRO  */}
                    <td>3</td> {/* GOLS CONTRA  */}
                    <td>11</td> {/* CARTAO AMARELO  */}
                    <td>3</td> {/* CARTAO VERMELHO  */}
                  </tr>
                  <tr>
                    <td>6º</td> {/* POSICAO  */}
                    <td>Farroupilha</td> {/* EQUIPE  */}
                    <td>4</td> {/* JOGOS  */}
                    <td>5</td> {/* PONTOS  */}
                    <td>1</td> {/* VITORIAS  */}
                    <td>2</td> {/* EMPATES  */}
                    <td>1</td> {/* DERROTAS  */}
                    <td>0</td> {/* SALDO DE GOLS  */}
                    <td>3</td> {/* GOLS PRO  */}
                    <td>3</td> {/* GOLS CONTRA  */}
                    <td>15</td> {/* CARTAO AMARELO  */}
                    <td>3</td> {/* CARTAO VERMELHO  */}
                  </tr>
                  <tr>
                    <td>7º</td> {/* POSICAO  */}
                    <td>GAO</td> {/* EQUIPE  */}
                    <td>4</td> {/* JOGOS  */}
                    <td>4</td> {/* PONTOS  */}
                    <td>1</td> {/* VITORIAS  */}
                    <td>1</td> {/* EMPATES  */}
                    <td>2</td> {/* DERROTAS  */}
                    <td>0</td> {/* SALDO DE GOLS  */}
                    <td>5</td> {/* GOLS PRO  */}
                    <td>5</td> {/* GOLS CONTRA  */}
                    <td>7</td> {/* CARTAO AMARELO  */}
                    <td>0</td> {/* CARTAO VERMELHO  */}
                  </tr>
                  <tr>
                    <td>8º</td> {/* POSICAO  */}
                    <td>Aliança</td> {/* EQUIPE  */}
                    <td>4</td> {/* JOGOS  */}
                    <td>4</td> {/* PONTOS  */}
                    <td>0</td> {/* VITORIAS  */}
                    <td>4</td> {/* EMPATES  */}
                    <td>0</td> {/* DERROTAS  */}
                    <td>0</td> {/* SALDO DE GOLS  */}
                    <td>2</td> {/* GOLS PRO  */}
                    <td>2</td> {/* GOLS CONTRA  */}
                    <td>10</td> {/* CARTAO AMARELO  */}
                    <td>0</td> {/* CARTAO VERMELHO  */}
                  </tr>
                  <tr>
                    <td>9º</td> {/* POSICAO  */}
                    <td>União</td> {/* EQUIPE  */}
                    <td>4</td> {/* JOGOS  */}
                    <td>2</td> {/* PONTOS  */}
                    <td>0</td> {/* VITORIAS  */}
                    <td>2</td> {/* EMPATES  */}
                    <td>2</td> {/* DERROTAS  */}
                    <td>-2</td> {/* SALDO DE GOLS  */}
                    <td>4</td> {/* GOLS PRO  */}
                    <td>6</td> {/* GOLS CONTRA  */}
                    <td>14</td> {/* CARTAO AMARELO  */}
                    <td>2</td> {/* CARTAO VERMELHO  */}
                  </tr>
                  <tr>
                    <td>10º</td> {/* POSICAO  */}
                    <td>Tramandaí</td> {/* EQUIPE  */}
                    <td>4</td> {/* JOGOS  */}
                    <td>1</td> {/* PONTOS  */}
                    <td>0</td> {/* VITORIAS  */}
                    <td>1</td> {/* EMPATES  */}
                    <td>3</td> {/* DERROTAS  */}
                    <td>-6</td> {/* SALDO DE GOLS  */}
                    <td>4</td> {/* GOLS PRO  */}
                    <td>10</td> {/* GOLS CONTRA  */}
                    <td>13</td> {/* CARTAO AMARELO  */}
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
