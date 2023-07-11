import React from 'react'
import { ContainerFunctions, TableReports } from './styles'
// import { SelectInput, TextInput } from '@danielcorrea-ui/react'

interface TableProps {
  children: React.ReactNode
  columns: {
    name: string
  }[]
}

export default function Table({ children, columns }: TableProps) {
  return (
    <div>
      <ContainerFunctions>
        {/* <SelectInput>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
          <option value="999999">Todos</option>
        </SelectInput>

        <TextInput /> */}
      </ContainerFunctions>
      <TableReports>
        <thead>
          <tr>
            {columns.map((item, index) => {
              return <th key={index}>{item.name}</th>
            })}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </TableReports>
    </div>
  )
}
