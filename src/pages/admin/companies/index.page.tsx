import { getAPIClient } from '@/lib/axios'
import { withSSRAuth } from '@/utils/withSSRAuth'
import { Box, Button } from '@danielcorrea-ui/react'
import { Container } from './styles'
import { Can } from '@/components/Can'
import { useRouter } from 'next/router'

export default function Companies() {
  const router = useRouter()

  return (
    <>
      <Container>
        <Box>
          <Can permissions={['create_company']} roles={['admin']}>
            <Button onClick={() => router.push('/admin/companies/register')}>
              Nova Empresa
            </Button>
          </Can>
        </Box>
      </Container>
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
    permissions: ['list_company'],
    roles: ['admin'],
  },
)
