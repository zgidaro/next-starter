import { post, securePost } from './request'

type AuthResponse = {
  id: string
  email: string
  firstname: string
  lastname: string
}

export const signup = (data: {
  email: string
  firstname: string
  lastname: string
  password: string
}): Promise<AuthResponse> =>
  post('api/users/signup', data, { withCredentials: true })

export const login = (credentials: {
  email: string
  password: string
}): Promise<AuthResponse> =>
  post('api/users/login', credentials, { withCredentials: true })

export const validate = (): Promise<AuthResponse> =>
  securePost('api/users/validate')

export const logout = () => securePost('api/users/logout')
