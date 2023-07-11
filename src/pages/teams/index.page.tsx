import Layout from '@/components/Site/Layout'
import {
  AccordionContent,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger,
  Container,
  ContainerTeams,
  ItemTeam,
} from './styles'
import Image from 'next/image'

import imagedefault from '../../../assets/images/default.png'
import { Text } from '@danielcorrea-ui/react'
import { GetServerSideProps } from 'next'
import { getAPIClient } from '@/lib/axios'
import { useState } from 'react'
import Link from 'next/link'

interface TeamsProps {
  id: string
  name: string
  image: string | null
  phone: string | null
  email: string | null
  foundation_date: Date | null
  city_id: number
  city_name: string
}

interface ResponseDataProps {
  category: {
    id: string
    name: string
    Team: TeamsProps[]
  }[]
}

export default function Teams({ category }: ResponseDataProps) {
  const [openCategory, setOpenCategory] = useState('')
  const route = process.env.AWS_ROUTE

  return (
    <Layout>
      <Container>
        <AccordionRoot type="single" collapsible>
          {category.map((item) => {
            return (
              <AccordionItem
                key={item.id}
                value={item.id}
                onClick={() => setOpenCategory(item.id)}
              >
                <AccordionTrigger>{item.name}</AccordionTrigger>
                <AccordionContent>
                  <ContainerTeams>
                    {item.Team.map((team) => (
                      <Link
                        href={`/teams/details/${openCategory}/${team.id}`}
                        key={team.id}
                      >
                        <ItemTeam>
                          <Image
                            src={
                              team.image
                                ? `${route}/teams/${team.image}`
                                : imagedefault
                            }
                            height={60}
                            width={60}
                            alt=""
                          />
                          <Text>{team.name}</Text>
                          <Text>{team.city_name}</Text>
                        </ItemTeam>
                      </Link>
                    ))}
                  </ContainerTeams>
                </AccordionContent>
              </AccordionItem>
            )
          })}
        </AccordionRoot>
      </Container>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apiClient = getAPIClient(ctx)

  const response = await apiClient.get('/categories-with-teams/cup-config-id')

  const data: ResponseDataProps[] = response.data
  return {
    props: { category: data },
  }
}
