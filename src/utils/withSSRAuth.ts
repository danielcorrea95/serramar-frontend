import { AuthTokenError } from '@/lib/errors/AuthTokenError'
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next'
import decode from 'jwt-decode'
import { destroyCookie, parseCookies } from 'nookies'
import { validateUserPermissions } from './validateUserPermissions'

type WithSSRAuthOptions = {
  permissions?: string[]
  roles?: string[]
}

export function withSSRAuth<P extends { [key: string]: any }>(
  fn: GetServerSideProps<P>,
  options?: WithSSRAuthOptions,
) {
  return async (
    ctx: GetServerSidePropsContext,
  ): Promise<GetServerSidePropsResult<P> | undefined> => {
    const cookies = parseCookies(ctx)
    const token = cookies.accountTokenRS

    console.log(token)
    if (!token) {
      return {
        redirect: {
          destination: '/admin/login',
          permanent: false,
        },
      }
    }

    if (options) {
      const user = decode<{ permissions: string[]; roles: string[] }>(token)
      const { permissions, roles } = options

      const userHasValidPermissions = validateUserPermissions({
        user,
        permissions,
        roles,
      })

      if (!userHasValidPermissions) {
        return {
          redirect: {
            destination: '/404',
            permanent: false,
          },
        }
      }
    }

    try {
      const returnData = await fn(ctx)

      return returnData
    } catch (err) {
      if (err instanceof AuthTokenError) {
        destroyCookie(ctx, 'accountTokenRS')
        destroyCookie(ctx, 'refreshTokenRS')

        return {
          redirect: {
            destination: '/admin/login',
            permanent: false,
          },
        }
      }
    }
  }
}
