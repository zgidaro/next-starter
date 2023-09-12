import '@/styles/globals.css'
import React from 'react'
import NiceModal from '@ebay/nice-modal-react'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StripeProvider } from '@/context/Stripe'
import '../i18n'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30000,
      retryOnMount: false,
      refetchOnWindowFocus: false,
    },
  },
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <StripeProvider>
          <NiceModal.Provider>
            <Component {...pageProps} />
          </NiceModal.Provider>
        </StripeProvider>
      </QueryClientProvider>
    </>
  )
}
