import React, { createContext, useEffect, useState } from 'react'
import Router from 'next/router'
import { destroyCookie, parseCookies, setCookie } from 'nookies'
import { api } from '@/lib/api'

type Account = {
  id: string
  email: string
  username: string
  name: string
  selTeamId: string | null
  selCupConfigId: string | null
  selCategoryId: string | null
  permissions: string[]
  roles: string[]
}

interface SignInData {
  username: string
  password: string
}

type AuthContextType = {
  signIn: (data: SignInData) => Promise<void>
  signOut: () => void
  accountUser?: Account
  isAuthenticated: boolean
  userNotFound: boolean
}

interface AuxProps {
  children: React.ReactNode
}

export const AuthContext = createContext({} as AuthContextType)

let authChannel: BroadcastChannel

export function signOut() {
  destroyCookie(undefined, 'accountTokenSerramar')
  destroyCookie(undefined, 'refreshTokenSerramar')

  authChannel.postMessage('signOut')

  Router.push('/admin/login')
}

export function AuthProvider({ children }: AuxProps) {
  const [accountUser, setAccountUser] = useState<Account>()
  const isAuthenticated = !!accountUser
  const [userNotFound, setUserNotFound] = useState(false)

  useEffect(() => {
    authChannel = new BroadcastChannel('auth')

    authChannel.onmessage = (message) => {
      switch (message.data) {
        case 'signOut':
          signOut()
          break
        default:
          break
      }
    }
  }, [])

  useEffect(() => {
    const { accountTokenSerramar: token } = parseCookies()

    if (token) {
      api
        .get('/me')
        .then((response) => {
          const info: Account = {
            id: response.data.user.id,
            name: response.data.user.name,
            username: response.data.user.username,
            email: response.data.user.email,
            selTeamId: response.data.user.sel_team_id,
            selCupConfigId: response.data.user.sel_cup_config_id,
            selCategoryId: response.data.user.sel_category_id,
            permissions: response.data.permissions,
            roles: response.data.roles,
          }
          setAccountUser(info)
        })
        .catch(() => {
          signOut()
        })
    }
  }, [])

  async function signIn({ username, password }: SignInData) {
    try {
      const response = await api.post('/sessions', {
        username,
        password,
      })
      setUserNotFound(false)

      const info: Account = {
        id: response.data.user.id,
        name: response.data.user.name,
        username: response.data.user.username,
        email: response.data.user.email,
        selTeamId: response.data.user.sel_team_id,
        selCupConfigId: response.data.user.sel_cup_config_id,
        selCategoryId: response.data.user.sel_category_id,
        permissions: response.data.user.permissions,
        roles: response.data.user.roles,
      }

      setCookie(undefined, 'accountTokenSerramar', response.data.token, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/',
      })

      setCookie(
        undefined,
        'refreshTokenSerramar',
        response.data.refresh_token,
        {
          maxAge: 60 * 60 * 24 * 30, // 30 days
          path: '/',
        },
      )

      api.defaults.headers.Authorization = `Bearer ${response.data.token}`

      setAccountUser(info)

      Router.push('/admin')
    } catch (error) {
      console.log('user not found')
      setUserNotFound(true)
    }
  }

  return (
    <AuthContext.Provider
      value={{ accountUser, signOut, isAuthenticated, signIn, userNotFound }}
    >
      {children}
    </AuthContext.Provider>
  )
}
