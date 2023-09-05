import Sidebar from '@/components/SideBar'
import {
  Box,
  Button,
  Heading,
  SelectInput,
  Text,
  TextInput,
} from '@danielcorrea-ui/react'
import { ContainerButton, Form, Option } from './styles'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import { api } from '@/lib/api'
import { AuthContext } from '@/contexts/AuthContext'

export default function RegisterGame() {
  const { accountUser } = useContext(AuthContext)
  const [categories, setCategories] = useState([])
  const [groups, setGroups] = useState([])
  const router = useRouter()

  useEffect(() => {
    async function getCategories() {
      const categories = await api.get(
        `/categories/${accountUser?.selCupConfigId}`,
      )
      const data = categories.data

      setCategories(data)
    }
    getCategories()
  }, [accountUser?.selCupConfigId])

  useEffect(() => {
    async function getGroups() {
      const groups = await api.get(
        `/groups/536d5349-d1f1-43aa-8ffc-8abb527324f6`,
      )
      const data = groups.data

      setGroups(data)
    }

    getGroups()
  }, [categories])

  return (
    <>
      <Sidebar>
        <Box>
          <Heading>Cadastrar Partida</Heading>
          <Form>
            <label>
              <Text>Data</Text>
              <TextInput type="datetime-local" />
            </label>
            <label>
              <Text>Categoria</Text>
              <SelectInput>
                <Option>Selecionar categoria</Option>
                {categories.map((item) => {
                  return (
                    <Option key={item.id} value={item.id}>
                      {item.name}
                    </Option>
                  )
                })}
              </SelectInput>
            </label>
            <label>
              <Text>Grupo</Text>
              <SelectInput>
                <option>Selecione o grupo</option>
                {groups.map((item) => {
                  return (
                    <Option key={item.id} value={item.id}>
                      {item.name}
                    </Option>
                  )
                })}
              </SelectInput>
            </label>
            <label>
              <Text>Time A</Text>
              <SelectInput>
                <option>Selecione o Time A</option>
              </SelectInput>
            </label>
            <label>
              <Text>Time B</Text>
              <SelectInput>
                <option>Selecione o Time B</option>
              </SelectInput>
            </label>
            <label></label>

            <ContainerButton>
              <Button type="submit">Salvar</Button>
              <Button onClick={() => router.push('/admin/games')}>
                Cancelar
              </Button>
            </ContainerButton>
          </Form>
        </Box>
      </Sidebar>
    </>
  )
}
