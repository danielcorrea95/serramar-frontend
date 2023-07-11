import { List } from '@phosphor-icons/react'
import * as Dropdown from '@radix-ui/react-dropdown-menu'
import { Content, Trigger } from './styles'
import React from 'react'

interface DropdownProps {
  children: React.ReactNode
  username?: string
}

export default function DropdownMenu({ children, username }: DropdownProps) {
  return (
    <>
      <Dropdown.Root>
        <Trigger>
          {username ? <p>{username}</p> : null}
          <List />
        </Trigger>

        <Dropdown.Portal>
          <Content>{children}</Content>
        </Dropdown.Portal>
      </Dropdown.Root>
    </>
  )
}
