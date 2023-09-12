import axios, { RawAxiosRequestConfig } from 'axios'

export const baseURL =
  process.env.NODE_ENV === 'production' ? '/' : 'http://localhost:3000/'

const client = axios.create({
  baseURL,
})

client.interceptors.request.use((config) => {
  const updatedConfig = config
  updatedConfig.headers['Content-Type'] = 'application/json'
  return updatedConfig
})

const get = async <T>(url: string, config?: RawAxiosRequestConfig) => {
  const { data: result } = await client.get<T>(url, config)
  return result
}

const secureGet = async <T>(url: string, config?: RawAxiosRequestConfig) => {
  const result = await get<T>(url, {
    ...config,
    withCredentials: true,
  })
  return result
}

const post = async <T>(
  url: string,
  data?: any,
  config?: RawAxiosRequestConfig,
) => {
  const { data: result } = await client.post<T>(url, data, config)
  return result
}

const securePost = async <T>(
  url: string,
  data?: any,
  config?: RawAxiosRequestConfig,
) => {
  const result = await post<T>(url, data, {
    ...config,
    withCredentials: true,
  })
  return result
}

const put = async <T>(
  url: string,
  data?: any,
  config?: RawAxiosRequestConfig,
) => {
  const { data: result } = await client.put<T>(url, data, config)
  return result
}

const securePut = async <T>(
  url: string,
  data?: any,
  config?: RawAxiosRequestConfig,
) => {
  const result = await put<T>(url, data, {
    ...config,
    withCredentials: true,
  })
  return result
}

const secureDelete = async <T>(url: string, config?: RawAxiosRequestConfig) => {
  const { data: result } = await client.delete<T>(url, {
    ...config,
    withCredentials: true,
  })
  return result
}

export { get, post, put, secureGet, securePost, securePut, secureDelete }
