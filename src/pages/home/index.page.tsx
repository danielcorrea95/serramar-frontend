import Layout from '@/components/Site/Layout'
import { Heading, Text } from '@danielcorrea-ui/react'
import Link from 'next/link'
import {
  CapaImage,
  Container,
  GamesOfDay,
  GamesOfDayDetails,
  NextGames,
  NextGamesData,
  OldGames,
  OldGamesContainer,
  OldGamesDescription,
  OldGamesSliderContainer,
  TeamDetails,
} from './styles'
import Image from 'next/image'

import capaimage from '../../../assets/images/capa-copa-dos-campeoes.jpg'
import imagedefault from '../../../assets/images/default.png'
import { useEffect, useState } from 'react'
import { api } from '@/lib/api'
import { useKeenSlider } from 'keen-slider/react'

interface NextGamesProps {
  id: string
  date: Date
  categoryId: string
  categoryName: string
  teamA: string
  imageTeamA: string
  teamB: string
  imageTeamB: string
  groupId: string
  groupName: string
}

export default function Home() {
  const [nextGames, setNextGames] = useState<NextGamesProps[]>([])
  const [oldGames, setOldGames] = useState<NextGamesProps[]>([])
  const [gamesToday, setGamesToday] = useState<NextGamesProps[]>([])
  const route = process.env.AWS_ROUTE

  useEffect(() => {
    async function getFourNextGames() {
      const tempNextGames: NextGamesProps[] = []
      const tempOldGames: NextGamesProps[] = []
      const tempTodayGames: NextGamesProps[] = []

      const response = await api.get('/games/next-four-games')

      const data: NextGamesProps[] = response.data

      data.forEach((item) => {
        tempNextGames.push(item)
      })
      setNextGames(tempNextGames)

      const oldGames = await api.get('/games/old-four-games')

      const tmpDataOldGames: NextGamesProps[] = oldGames.data

      tmpDataOldGames.forEach((item) => {
        tempOldGames.push(item)
      })
      setOldGames(tempOldGames)

      const todayGames = await api.get('/games/games-today')

      const tempGamesToday: NextGamesProps[] = todayGames.data

      tempGamesToday.forEach((item) => {
        tempTodayGames.push(item)
      })

      setGamesToday(tempTodayGames)
    }

    getFourNextGames()
  }, [])

  const formatDate = new Intl.DateTimeFormat('pt-BR', {
    timeZone: 'GMT',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  })

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 1,
      spacing: 0,
    },
  })
  return (
    <>
      <Layout>
        <CapaImage src={capaimage} alt="capa" />
        {gamesToday.length > 0 ? (
          <>
            <Container>
              <Text size={'lg'}>Jogos do dia</Text>
            </Container>
            <Container>
              <GamesOfDay>
                {gamesToday.map((item) => {
                  const dateTodayGame = new Date(item.date)
                  const dateTodayGameFormated = formatDate.format(dateTodayGame)
                  return (
                    <GamesOfDayDetails key={item.id}>
                      <TeamDetails>
                        <Image
                          src={
                            item.imageTeamA
                              ? `${route}/teams/${item.imageTeamA}`
                              : imagedefault
                          }
                          height={50}
                          width={50}
                          alt=""
                        />
                        <Text>{item.teamA}</Text>
                      </TeamDetails>
                      <Text>X</Text>
                      <TeamDetails>
                        <Image
                          src={
                            item.imageTeamB
                              ? `${route}/teams/${item.imageTeamB}`
                              : imagedefault
                          }
                          height={50}
                          width={50}
                          alt=""
                        />
                        <Text>{item.teamB}</Text>
                      </TeamDetails>
                      <TeamDetails>
                        <Text>{dateTodayGameFormated}</Text>
                        <Text>{item.categoryName}</Text>
                        <Text>{item.groupName}</Text>
                      </TeamDetails>
                    </GamesOfDayDetails>
                  )
                })}
              </GamesOfDay>
            </Container>
          </>
        ) : null}

        <Container>
          <NextGames>
            <Heading style={{ marginBottom: '34px' }}>Proxímos Jogos</Heading>
            {nextGames.map((item) => {
              const date = new Date(item.date)
              const dateFormated = formatDate.format(date)
              return (
                <div key={item.id}>
                  <NextGamesData>
                    <div>{dateFormated}</div>
                    <div>{item.categoryName}</div>
                    <div>{item.groupName}</div>
                    <div>{item.teamA}</div>
                    <div>
                      <p>X</p>
                    </div>
                    <div>{item.teamB}</div>
                  </NextGamesData>
                </div>
              )
            })}
            <Link href={'/games'}>Todos os Jogos</Link>
          </NextGames>
          <OldGames>
            <Heading>Jogos Anteriores</Heading>
            <OldGamesSliderContainer className="keen-slider" ref={sliderRef}>
              {oldGames.map((item) => {
                const dateOldGame = new Date(item.date)
                const dateOldGameFormated = formatDate.format(dateOldGame)
                return (
                  <div
                    key={item.id}
                    className="keen-slider__slide"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      padding: '1rem',
                      width: '100%',
                    }}
                  >
                    <OldGamesContainer>
                      <TeamDetails>
                        <Image
                          src={
                            item.imageTeamA
                              ? `${route}/teams/${item.imageTeamA}`
                              : imagedefault
                          }
                          height={50}
                          width={50}
                          alt="logo"
                        />
                        <Text>{item.teamA}</Text>
                      </TeamDetails>
                      <Heading>0</Heading>
                      <Text>X</Text>
                      <Heading>0</Heading>
                      <TeamDetails>
                        <Image
                          src={
                            item.imageTeamB
                              ? `${route}/teams/${item.imageTeamB}`
                              : imagedefault
                          }
                          height={50}
                          width={50}
                          alt="logo"
                        />
                        <Text>{item.teamB}</Text>
                      </TeamDetails>
                    </OldGamesContainer>
                    <OldGamesDescription>
                      <Text>{dateOldGameFormated}</Text>
                      <Text>{item.categoryName}</Text>
                      <Text>{item.groupName}</Text>
                      {/* <Link href={'#'}>Detalhes</Link> */}
                    </OldGamesDescription>
                  </div>
                )
              })}
            </OldGamesSliderContainer>
          </OldGames>
        </Container>
      </Layout>
    </>
  )
}
