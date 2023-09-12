import { useMutation, useQueryClient } from '@tanstack/react-query'
import { login, signup } from '../auth'

export const useSignup = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: signup,
    onSuccess: () => {
      queryClient.removeQueries()
    },
  })
}

export const useLogin = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: login,
    onSuccess: () => {
      queryClient.removeQueries()
    },
  })
}
