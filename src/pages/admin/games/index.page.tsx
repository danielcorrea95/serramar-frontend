import { Can } from '@/components/Can'
import DropdownMenu from '@/components/DropdownMenu'
import { Item } from '@/components/DropdownMenu/styles'
import Sidebar from '@/components/SideBar'
import Table from '@/components/Table'
import { Box, Button } from '@danielcorrea-ui/react'
import { useRouter } from 'next/router'
import { Pagination, SelectPage } from './styles'
import { useState } from 'react'
import { withSSRAuth } from '@/utils/withSSRAuth'
import { getAPIClient } from '@/lib/axios'
import { api } from '@/lib/api'

const columns = [
  {
    name: 'Data/Hora',
  },
  {
    name: 'Categoria',
  },
  {
    name: 'Grupo',
  },
  {
    name: 'Equipe A',
  },
  {
    name: '',
  },
  {
    name: '',
  },
  {
    name: '',
  },
  {
    name: 'Equipe B',
  },
]

interface GamesProps {
  id: string
  date: string
  categoryName: string
  groupName: string
  teamA: string
  teamB: string
}

interface AllGamesProps {
  games: GamesProps[]
}

export default function Games({ games }: AllGamesProps) {
  const [page, setPage] = useState(1)
  const router = useRouter()

  async function generateDoc(gameId: string) {
    try {
      const response = await api.get(`/scoresheet/games/${gameId}`, {
        responseType: 'blob', // Defina o responseType como 'blob' para indicar que a resposta é um arquivo
      })

      const url = window.URL.createObjectURL(new Blob([response.data]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', 'sumula.docx')
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <Sidebar>
      <Box>
        <Can permissions={['create_games']}>
          <Button onClick={() => router.push('/admin/games/register')}>
            Cadastrar jogos
          </Button>
        </Can>
        <Table columns={columns}>
          {games.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.date}</td>
                <td>{item.categoryName}</td>
                <td>{item.groupName}</td>
                <td>{item.teamA}</td>
                <td>0</td>
                <td>X</td>
                <td>0</td>
                <td>{item.teamB}</td>
                <td>
                  <DropdownMenu>
                    <Can permissions={['update_team']}>
                      <Item as="a" href={`/teams/id/1231}`}>
                        Editar
                      </Item>
                    </Can>
                    <Can permissions={['delete_team']}>
                      <Item as="a" href={`/teams/id/1231`}>
                        Visualizar Súmula
                      </Item>
                    </Can>
                    <Can permissions={['scoresheet_doc']}>
                      <Item onClick={() => generateDoc(item.id)}>
                        Imprimir Súmula
                      </Item>
                    </Can>
                    <Can permissions={['scoresheet_create']}>
                      <Item as="a" href={`/admin/games/scoresheet/${item.id}`}>
                        Súmula Digítal
                      </Item>
                    </Can>
                    <Can permissions={['delete_game']}>
                      <Item as="a" href={`/teams/id/1231`}>
                        Excluir
                      </Item>
                    </Can>
                  </DropdownMenu>
                </td>
              </tr>
            )
          })}
        </Table>
        <Pagination>
          {page > 1 && (
            <>
              <SelectPage onClick={() => setPage(page - 1)}>
                {' '}
                Pagina anterior{' '}
              </SelectPage>
              <p>|</p>
            </>
          )}
          <SelectPage onClick={() => setPage(page + 1)}>
            Próxima página
          </SelectPage>
        </Pagination>
      </Box>
    </Sidebar>
  )
}
export const getServerSideProps = withSSRAuth(
  async (ctx) => {
    const apiClient = getAPIClient(ctx)

    const { data } = await apiClient.get('/me')

    const games = await apiClient.get(
      `/games/cup-config-id/${data.user.sel_cup_config_id}`,
    )

    const responseGames: GamesProps[] = []

    games.data.map((item: GamesProps) =>
      responseGames.push({
        id: item.id,
        date: item.date,
        categoryName: item.categoryName,
        groupName: item.groupName,
        teamA: item.teamA,
        teamB: item.teamB,
      }),
    )

    return {
      props: { games: responseGames },
    }
  },
  {
    permissions: ['list_games'],
    roles: ['admin', 'gestor competicao', 'gestor equipe', 'arbitragem'],
  },
)
