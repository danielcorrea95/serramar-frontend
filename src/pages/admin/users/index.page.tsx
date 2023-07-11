import { Can } from '@/components/Can'
import DropdownMenu from '@/components/DropdownMenu'
import Sidebar from '@/components/SideBar'
import Table from '@/components/Table'
import { Item } from '@/components/DropdownMenu/styles'
import { Box, Button } from '@danielcorrea-ui/react'
import { Pagination, SelectPage } from './styles'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { AlertDialog } from '@/components/AlertDialog'
import { api } from '@/lib/api'
import { getAPIClient } from '@/lib/axios'
import { withSSRAuth } from '@/utils/withSSRAuth'

interface UsersProps {
  id: string
  name: string
  username: string
  email: string
  phone: string
  role: string
  team: string
}

const columns = [
  {
    name: 'Nome',
  },
  {
    name: 'Usuário',
  },
  {
    name: 'Email',
  },
  {
    name: 'Permissão',
  },
  {
    name: 'Equipe',
  },
]

export default function User() {
  const [page, setPage] = useState(1)
  const [users, setUsers] = useState<UsersProps[]>([])
  const [deleteUserId, setDeleteUserId] = useState<string>()
  const router = useRouter()

  async function actionDeleteUser() {
    const newListUser = users.filter((item) => item.id !== deleteUserId)
    setUsers(newListUser)
  }

  useEffect(() => {
    async function getUsers() {
      const { data } = await api.get(`/users/list`)

      setUsers(data)
    }
    getUsers()
  }, [])

  return (
    <Sidebar>
      <Box>
        <Can permissions={['create_user']}>
          <Button onClick={() => router.push('/admin/users/register')}>
            Cadastrar Usuário
          </Button>
        </Can>
        <Table columns={columns}>
          {users.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
                <td>{item.team}</td>
                <td>
                  <DropdownMenu>
                    <Can permissions={['update_user']}>
                      <Item as="a" href={`/teams/id/${item.id}`}>
                        Editar
                      </Item>
                    </Can>
                    <Can permissions={['delete_user']}>
                      <AlertDialog
                        title="Excluir"
                        description="Você deseja excluir o atleta?"
                        buttonCancel={true}
                        textButtonCancel="Cancelar"
                        textButtonConfirm="Excluir"
                        onclick={actionDeleteUser}
                      >
                        <Item as="a" onClick={() => setDeleteUserId(item.id)}>
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

    return {
      props: { data },
    }
  },
  {
    permissions: ['list_users'],
    roles: ['admin', 'gestor competicao'],
  },
)
