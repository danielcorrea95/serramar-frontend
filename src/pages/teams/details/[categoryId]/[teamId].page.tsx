import Layout from '@/components/Site/Layout'
import { getAPIClient } from '@/lib/axios'
import { GetServerSideProps } from 'next'
import {
  Container,
  LogoImage,
  PlayerContainer,
  PlayerDetails,
  PlayerItem,
  TeamDetails,
  TeamDetailsContainer,
} from './styles'
import Image from 'next/image'

import imagedefault from '../../../../../assets/images/default.png'
import imagePlayerDefault from '../../../../../assets/images/player.png'
import { Heading, Text } from '@danielcorrea-ui/react'

interface TeamProps {
  id: string
  name: string
  image: string
  responsible: string
  foundation_date: Date
  cityname: string
}

interface PlayerProps {
  id: string
  name: string
  nickname: string
  date_birth: Date
  avatar: string
}

interface DataProps {
  team: TeamProps
  players: PlayerProps[]
}

export default function CategoryTeam({ team, players }: DataProps) {
  const route = process.env.AWS_ROUTE

  const formatDate = new Intl.DateTimeFormat('pt-BR', {
    timeZone: 'GMT',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  })

  return (
    <Layout>
      <Container>
        <TeamDetailsContainer>
          <TeamDetails>
            <div>
              <LogoImage
                src={team.image ? `${route}/teams/${team.image}` : imagedefault}
                height={100}
                width={100}
                alt=""
              />
            </div>
            <div>
              <Heading>{team.name}</Heading>
              <Text>Cidade: {team.cityname}</Text>
              <Text>
                Fundação:
                {formatDate.format(new Date(team.foundation_date))}
              </Text>
            </div>
          </TeamDetails>
        </TeamDetailsContainer>
        <PlayerContainer>
          {players.map((item) => {
            return (
              <PlayerItem key={item.id}>
                <Image
                  src={
                    item.avatar
                      ? `${route}/players/${item.avatar}`
                      : imagePlayerDefault
                  }
                  width={100}
                  height={100}
                  alt=""
                />
                <PlayerDetails>
                  <Text size={'sm'}>
                    Nome: <br />
                    {item.name}
                  </Text>
                </PlayerDetails>
                <PlayerDetails>
                  <Text size={'sm'}>
                    Apelido:
                    <br /> {item.nickname}
                  </Text>
                </PlayerDetails>
                <PlayerDetails>
                  <Text size={'sm'}>
                    Data de nascimento:
                    <br />
                    {formatDate.format(new Date(item.date_birth))}
                  </Text>
                </PlayerDetails>
              </PlayerItem>
            )
          })}
        </PlayerContainer>
      </Container>
    </Layout>
  )
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const categoryId = ctx.query.categoryId
  const teamId = ctx.query.teamId
  const apiClient = getAPIClient(ctx)

  const team = await apiClient.get(`/team/id/site/${teamId}`)
  const teamData: TeamProps = team.data[0]

  const players = await apiClient.get(
    `/players/to-site/category-id/team-id/${categoryId}/${teamId}`,
  )

  return {
    props: {
      team: teamData,
      players: players.data,
    },
  }
}
