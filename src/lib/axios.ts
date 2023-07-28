import axios, { AxiosError } from 'axios'
import { parseCookies, setCookie } from 'nookies'
import { signOut } from '@/contexts/AuthContext'
import { AuthTokenError } from './errors/AuthTokenError'

let isRefreshing = false
let failedRequestsQueue: any = []

export function getAPIClient(ctx?: any) {
  const { accountTokenSerramar: token } = parseCookies(ctx)
  let baseURL = ''
  if (process.env.NODE_ENV === 'development') {
    baseURL = 'http://127.0.0.1:3333'
  } else {
    baseURL = 'https://serramar-5cbc91919a63.herokuapp.com'
  }

  const api = axios.create({
    baseURL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  api.interceptors.response.use(
    function (response) {
      return response
    },
    function (error) {
      console.log(error)
      if (error.response.status === 401) {
        if (error.response.data?.message === 'Unauthorized') {
          const { refreshTokenSerramar } = parseCookies(ctx)
          const originalConfig = error.config

          if (!isRefreshing) {
            isRefreshing = true

            api
              .post('/token/refresh', {
                token: refreshTokenSerramar,
              })
              .then((response) => {
                const { token } = response.data
                setCookie(ctx, 'accountTokenSerramar', token, {
                  maxAge: 60 * 60 * 24 * 30, // 30 days
                  path: '/',
                })

                setCookie(ctx, 'refreshTokenSerramar', response.data.refresh_token, {
                  maxAge: 60 * 60 * 24 * 30, // 30 days
                  path: '/',
                })

                api.defaults.headers.Authorization = `Bearer ${token}`

                failedRequestsQueue.forEach((request: any) =>
                  request.onSuccess(token),
                )
                failedRequestsQueue = []
              })
              .catch((err) => {
                failedRequestsQueue.forEach((request: any) =>
                  request.onFailure(err),
                )
                failedRequestsQueue = []

                if (process.browser) {
                  signOut()
                }
              })
              .finally(() => {
                isRefreshing = false
              })
          }

          return new Promise((resolve, reject) => {
            failedRequestsQueue.push({
              onSuccess: (token: string) => {
                originalConfig.headers.Authorization = `Bearer ${token}`

                resolve(api(originalConfig))
              },
              onFailure: (err: AxiosError) => {
                reject(err)
              },
            })
          })
        } else {
          if (process.browser) {
            signOut()
          } else {
            return Promise.reject(new AuthTokenError())
          }
        }
      }

      return Promise.reject(error)
    },
  )

  return api
}
