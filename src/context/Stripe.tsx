import React, { createContext, useContext, useMemo } from 'react'
import { loadStripe, Stripe } from '@stripe/stripe-js'

const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ''

type StripeContextProps = {
  stripePromise: Promise<Stripe | null>
}

const StripeContext = createContext<StripeContextProps>({
  stripePromise: Promise.resolve(null),
})

export const StripeProvider = ({
  children,
}: {
  children?: React.ReactNode
}) => {
  const value = useMemo(
    () => ({ stripePromise: loadStripe(publishableKey) }),
    [],
  )

  return (
    <StripeContext.Provider value={value}>{children}</StripeContext.Provider>
  )
}

export const useStripeContext = () => {
  const context = useContext(StripeContext)
  if (context === undefined) {
    throw new Error('useStripeContext must be used within a StripeProvider')
  }
  return context
}
