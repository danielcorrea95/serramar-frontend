import Sidebar from '@/components/SideBar'
import { getAPIClient } from '@/lib/axios'
import { withSSRAuth } from '@/utils/withSSRAuth'
import {
  AccordionContent,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger,
  Container,
  ContainerGoalsAndCards,
  ContainerItems,
  ContentGoalsAndCards,
  DetailsGoalsAndCards,
  ItemTeam,
  ItemsGoalsAndCards,
} from './styles'
import {
  Box,
  Button,
  Heading,
  SelectInput,
  Text,
  TextInput,
} from '@danielcorrea-ui/react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { api } from '@/lib/api'

const updateGameDetailFormSchema = z.object({
  id: z.string(),
  userId: z.string(),
  gameId: z.string(),
  firstPeriodStart: z.string(),
  firstPeriodEnd: z.string(),
  secondPeriodStart: z.string(),
  secondPeriodEnd: z.string(),
  extraPeriodStart: z.string(),
  extraPeriodEnd: z.string(),
  observation: z.string(),
})

type UpdateGameDetailFormSchema = z.infer<typeof updateGameDetailFormSchema>

interface gameProps {
  id: string
  teamAId: string
  teamA: string
  teamBId: string
  teamB: string
  categoryId: string
  categoryName: string
  date: Date
}

interface ReturnPlayerProps {
  id: string
  name: string
  document: string
}

interface ReturnDataProps {
  game: gameProps
  gameDetails: UpdateGameDetailFormSchema
  playersTeamA: ReturnPlayerProps[]
  playersTeamB: ReturnPlayerProps[]
}

export default function Scoresheet({
  game,
  gameDetails,
  playersTeamA,
  playersTeamB,
}: ReturnDataProps) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = useForm<UpdateGameDetailFormSchema>({
    resolver: zodResolver(updateGameDetailFormSchema),
  })

  useEffect(() => {
    setValue('id', gameDetails.id)
    setValue('userId', gameDetails.userId)
    setValue('gameId', gameDetails.gameId)
  }, [gameDetails, setValue])

  async function updateGameDetails(
    data: UpdateGameDetailFormSchema,
  ): Promise<void> {
    try {
      console.log(data)
      await api.put(`/games/details/update/${data.id}`, data)
    } catch (error) {}
  }

  // async function createPlayerNumber(data: PlayerProps[]) {
  //   console.log(data)
  //   // await api.put(`/games/players/number/${game.id}`, data)
  // }

  return (
    <Sidebar>
      <Container>
        <AccordionRoot type="single" collapsible>
          <AccordionItem value="gameDetails">
            <AccordionTrigger>Detalhes da Partida</AccordionTrigger>
            <AccordionContent>
              <Box as="form" onSubmit={handleSubmit(updateGameDetails)}>
                <ContainerItems>
                  <input type="hidden" {...register('id')} />
                  <input type="hidden" {...register('userId')} />
                  <input type="hidden" {...register('gameId')} />
                  <label>
                    <Text>Primeiro período início</Text>
                    <TextInput type="time" {...register('firstPeriodStart')} />
                  </label>
                  <label>
                    <Text>Primeiro período final</Text>
                    <TextInput type="time" {...register('firstPeriodEnd')} />
                  </label>
                  <label>
                    <Text>Segundo período início</Text>
                    <TextInput type="time" {...register('secondPeriodStart')} />
                  </label>
                  <label>
                    <Text>Segundo período final</Text>
                    <TextInput type="time" {...register('secondPeriodEnd')} />
                  </label>
                  <label>
                    <Text>Período extra início</Text>
                    <TextInput type="time" {...register('extraPeriodStart')} />
                  </label>
                  <label>
                    <Text>Período extra final</Text>
                    <TextInput type="time" {...register('extraPeriodEnd')} />
                  </label>
                </ContainerItems>
                <label>
                  <Text>Observações</Text>
                  <TextInput type="text" {...register('observation')} />
                </label>
                <Button
                  disabled={isSubmitting}
                  style={{ width: '100%', marginTop: '1rem' }}
                >
                  Salvar
                </Button>
              </Box>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="teamA">
            <AccordionTrigger>Equipe A: {game.teamA}</AccordionTrigger>
            <AccordionContent>
              {playersTeamA.map((item) => {
                return (
                  <ItemTeam key={item.id}>
                    <input type="hidden" value={item.id} />
                    <TextInput type="number" />
                    <Text>{item.document}</Text>
                    <Text>{item.name}</Text>
                  </ItemTeam>
                )
              })}
              <Button style={{ width: '100%' }}>Salvar</Button>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="teamB">
            <AccordionTrigger>Equipe: {game.teamB}</AccordionTrigger>
            <AccordionContent>
              {playersTeamB.map((item) => {
                return (
                  <ItemTeam key={item.id}>
                    <TextInput type="number" />
                    <Text>{item.document}</Text>
                    <Text>{item.name}</Text>
                  </ItemTeam>
                )
              })}
              <Button style={{ width: '100%' }}>Salvar</Button>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="goals">
            <AccordionTrigger>Gols</AccordionTrigger>
            <AccordionContent>
              <ContainerGoalsAndCards>
                <Box style={{ flex: 1 }}>
                  <Heading>Equipe A</Heading>
                  <ContentGoalsAndCards>
                    <label>
                      <Text>Tempo</Text>
                      <TextInput type="time" />
                    </label>
                    <label>
                      <Text>Atleta equipe A</Text>
                      <SelectInput style={{ width: '100%' }}>
                        <option>Select</option>
                      </SelectInput>
                    </label>
                    <Button>Adicionar Gol</Button>
                  </ContentGoalsAndCards>
                </Box>
                <Box style={{ flex: 1 }}>
                  <Heading>Equipe B</Heading>
                  <ContentGoalsAndCards>
                    <label>
                      <Text>Tempo</Text>
                      <TextInput type="time" />
                    </label>
                    <label>
                      <Text>Atleta equipe B</Text>
                      <SelectInput style={{ width: '100%' }}>
                        <option>Select</option>
                      </SelectInput>
                    </label>
                    <Button>Adicionar Gol</Button>
                  </ContentGoalsAndCards>
                </Box>
              </ContainerGoalsAndCards>

              <ContainerGoalsAndCards>
                <DetailsGoalsAndCards>
                  <ItemsGoalsAndCards>
                    <Text>00:00</Text>
                    <Text>10</Text>
                    <Text>Fulano de Tal</Text>
                    <Button variant={'secondary'}>Deletar</Button>
                  </ItemsGoalsAndCards>
                  <ItemsGoalsAndCards>
                    <Text>00:00</Text>
                    <Text>10</Text>
                    <Text>Fulano de Tal</Text>
                    <Button variant={'secondary'}>Deletar</Button>
                  </ItemsGoalsAndCards>
                  <ItemsGoalsAndCards>
                    <Text>00:00</Text>
                    <Text>10</Text>
                    <Text>Fulano de Tal</Text>
                    <Button variant={'secondary'}>Deletar</Button>
                  </ItemsGoalsAndCards>
                </DetailsGoalsAndCards>

                <DetailsGoalsAndCards>
                  <ItemsGoalsAndCards>
                    <Text>00:00</Text>
                    <Text>5</Text>
                    <Text>Fulano de Tal</Text>
                    <Button variant={'secondary'}>Deletar</Button>
                  </ItemsGoalsAndCards>
                </DetailsGoalsAndCards>
              </ContainerGoalsAndCards>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="cards">
            <AccordionTrigger>Cartões</AccordionTrigger>
            <AccordionContent>
              <ContainerGoalsAndCards>
                <Box style={{ flex: 1 }}>
                  <Heading>Cartões Equipe A</Heading>
                  <ContentGoalsAndCards>
                    <label>
                      <Text>Tempo</Text>
                      <TextInput type="time" />
                    </label>
                    <label>
                      <Text>Atleta equipe A</Text>
                      <SelectInput style={{ width: '100%' }}>
                        <option>Select</option>
                      </SelectInput>
                    </label>
                    <label>
                      <Text>Cartão</Text>
                      <SelectInput style={{ width: '100%' }}>
                        <option>Select</option>
                      </SelectInput>
                    </label>
                    <Button>Adicionar Cartão</Button>
                  </ContentGoalsAndCards>
                </Box>

                <Box style={{ flex: 1 }}>
                  <Heading>Cartões equipe B</Heading>
                  <ContentGoalsAndCards>
                    <label>
                      <Text>Tempo</Text>
                      <TextInput type="time" />
                    </label>
                    <label>
                      <Text>Atleta equipe B</Text>
                      <SelectInput style={{ width: '100%' }}>
                        <option>Select</option>
                      </SelectInput>
                    </label>
                    <label>
                      <Text>Cartão</Text>
                      <SelectInput style={{ width: '100%' }}>
                        <option>Select</option>
                      </SelectInput>
                    </label>
                    <Button>Adicionar Cartão</Button>
                  </ContentGoalsAndCards>
                </Box>
              </ContainerGoalsAndCards>

              <ContainerGoalsAndCards>
                <DetailsGoalsAndCards>
                  <ItemsGoalsAndCards>
                    <Text>00:00</Text>
                    <Text>10</Text>
                    <Text>Fulano de Tal</Text>
                    <Text>Amarelo</Text>
                    <Button variant={'secondary'}>Deletar</Button>
                  </ItemsGoalsAndCards>
                  <ItemsGoalsAndCards>
                    <Text>00:00</Text>
                    <Text>10</Text>
                    <Text>Fulano de Tal</Text>
                    <Text>Amarelo</Text>
                    <Button variant={'secondary'}>Deletar</Button>
                  </ItemsGoalsAndCards>
                  <ItemsGoalsAndCards>
                    <Text>00:00</Text>
                    <Text>10</Text>
                    <Text>Fulano de Tal</Text>
                    <Text>Vermelho</Text>
                    <Button variant={'secondary'}>Deletar</Button>
                  </ItemsGoalsAndCards>
                </DetailsGoalsAndCards>

                <DetailsGoalsAndCards>
                  <ItemsGoalsAndCards>
                    <Text>00:00</Text>
                    <Text>5</Text>
                    <Text>Fulano de Tal</Text>
                    <Text>Amarelo</Text>
                    <Button variant={'secondary'}>Deletar</Button>
                  </ItemsGoalsAndCards>
                </DetailsGoalsAndCards>
              </ContainerGoalsAndCards>
            </AccordionContent>
          </AccordionItem>
        </AccordionRoot>
      </Container>
    </Sidebar>
  )
}
export const getServerSideProps = withSSRAuth(
  async (ctx) => {
    const apiClient = getAPIClient(ctx)
    const gameId = ctx.query.id
    const user = await apiClient.get(`/me`)

    const { data } = await apiClient.get(`/games/details/${gameId}`)

    const game = await apiClient.get(`/scoresheet/all-data/games/${gameId}`)
    const gameProps: gameProps = {
      id: game.data.id,
      categoryId: game.data.categoryId,
      categoryName: game.data.categoryName,
      teamAId: game.data.teamAId,
      teamA: game.data.teamA,
      teamB: game.data.teamB,
      teamBId: game.data.teamBId,
      date: game.data.date,
    }

    const teamA = await apiClient.get(
      `/players/category-id/team-id/${game.data.categoryId}/${game.data.teamAId}`,
    )

    const teamB = await apiClient.get(
      `/players/category-id/team-id/${game.data.categoryId}/${game.data.teamBId}`,
    )

    const playersTeamA: ReturnPlayerProps[] = []
    const playersTeamB: ReturnPlayerProps[] = []

    teamA.data.forEach((item: ReturnPlayerProps) => {
      playersTeamA.push({
        id: item.id,
        name: item.name,
        document: item.document,
      })
    })

    teamB.data.forEach((item: ReturnPlayerProps) => {
      playersTeamB.push({
        id: item.id,
        name: item.name,
        document: item.document,
      })
    })

    const returnGameDetails: UpdateGameDetailFormSchema = {
      id: data.id,
      gameId: data.game_id,
      firstPeriodStart: data.first_period_start,
      firstPeriodEnd: data.first_period_end,
      secondPeriodStart: data.second_period_start,
      secondPeriodEnd: data.second_period_end,
      extraPeriodStart: data.extra_period_start,
      extraPeriodEnd: data.extra_period_end,
      observation: data.obs,
      userId: user.data.user.id,
    }

    return {
      props: {
        game: gameProps,
        gameDetails: returnGameDetails,
        playersTeamA,
        playersTeamB,
      },
    }
  },
  {
    permissions: ['scoresheet_create'],
    roles: ['admin', 'gestor competicao', 'arbitragem'],
  },
)
