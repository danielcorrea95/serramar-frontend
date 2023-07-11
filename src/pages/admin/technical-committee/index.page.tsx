import { AlertDialog } from '@/components/AlertDialog'
import { Can } from '@/components/Can'
import DropdownMenu from '@/components/DropdownMenu'
import { Item } from '@/components/DropdownMenu/styles'
import Sidebar from '@/components/SideBar'
import Table from '@/components/Table'
import { AuthContext } from '@/contexts/AuthContext'
import { api } from '@/lib/api'
import { getAPIClient } from '@/lib/axios'
import { withSSRAuth } from '@/utils/withSSRAuth'
import { Box, Button } from '@danielcorrea-ui/react'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'

const columns = [
  {
    name: 'Nome',
  },
  {
    name: 'Telefone',
  },
  {
    name: 'CPF',
  },
  {
    name: 'Função',
  },
]

interface technicalCommitteeProps {
  id: string
  name: string
  phone: string
  document: string
  technicalCommitteeType?: string
}

interface respondeGetTechnicalCommittee {
  id: string
  name: string
  phone?: string
  document: string
  technical_committee_type: string
}

export default function TechnicalCommittee() {
  const [technical, setTechnical] = useState<technicalCommitteeProps[]>([])
  const [deleteTechnicalId, setDeleteTechnicalId] = useState<string>()
  const { accountUser } = useContext(AuthContext)
  const router = useRouter()

  useEffect(() => {
    async function getTechnicalCommittee() {
      const { data } = await api.get(
        `/link-category-team-technical-committee/${accountUser?.selCategoryId}/${accountUser?.selTeamId}`,
      )
      const newlist: technicalCommitteeProps[] = []
      data.forEach((item: respondeGetTechnicalCommittee) => {
        newlist.push({
          id: item.id,
          name: item.name,
          phone: item.phone || '-',
          document: item.document,
          technicalCommitteeType: item.technical_committee_type,
        })
      })

      setTechnical(newlist)
    }
    getTechnicalCommittee()
  }, [accountUser])

  async function actionDeletePlayer() {
    await api.delete(
      `/delete-technical-committee/by-technical-committee-team-category-id/${accountUser?.selTeamId}/${accountUser?.selCategoryId}/${deleteTechnicalId}`,
    )

    const newListTechnical = technical.filter(
      (item) => item.id !== deleteTechnicalId,
    )
    setTechnical(newListTechnical)
  }

  return (
    <Sidebar>
      <Box>
        <Can permissions={['create_player']}>
          <Button
            onClick={() => router.push('/admin/technical-committee/register')}
          >
            Cadastrar Comissão Técnica
          </Button>
        </Can>
        <Table columns={columns}>
          {technical.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.document}</td>
                <td>{item.technicalCommitteeType}</td>
                <td>
                  <DropdownMenu>
                    <Can permissions={['update_technical_committee']}>
                      <Item as="a" href={`/teams/id/${item.id}`}>
                        Editar
                      </Item>
                    </Can>
                    <Can permissions={['delete_technical_committee']}>
                      <AlertDialog
                        title="Excluir"
                        description="Você deseja excluir o membro da comissão técnica?"
                        buttonCancel={true}
                        textButtonCancel="Cancelar"
                        textButtonConfirm="Excluir"
                        onclick={actionDeletePlayer}
                      >
                        <Item
                          as="a"
                          onClick={() => setDeleteTechnicalId(item.id)}
                        >
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
    permissions: ['list_technical_committee'],
    roles: ['admin', 'gestor competicao', 'gestor equipe'],
  },
)
