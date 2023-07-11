import Sidebar from '@/components/SideBar'
import DropdownMenu from '@/components/DropdownMenu'
import { Item } from '@/components/DropdownMenu/styles'
import Table from '@/components/Table'
import { api } from '@/lib/api'
import { getAPIClient } from '@/lib/axios'
import { withSSRAuth } from '@/utils/withSSRAuth'
import { Box, Button } from '@danielcorrea-ui/react'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import { Can } from '@/components/Can'
import { AuthContext } from '@/contexts/AuthContext'
import { AlertDialog } from '@/components/AlertDialog'

interface playerProps {
  id: string
  name: string
  nickname: string
  document: number
  phone: string
}

const columns = [
  {
    name: 'Nome',
  },
  {
    name: 'Apelido',
  },
  {
    name: 'CPF',
  },
  {
    name: 'phone',
  },
]

export default function Players() {
  const [players, setPlayers] = useState<playerProps[]>([])
  const [deletePlayerId, setDeletePlayerId] = useState<string>()
  const { accountUser } = useContext(AuthContext)
  const router = useRouter()

  useEffect(() => {
    async function getPlyers() {
      const { data } = await api.get(
        `/players/category-id/team-id/${accountUser?.selCategoryId}/${accountUser?.selTeamId}`,
      )

      setPlayers(data)
    }
    getPlyers()
  }, [accountUser])

  async function actionDeletePlayer() {
    await api.delete(
      `/delete-player/by-player-team-category-id/${deletePlayerId}/${accountUser?.selTeamId}/${accountUser?.selCategoryId}`,
    )

    const newListPlayers = players.filter((item) => item.id !== deletePlayerId)
    setPlayers(newListPlayers)
  }

  return (
    <Sidebar>
      <Box>
        <Can permissions={['create_player']}>
          <Button onClick={() => router.push('/admin/players/register')}>
            Cadastrar Atleta
          </Button>
        </Can>
        <Table columns={columns}>
          {players.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.nickname}</td>
                <td>{item.document}</td>
                <td>{item.phone}</td>
                <td>
                  <DropdownMenu>
                    <Can permissions={['update_player']}>
                      <Item as="a" href={`/admin/players/edit/${item.id}`}>
                        Editar
                      </Item>
                    </Can>
                    <Can permissions={['delete_player']}>
                      <AlertDialog
                        title="Excluir"
                        description="Você deseja excluir o atleta?"
                        buttonCancel={true}
                        textButtonCancel="Cancelar"
                        textButtonConfirm="Excluir"
                        onclick={actionDeletePlayer}
                      >
                        <Item as="a" onClick={() => setDeletePlayerId(item.id)}>
                          Excluir
                        </Item>
                      </AlertDialog>
                    </Can>
                  </DropdownMenu>
                </td>
              </tr>
            )
          })}
        </Table>
      </Box>
    </Sidebar>
  )
}
export const getServerSideProps = withSSRAuth(
  async (ctx) => {
    const apiClient = getAPIClient(ctx)

    const { data } = await apiClient.get('/me')

    // console.log(data);
    return {
      props: { data },
    }
  },
  {
    permissions: ['list_player'],
    roles: ['admin', 'gestor competicao', 'gestor equipe'],
  },
)
