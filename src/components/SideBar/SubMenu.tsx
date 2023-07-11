import React, { ReactNode, useState } from 'react'
import { DropdownLink, SidebarLabel, SidebarLink } from './styles'

interface DropdownItems {
  item: {
    title: string
    path: string
    icon: ReactNode
    iconClosed?: ReactNode
    iconOpened?: ReactNode
    subNav?: {
      title: string
      path: string
      icon: ReactNode
    }[]
  }
}

export default function SubMenu({ item }: DropdownItems) {
  const [subnav, setSubnav] = useState(false)

  const showSubnav = () => setSubnav(!subnav)

  return (
    <>
      <SidebarLink href={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink href={item.path} key={index}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          )
        })}
    </>
  )
}
