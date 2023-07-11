import Layout from '@/components/Site/Layout'
import { Container, NextGamesData } from './styles'
import { getAPIClient } from '@/lib/axios'
import { GetServerSideProps } from 'next'

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

interface DataProps {
  games: NextGamesProps[]
}

export default function Games({ games }: DataProps) {
  const formatDate = new Intl.DateTimeFormat('pt-BR', {
    timeZone: 'GMT',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  })
  return (
    <Layout>
      <Container>
        {games.map((item) => {
          const dateGames = new Date(item.date)
          const dateGamesFormated = formatDate.format(dateGames)
          return (
            <div key={item.id}>
              <NextGamesData>
                <div>{dateGamesFormated}</div>
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
      </Container>
    </Layout>
  )
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apiClient = getAPIClient(ctx)

  const response = await apiClient.get('/games/all-games')

  const responseGames: NextGamesProps[] = []

  response.data.map((item: NextGamesProps) =>
    responseGames.push({
      id: item.id,
      categoryId: item.categoryId,
      categoryName: item.categoryName,
      date: item.date,
      groupId: item.groupId,
      groupName: item.groupName,
      teamA: item.teamA,
      imageTeamA: item.imageTeamA,
      teamB: item.teamB,
      imageTeamB: item.imageTeamB,
    }),
  )

  return {
    props: { games: responseGames },
  }
}
