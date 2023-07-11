import Sidebar from '@/components/SideBar'
import { getAPIClient } from '@/lib/axios'
import { withSSRAuth } from '@/utils/withSSRAuth'
import {
  Box,
  Button,
  Heading,
  SelectInput,
  Text,
  TextInput,
} from '@danielcorrea-ui/react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { ContainerButton, Form, FormError, Option } from './styles'
import { api } from '@/lib/api'
import { z } from 'zod'
import { useContext, useState } from 'react'
import { AuthContext } from '@/contexts/AuthContext'
import { zodResolver } from '@hookform/resolvers/zod'
import { AxiosError } from 'axios'
import Toast from '@/components/Toast'

interface selectProps {
  id: string
  name: string
}

interface TechnicalCommitteeProps {
  types: selectProps[]
}

const createTechnicalCommitteeFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'O nome precisa ter ao menos 3 caracteres' }),
  phone: z.string(),
  document: z.string(),
  attachment: z.string().optional(),
  technicalCommitteeType: z.string(),
  filename: z.any().optional(),
})

type CreateTechnicalCommitteeFormSchema = z.infer<
  typeof createTechnicalCommitteeFormSchema
>

export default function Register({ types }: TechnicalCommitteeProps) {
  const [error, setError] = useState()
  const [success, setSuccess] = useState(false)
  const { accountUser } = useContext(AuthContext)

  const router = useRouter()

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<CreateTechnicalCommitteeFormSchema>({
    resolver: zodResolver(createTechnicalCommitteeFormSchema),
  })

  async function findDocument(event: { target: { value: string } }) {
    const { value } = event.target
    if (value) {
      const response = await api.get(
        `/technical-committee/find-by-document/${value}`,
      )

      if (response.data) {
        const { data } = response
        setValue('name', String(data.name))
        setValue('attachment', data.attachment)
        setValue('phone', String(data.phone))
      }
    }
  }
  async function handleCreateTechnicalCommittee(
    data: CreateTechnicalCommitteeFormSchema,
  ) {
    try {
      const info = {
        name: data.name,
        document: data.document,
        phone: data.phone,
        attachment: data.attachment,
      }
      console.log(info)
      const response = await api.post(`/technical-committee`, info)

      const categoryTeamTechnical = await api.post(
        `/link-category-team-technical-committee`,
        {
          categoryId: accountUser?.selCategoryId,
          technicalCommitteeId: response.data.id,
          teamId: accountUser?.selTeamId,
          technicalCommitteeTypeId: data.technicalCommitteeType,
        },
      )
      console.log(categoryTeamTechnical.data)
      if (data.filename[0]) {
        const formData = new FormData()
        formData.append('filename', data.filename[0])

        await api.patch(
          `/image-technical-committee/${categoryTeamTechnical.data.id}`,
          formData,
        )
      }

      setSuccess(true)
    } catch (error) {
      console.log(error)
      if (error instanceof AxiosError && error?.response?.data?.message) {
        setError(error.response.data.message)
      }
    }
  }

  return (
    <Sidebar>
      <Box>
        <Heading>Cadastrar Comissão técnica</Heading>
        <Form as="form" onSubmit={handleSubmit(handleCreateTechnicalCommittee)}>
          <label>
            <Text>CPF</Text>
            <TextInput
              type="text"
              {...register('document', { required: true })}
              onBlur={findDocument}
            />
            {errors.document && <FormError size="sm">mensagem</FormError>}
          </label>

          <label>
            <Text>Nome</Text>
            <TextInput type="text" {...register('name')} />
            {errors.name && (
              <FormError size="sm">{errors.name.message}</FormError>
            )}
          </label>

          <label>
            <Text>Telefone</Text>
            <TextInput type="text" {...register('phone')} />
            {errors.phone && (
              <FormError size="sm">{errors.phone.message}</FormError>
            )}
          </label>
          <label>
            <Text>Selecione a função</Text>
            <SelectInput {...register('technicalCommitteeType')}>
              <Option>Selecione a função</Option>
              {types.map((item) => {
                return (
                  <Option key={item.id} value={item.id}>
                    {item.name}
                  </Option>
                )
              })}
            </SelectInput>
            {errors.technicalCommitteeType && (
              <FormError size="sm">
                {errors.technicalCommitteeType.message}
              </FormError>
            )}
          </label>
          <label>
            <Text>CREF - CRM</Text>
            <TextInput type="text" {...register('attachment')} />
            {errors.attachment && (
              <FormError size="sm">{errors.attachment.message}</FormError>
            )}
          </label>

          <label>
            <Text>Imagem</Text>
            <TextInput type="file" accept="image/*" {...register('filename')} />
          </label>

          <ContainerButton>
            <Button type="submit" disabled={isSubmitting}>
              Salvar
            </Button>
            <Button onClick={() => router.push('/admin/technical-committee')}>
              Cancelar
            </Button>
          </ContainerButton>
        </Form>
      </Box>
      {success && (
        <Toast
          title="Feito!"
          description="Membro da comissão técnica cadastrado com sucesso!"
          duration={3000}
          linkButton="/admin/technical-committee"
          titleButton="Ok!"
          size="small"
          typeToast="success"
        />
      )}

      {error && (
        <Toast
          title="Erro!"
          description={error}
          duration={3000}
          linkButton=""
          titleButton="Ok!"
          size="small"
          typeToast="danger"
        />
      )}
    </Sidebar>
  )
}

export const getServerSideProps = withSSRAuth(
  async (ctx) => {
    const apiClient = getAPIClient(ctx)

    const { data } = await apiClient.get('/technical-committee-types')
    const typeSelect: selectProps[] = []

    data.forEach((item: selectProps) => {
      typeSelect.push({
        id: item.id,
        name: item.name,
      })
    })

    return {
      props: { types: typeSelect },
    }
  },
  {
    permissions: ['create_technical_committee'],
    roles: ['admin', 'gestor competicao', 'gestor equipe'],
  },
)
