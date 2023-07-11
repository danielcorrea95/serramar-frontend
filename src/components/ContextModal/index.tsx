import { Button, SelectInput, Text } from '@danielcorrea-ui/react'
import Modal from '../Modal'
import { ContainerButton, ContainerModal, Option } from './styles'
import { api } from '@/lib/api'
import { useForm } from 'react-hook-form'
import React, { useContext, useEffect, useState } from 'react'
import { AxiosError } from 'axios'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { ModalContext } from '@/contexts/UseModalContext'

interface UserIdProps {
  userId: string
  selTeamId: string | null
  selCupConfigId: string | null
  selCategoryId: string | null
}

interface ListProps {
  id: string
  name: string
}

const updateContextFormSchema = z.object({
  userId: z.string(),
  teamId: z.string().nullable(),
  cupConfigId: z.string().nullable(),
  categoryId: z.string().nullable(),
})

type UpdateContextFormSchema = z.infer<typeof updateContextFormSchema>

export default function ContextModal({
  userId,
  selTeamId,
  selCupConfigId,
  selCategoryId,
}: UserIdProps) {
  const [newSelTeamId, setNewSelTeamId] = useState(selTeamId)
  const [newSelCupConfigId, setNewSelCupConfigId] = useState(selCupConfigId)
  const [listTeams, setListTeams] = useState<ListProps[]>([])
  const [listCups, setListCups] = useState<ListProps[]>([])
  const [listCategories, setListCategories] = useState<ListProps[]>([])
  const [nameTeamSel, setNameTeamSel] = useState('Todos')
  const [nameCupSel, setNameCupSel] = useState('Todos')
  const [nameCategorySel, setNameCategorySel] = useState('Todos')

  const { register, handleSubmit } = useForm<UpdateContextFormSchema>({
    resolver: zodResolver(updateContextFormSchema),
  })

  const { closeModal } = useContext(ModalContext)

  useEffect(() => {
    async function functionListTeams(userId: string) {
      const responseTeams = await api.get(`/teams/context/user-id/${userId}`)

      const listTeams: ListProps[] = responseTeams.data

      const responseCup = await api.get(`/cups/context/team-id/${selTeamId}`)
      const listCups: ListProps[] = responseCup.data

      const responseCategory = await api.get(
        `/categories/context/team-id/cup-config-id/${selTeamId}/${selCupConfigId}`,
      )
      const listCategories: ListProps[] = responseCategory.data

      listTeams.forEach((item) => {
        if (item.id === selTeamId) {
          setNameTeamSel(item.name)
        }
      })

      listCups.forEach((item) => {
        if (item.id === selCupConfigId) {
          setNameCupSel(item.name)
        }
      })

      listCategories.forEach((item) => {
        if (item.id === selCategoryId) {
          setNameCategorySel(item.name)
        }
      })
      setListTeams(listTeams)
      setListCategories(listCategories)
      setListCups(listCups)
    }
    functionListTeams(userId)
  }, [selCategoryId, selCupConfigId, selTeamId, userId])

  const handleChangeTeam = (event: { target: { value: string } }) => {
    const { value } = event.target
    setNewSelTeamId(value)
  }

  const handleChangeCup = (event: { target: { value: string } }) => {
    const { value } = event.target
    setNewSelCupConfigId(value)
  }

  useEffect(() => {
    async function functionListCups(teamId: string | null) {
      const response = await api.get(`/cups/context/team-id/${teamId}`)
      const listCups: ListProps[] = response.data

      setListCups(listCups)
    }
    functionListCups(newSelTeamId)
  }, [newSelTeamId])

  useEffect(() => {
    async function functionListCups(
      teamId: string | null,
      selCupConfigId: string | null,
    ) {
      const response = await api.get(
        `/categories/context/team-id/cup-config-id/${teamId}/${selCupConfigId}`,
      )
      console.log(response)
      const listCategories: ListProps[] = response.data
      setListCategories(listCategories)
    }
    functionListCups(newSelTeamId, newSelCupConfigId)
  }, [newSelTeamId, newSelCupConfigId])

  async function handleUpdateContext(data: UpdateContextFormSchema) {
    try {
      const response = await api.put(`/users/update-context/${userId}`, data)
      setNameTeamSel(response.data.teamName)
      setNameCupSel(response.data.cupConfigName)
      setNameCategorySel(response.data.categoryName)
      closeModal()
      window.location.reload()
    } catch (error) {
      if (error instanceof AxiosError && error?.response?.data?.message) {
        alert(error.response.data.message)
      }
      console.error(error)
    }
  }

  return (
    <Modal
      title="Selecione o campeonato"
      linkName={`${nameTeamSel} | ${nameCupSel} | ${nameCategorySel}`}
      closeButton
    >
      <ContainerModal>
        <form onSubmit={handleSubmit(handleUpdateContext)}>
          <input type="hidden" {...register('userId')} value={userId} />
          <label>
            <Text>Selecione uma equipe</Text>
            <SelectInput
              {...register('teamId')}
              onChange={handleChangeTeam}
              defaultValue={selTeamId || ''}
            >
              {listTeams.map((item) => {
                return (
                  <Option key={item.id} value={item.id}>
                    {item.name}
                  </Option>
                )
              })}
            </SelectInput>
          </label>

          <label>
            <Text>Selecione uma competição</Text>
            <SelectInput
              {...register('cupConfigId')}
              onChange={handleChangeCup}
              defaultValue={selCupConfigId || ''}
            >
              <Option>Selecione uma competição</Option>

              {listCups.map((item) => {
                return (
                  <Option key={item.id} value={item.id}>
                    {item.name}
                  </Option>
                )
              })}
            </SelectInput>
          </label>

          <label>
            <Text>Selecione uma categoria</Text>
            <SelectInput
              {...register('categoryId')}
              defaultValue={selCategoryId || ''}
            >
              <Option>Selecione uma categoria</Option>
              {listCategories.map((item) => {
                return (
                  <Option key={item.id} value={item.id}>
                    {item.name}
                  </Option>
                )
              })}
            </SelectInput>
          </label>
          <ContainerButton>
            <Button type="submit" variant={'primary'}>
              Salvar
            </Button>
            <Button onClick={closeModal} type="button" variant={'secondary'}>
              Cancelar
            </Button>
          </ContainerButton>
        </form>
      </ContainerModal>
    </Modal>
  )
}
