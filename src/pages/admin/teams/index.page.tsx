import { Can } from '@/components/Can'
import DropdownMenu from '@/components/DropdownMenu'
import { Item } from '@/components/DropdownMenu/styles'
import Sidebar from '@/components/SideBar'
import Table from '@/components/Table'
import { api } from '@/lib/api'
import { getAPIClient } from '@/lib/axios'
import { withSSRAuth } from '@/utils/withSSRAuth'
import { Box, Button } from '@danielcorrea-ui/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Pagination, SelectPage } from './styles'

interface TeamProps {
  id: string
  name: string
  responsible: string
  phone: number
  email: string
}

const columns = [
  {
    name: 'Equipe',
  },
  {
    name: 'Responsável',
  },
  {
    name: 'Telefone',
  },
  {
    name: 'Email',
  },
]

export default function Team() {
  const [page, setPage] = useState(1)
  const [teams, setTeams] = useState<TeamProps[]>([])
  const router = useRouter()

  useEffect(() => {
    async function getTeams() {
      const { data } = await api.get(`/teams/page/${page}`)

      setTeams(data)
    }

    getTeams()
  }, [page])

  return (
    <>
      <Sidebar>
        <Box>
          <Can permissions={['create_team']}>
            <Button onClick={() => router.push('/admin/teams/register')}>
              Cadastrar Equipe
            </Button>
          </Can>
          <Table columns={columns}>
            {teams.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.responsible}</td>
                  <td>{item.phone}</td>
                  <td>{item.email}</td>
                  <td>
                    <DropdownMenu>
                      <Can permissions={['update_team']}>
                        <Item as="a" href={`/teams/id/${item.id}`}>
                          Editar
                        </Item>
                      </Can>
                      <Can permissions={['delete_team']}>
                        <Item as="a" href={`/teams/id/${item.id}`}>
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
    </>
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
    permissions: ['list_team'],
    roles: ['admin', 'gestor competicao'],
  },
)
