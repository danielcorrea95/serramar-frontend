import { List, X } from '@phosphor-icons/react'
import React, { useContext, useState } from 'react'
import { Can } from '../Can'
import { SidebarData } from './SidebarData'
import {
  ClosedButton,
  Container,
  Content,
  InfoUser,
  Nav,
  NavIcon,
  NavUser,
  OpenButton,
  SidebarNav,
  SidebarWrap,
} from './styles'
import SubMenu from './SubMenu'
import { AuthContext, signOut } from '@/contexts/AuthContext'
import DropdownMenu from '../DropdownMenu'
import { Item } from '../DropdownMenu/styles'

import logoImg from '../../../assets/images/logo-rs.png'
import Image from 'next/image'
import ContextModal from '../ContextModal'

interface ChildrenProps {
  children: React.ReactNode
}

export default function Sidebar({ children }: ChildrenProps) {
  const [sidebar, setSidebar] = useState(true)
  const { accountUser } = useContext(AuthContext)

  const showSidebar = () => {
    setSidebar(!sidebar)
  }

  return (
    <>
      <Nav>
        <NavIcon href={''}>
          <OpenButton>
            <List onClick={showSidebar} />
          </OpenButton>
        </NavIcon>
        <NavUser variant={sidebar ? 'sidebar' : 'closed'}>
          <div>
            <Image src={logoImg} alt="" height={45} />
          </div>
          <InfoUser>
            {accountUser && (
              <ContextModal
                key={accountUser.id}
                userId={accountUser.id}
                selTeamId={accountUser.selTeamId}
                selCupConfigId={accountUser.selCupConfigId}
                selCategoryId={accountUser.selCategoryId}
              />
            )}
            <DropdownMenu username={accountUser?.username}>
              <Item as="a" key={'peofile'} href="/profile">
                Perfil
              </Item>
              <Can key={'team'} roles={['team']}>
                <Item as="a" href="/#">
                  Equipe
                </Item>
              </Can>
              <Item as="a" key={'signOut'} href="#" onClick={signOut}>
                Sair
              </Item>
            </DropdownMenu>
          </InfoUser>
        </NavUser>
      </Nav>
      <Container>
        <SidebarNav variant={sidebar ? 'sidebar' : 'closed'}>
          <SidebarWrap>
            <NavIcon href={'#'}>
              <ClosedButton>
                <X onClick={showSidebar} />
              </ClosedButton>

              {SidebarData.map((item, index) => {
                return (
                  <Can key={index} permissions={[item.permission]}>
                    <SubMenu item={item} />
                  </Can>
                )
              })}
            </NavIcon>
          </SidebarWrap>
        </SidebarNav>
        <Content variant={sidebar ? 'sidebar' : 'closed'}>{children}</Content>
      </Container>
    </>
  )
}
