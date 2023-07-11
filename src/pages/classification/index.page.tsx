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
                    <td>GRUPO A</td>
                    <td>P</td>
                    <td>J</td>
                    <td>V</td>
                    <td>E</td>
                    <td>D</td>
                    <td>CA</td>
                    <td>CV</td>
                    <td>GP</td>
                    <td>GC</td>
                    <td>DISC.</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1º</td>
                    <td>PROPÉ FUTSAL - NOVA PETROPOLIS</td>
                    <td>6</td>
                    <td>2</td>
                    <td>2</td>
                    <td>0</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                    <td>6</td>
                    <td>2</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>2º</td>
                    <td>EFC - GRAVATAÍ</td>
                    <td>1</td>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td>1</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>3º</td>
                    <td>BROCHIER FUTSAL - BROCHIER</td>
                    <td>1</td>
                    <td>2</td>
                    <td>0</td>
                    <td>1</td>
                    <td>1</td>
                    <td>2</td>
                    <td>0</td>
                    <td>3</td>
                    <td>4</td>
                    <td>40</td>
                  </tr>
                  <tr>
                    <td>4º</td>
                    <td>BRAZUCAS FUTSAL - CANOAS</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>3</td>
                    <td>0</td>
                  </tr>
                </tbody>
              </Table>
              <Table>
                <thead>
                  <tr>
                    <td></td>
                    <td>GRUPO B</td>
                    <td>P</td>
                    <td>J</td>
                    <td>V</td>
                    <td>E</td>
                    <td>D</td>
                    <td>CA</td>
                    <td>CV</td>
                    <td>GP</td>
                    <td>GC</td>
                    <td>DISC.</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1º</td>
                    <td>ALEGRIA F.C. - PORTO ALEGRE</td>
                    <td>6</td>
                    <td>2</td>
                    <td>2</td>
                    <td>0</td>
                    <td>0</td>
                    <td>5</td>
                    <td>0</td>
                    <td>3</td>
                    <td>0</td>
                    <td>100</td>
                  </tr>
                  <tr>
                    <td>2º</td>
                    <td>SEPI - PORTO ALEGRE</td>
                    <td>3</td>
                    <td>2</td>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td>6</td>
                    <td>0</td>
                    <td>4</td>
                    <td>2</td>
                    <td>120</td>
                  </tr>
                  <tr>
                    <td>3º</td>
                    <td>C.E. VITÓRIA - ESTEIO</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>4</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>4º</td>
                    <td>VILLAGE - ESTEIO</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>1</td>
                    <td>3</td>
                    <td>0</td>
                    <td>0</td>
                    <td>1</td>
                    <td>60</td>
                  </tr>
                </tbody>
              </Table>
              <Table>
                <thead>
                  <tr>
                    <td></td>
                    <td>GRUPO C</td>
                    <td>P</td>
                    <td>J</td>
                    <td>V</td>
                    <td>E</td>
                    <td>D</td>
                    <td>CA</td>
                    <td>CV</td>
                    <td>GP</td>
                    <td>GC</td>
                    <td>DISC.</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1º</td>
                    <td>NAPOLI - S.F. DE PAULA</td>
                    <td>3</td>
                    <td>1</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>2</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>2º</td>
                    <td>AF FUTSAL - GRAVATAÍ</td>
                    <td>3</td>
                    <td>1</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                    <td>2</td>
                    <td>1</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>3º</td>
                    <td>S.C.A.L. FUTSAL - SAPUCAIA DO SUL</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>1</td>
                    <td>2</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>4º</td>
                    <td>A.F.C. CASA BLANCA - BOM PRINCÍPIO</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>1</td>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td>2</td>
                    <td>20</td>
                  </tr>
                </tbody>
              </Table>
              <Table>
                <thead>
                  <tr>
                    <td></td>
                    <td>GRUPO D</td>
                    <td>P</td>
                    <td>J</td>
                    <td>V</td>
                    <td>E</td>
                    <td>D</td>
                    <td>CA</td>
                    <td>CV</td>
                    <td>GP</td>
                    <td>GC</td>
                    <td>DISC.</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1º</td>
                    <td>CONDOR / RL FUTSAL - PORTÃO/GRAVATAÍ</td>
                    <td>3</td>
                    <td>1</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>5</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>2º</td>
                    <td>S.E.R. TRIUNFO SUB20 - TRIUNFO</td>
                    <td>3</td>
                    <td>1</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>3</td>
                    <td>0</td>
                    <td>3</td>
                    <td>2</td>
                    <td>60</td>
                  </tr>
                  <tr>
                    <td>3º</td>
                    <td>OS GAIOLAS FUTSAL - MONTENEGRO</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>1</td>
                    <td>1</td>
                    <td>0</td>
                    <td>2</td>
                    <td>3</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>4º</td>
                    <td>VIDALPRO F.C. - PORTO ALEGRE</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>1</td>
                    <td>2</td>
                    <td>0</td>
                    <td>0</td>
                    <td>5</td>
                    <td>40</td>
                  </tr>
                </tbody>
              </Table>
              <Table>
                <thead>
                  <tr>
                    <td></td>
                    <td>GRUPO E</td>
                    <td>P</td>
                    <td>J</td>
                    <td>V</td>
                    <td>E</td>
                    <td>D</td>
                    <td>CA</td>
                    <td>CV</td>
                    <td>GP</td>
                    <td>GC</td>
                    <td>DISC.</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1º</td>
                    <td>BORGES FUTSAL - ALVORADA</td>
                    <td>3</td>
                    <td>1</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                    <td>4</td>
                    <td>2</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>2º</td>
                    <td>ATLÉTICO POR DO SOL - CACHOEIRINHA</td>
                    <td>3</td>
                    <td>1</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>4</td>
                    <td>1</td>
                    <td>1</td>
                    <td>0</td>
                    <td>130</td>
                  </tr>
                  <tr>
                    <td>3º</td>
                    <td>REAL SAPUCAIA - SAPUCAIA DO SUL</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>2</td>
                    <td>4</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>4º</td>
                    <td>ROLANTS SPORTS - ROLANTE</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>1</td>
                    <td>2</td>
                    <td>0</td>
                    <td>0</td>
                    <td>1</td>
                    <td>40</td>
                  </tr>
                </tbody>
              </Table>
              <Table>
                <thead>
                  <tr>
                    <td></td>
                    <td>GRUPO F</td>
                    <td>P</td>
                    <td>J</td>
                    <td>V</td>
                    <td>E</td>
                    <td>D</td>
                    <td>CA</td>
                    <td>CV</td>
                    <td>GP</td>
                    <td>GC</td>
                    <td>DISC.</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1º</td>
                    <td>ACBF SUB20 - CARLOS BARBOSA</td>
                    <td>6</td>
                    <td>2</td>
                    <td>2</td>
                    <td>0</td>
                    <td>0</td>
                    <td>6</td>
                    <td>0</td>
                    <td>10</td>
                    <td>1</td>
                    <td>120</td>
                  </tr>
                  <tr>
                    <td>2º</td>
                    <td>UJR/FEEVALE/BANRISUL - NOVO HAMBURGO</td>
                    <td>3</td>
                    <td>2</td>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td>2</td>
                    <td>0</td>
                    <td>4</td>
                    <td>4</td>
                    <td>40</td>
                  </tr>
                  <tr>
                    <td>3º</td>
                    <td>UNIVERSITÁRIO FUTSAL - PORTO ALEGRE</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>1</td>
                    <td>2</td>
                    <td>0</td>
                    <td>1</td>
                    <td>4</td>
                    <td>40</td>
                  </tr>
                  <tr>
                    <td>4º</td>
                    <td>SER STYLLUS - ESTEIO</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>1</td>
                    <td>2</td>
                    <td>0</td>
                    <td>1</td>
                    <td>7</td>
                    <td>40</td>
                  </tr>
                </tbody>
              </Table>
              <Table>
                <thead>
                  <tr>
                    <td></td>
                    <td>GRUPO G</td>
                    <td>P</td>
                    <td>J</td>
                    <td>V</td>
                    <td>E</td>
                    <td>D</td>
                    <td>CA</td>
                    <td>CV</td>
                    <td>GP</td>
                    <td>GC</td>
                    <td>DISC.</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1º</td>
                    <td>STREET BOYS - ESTEIO</td>
                    <td>4</td>
                    <td>2</td>
                    <td>1</td>
                    <td>1</td>
                    <td>0</td>
                    <td>3</td>
                    <td>1</td>
                    <td>7</td>
                    <td>4</td>
                    <td>110</td>
                  </tr>
                  <tr>
                    <td>2º</td>
                    <td>TROVÃO VERDE - FARROUPILHA</td>
                    <td>3</td>
                    <td>1</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>4</td>
                    <td>1</td>
                    <td>2</td>
                    <td>1</td>
                    <td>130</td>
                  </tr>
                  <tr>
                    <td>3º</td>
                    <td>TITANIUM - ESTEIO</td>
                    <td>2</td>
                    <td>2</td>
                    <td>0</td>
                    <td>2</td>
                    <td>0</td>
                    <td>7</td>
                    <td>0</td>
                    <td>7</td>
                    <td>7</td>
                    <td>140</td>
                  </tr>
                  <tr>
                    <td>4º</td>
                    <td>NOVA GERAÇÃO - SÃO JOSÉ AUSENTES</td>
                    <td>1</td>
                    <td>3</td>
                    <td>0</td>
                    <td>1</td>
                    <td>2</td>
                    <td>9</td>
                    <td>2</td>
                    <td>6</td>
                    <td>10</td>
                    <td>230</td>
                  </tr>
                </tbody>
              </Table>
              <Table>
                <thead>
                  <tr>
                    <td></td>
                    <td>GRUPO H</td>
                    <td>P</td>
                    <td>J</td>
                    <td>V</td>
                    <td>E</td>
                    <td>D</td>
                    <td>CA</td>
                    <td>CV</td>
                    <td>GP</td>
                    <td>GC</td>
                    <td>DISC.</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1º</td>
                    <td>IDENTIFICA F.C. - CAXIAS DO SUL</td>
                    <td>6</td>
                    <td>2</td>
                    <td>2</td>
                    <td>0</td>
                    <td>0</td>
                    <td>6</td>
                    <td>0</td>
                    <td>5</td>
                    <td>2</td>
                    <td>120</td>
                  </tr>
                  <tr>
                    <td>2º</td>
                    <td>BORRACHOS FUTSAL - ALVORADA</td>
                    <td>3</td>
                    <td>1</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                    <td>4</td>
                    <td>0</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>3º</td>
                    <td>OGSR- VIAMÃO</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>1</td>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td>2</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>4º</td>
                    <td>VMDL - PORTO ALEGRE</td>
                    <td>0</td>
                    <td>2</td>
                    <td>0</td>
                    <td>0</td>
                    <td>2</td>
                    <td>6</td>
                    <td>1</td>
                    <td>1</td>
                    <td>7</td>
                    <td>170</td>
                  </tr>
                </tbody>
              </Table>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="feminino">
            <AccordionTrigger>Feminino</AccordionTrigger>
            <AccordionContent>
              <Table>
                <thead>
                  <tr>
                    <td></td>
                    <td>GRUPO A</td>
                    <td>P</td>
                    <td>J</td>
                    <td>V</td>
                    <td>E</td>
                    <td>D</td>
                    <td>CA</td>
                    <td>CV</td>
                    <td>GP</td>
                    <td>GC</td>
                    <td>DISC.</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1º</td>
                    <td>UJR/FEEVALE/BANRISUL - NOVO HAMBURGO</td>
                    <td>8</td>
                    <td>4</td>
                    <td>2</td>
                    <td>2</td>
                    <td>0</td>
                    <td>3</td>
                    <td>1</td>
                    <td>8</td>
                    <td>6</td>
                    <td>110</td>
                  </tr>
                  <tr>
                    <td>2º</td>
                    <td>ZUEIRA FÊNIX F.C. - VIAMÃO</td>
                    <td>6</td>
                    <td>3</td>
                    <td>2</td>
                    <td>0</td>
                    <td>1</td>
                    <td>4</td>
                    <td>1</td>
                    <td>8</td>
                    <td>2</td>
                    <td>130</td>
                  </tr>
                  <tr>
                    <td>3º</td>
                    <td>LLFA - SÃO LEOPOLDO</td>
                    <td>5</td>
                    <td>3</td>
                    <td>1</td>
                    <td>2</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                    <td>6</td>
                    <td>5</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>4º</td>
                    <td>DAMAS DA BOLA - SAPUCAIA DO SUL</td>
                    <td>3</td>
                    <td>4</td>
                    <td>0</td>
                    <td>4</td>
                    <td>1</td>
                    <td>1</td>
                    <td>0</td>
                    <td>6</td>
                    <td>10</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>5º</td>
                    <td>RIVER BRAZ - ALVORADA</td>
                    <td>1</td>
                    <td>4</td>
                    <td>0</td>
                    <td>1</td>
                    <td>3</td>
                    <td>5</td>
                    <td>1</td>
                    <td>3</td>
                    <td>9</td>
                    <td>150</td>
                  </tr>
                </tbody>
              </Table>

              <Table>
                <thead>
                  <tr>
                    <td></td>
                    <td>GRUPO B</td>
                    <td>P</td>
                    <td>J</td>
                    <td>V</td>
                    <td>E</td>
                    <td>D</td>
                    <td>CA</td>
                    <td>CV</td>
                    <td>GP</td>
                    <td>GC</td>
                    <td>DISC.</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1º</td>
                    <td>FLAMENGO F.F. - ESTEIO</td>
                    <td>9</td>
                    <td>3</td>
                    <td>3</td>
                    <td>0</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                    <td>10</td>
                    <td>3</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>2º</td>
                    <td>AJAX F.F. - ALVORADA</td>
                    <td>6</td>
                    <td>3</td>
                    <td>2</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>9</td>
                    <td>4</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>3º</td>
                    <td>EL CANO - PORTO ALEGRE</td>
                    <td>6</td>
                    <td>3</td>
                    <td>2</td>
                    <td>0</td>
                    <td>1</td>
                    <td>4</td>
                    <td>1</td>
                    <td>8</td>
                    <td>7</td>
                    <td>130</td>
                  </tr>
                  <tr>
                    <td>4º</td>
                    <td>UNIVERSITÁRIO F.F. - PORTO ALEGRE</td>
                    <td>0</td>
                    <td>3</td>
                    <td>0</td>
                    <td>0</td>
                    <td>3</td>
                    <td>0</td>
                    <td>0</td>
                    <td>2</td>
                    <td>13</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>5º</td>
                    <td>U.D.F. - SÃO LEOPOLDO</td>
                    <td>0</td>
                    <td>2</td>
                    <td>0</td>
                    <td>0</td>
                    <td>2</td>
                    <td>2</td>
                    <td>0</td>
                    <td>4</td>
                    <td>6</td>
                    <td>40</td>
                  </tr>
                </tbody>
              </Table>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="Master 40">
            <AccordionTrigger>Master 40</AccordionTrigger>
            <AccordionContent>
              <Table>
                <thead>
                  <tr>
                    <td></td>
                    <td>GRUPO A</td>
                    <td>P</td>
                    <td>J</td>
                    <td>V</td>
                    <td>E</td>
                    <td>D</td>
                    <td>CA</td>
                    <td>CV</td>
                    <td>GP</td>
                    <td>GC</td>
                    <td>DISC.</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1º</td>
                    <td>AMERICA E.C./PERFECTA - ESTEIO</td>
                    <td>9</td>
                    <td>3</td>
                    <td>3</td>
                    <td>0</td>
                    <td>0</td>
                    <td>1</td>
                    <td>1</td>
                    <td>14</td>
                    <td>0</td>
                    <td>70</td>
                  </tr>
                  <tr>
                    <td>2º</td>
                    <td>MAJEWSKI - PORTO ALEGRE</td>
                    <td>4</td>
                    <td>2</td>
                    <td>1</td>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                    <td>8</td>
                    <td>2</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>3º</td>
                    <td>CASA DA LATARIA - CAXIAS DO SUL</td>
                    <td>4</td>
                    <td>3</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>3</td>
                    <td>1</td>
                    <td>5</td>
                    <td>7</td>
                    <td>110</td>
                  </tr>
                  <tr>
                    <td>4º</td>
                    <td>BOCA JR/BOKA BRABA - ALVORADA</td>
                    <td>3</td>
                    <td>2</td>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td>3</td>
                    <td>0</td>
                    <td>3</td>
                    <td>5</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>5º</td>
                    <td>UPF - PORTO ALEGRE</td>
                    <td>0</td>
                    <td>4</td>
                    <td>0</td>
                    <td>0</td>
                    <td>4</td>
                    <td>2</td>
                    <td>0</td>
                    <td>1</td>
                    <td>17</td>
                    <td>40</td>
                  </tr>
                </tbody>
              </Table>

              <Table>
                <thead>
                  <tr>
                    <td></td>
                    <td>GRUPO B</td>
                    <td>P</td>
                    <td>J</td>
                    <td>V</td>
                    <td>E</td>
                    <td>D</td>
                    <td>CA</td>
                    <td>CV</td>
                    <td>GP</td>
                    <td>GC</td>
                    <td>DISC.</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1º</td>
                    <td>IDENTIFICA F.C. - CAXIAS DO SUL</td>
                    <td>10</td>
                    <td>4</td>
                    <td>3</td>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                    <td>10</td>
                    <td>7</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>2º</td>
                    <td>PEÑAROL - GUAÍBA</td>
                    <td>6</td>
                    <td>3</td>
                    <td>2</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>5</td>
                    <td>7</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>3º</td>
                    <td>GAO - OSÓRIO</td>
                    <td>6</td>
                    <td>3</td>
                    <td>2</td>
                    <td>0</td>
                    <td>1</td>
                    <td>4</td>
                    <td>0</td>
                    <td>6</td>
                    <td>6</td>
                    <td>80</td>
                  </tr>
                  <tr>
                    <td>4º</td>
                    <td>VILLAGE - ESTEIO</td>
                    <td>1</td>
                    <td>3</td>
                    <td>0</td>
                    <td>1</td>
                    <td>2</td>
                    <td>2</td>
                    <td>0</td>
                    <td>5</td>
                    <td>8</td>
                    <td>40</td>
                  </tr>
                  <tr>
                    <td>5º</td>
                    <td>VMDL - PORTO ALEGRE</td>
                    <td>0</td>
                    <td>3</td>
                    <td>0</td>
                    <td>0</td>
                    <td>3</td>
                    <td>1</td>
                    <td>0</td>
                    <td>2</td>
                    <td>10</td>
                    <td>20</td>
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
