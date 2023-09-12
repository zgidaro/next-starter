import React, { useCallback, useState } from 'react'
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { styled } from '@/stitches.config'

const StyledForm = styled('form', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
})

export const CheckoutForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const stripe = useStripe()
  const elements = useElements()
  const [loading, setLoading] = useState(false)

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      if (!stripe || !elements) {
        // Stripe.js has not yet loaded.
        // Make sure to disable form submission until Stripe.js has loaded.
        return
      }

      setLoading(true)

      const { setupIntent, error } = await stripe.confirmSetup({
        elements,
        redirect: 'if_required',
        confirmParams: {
          // Make sure to change this to your payment completion page
          return_url: `${window.location.href}`,
        },
      })

      if (setupIntent) {
        onSuccess()
      }

      // This point will only be reached if there is an immediate error when
      // confirming the payment. Otherwise, your customer will be redirected to
      // your `return_url`. For some payment methods like iDEAL, your customer will
      // be redirected to an intermediate site first to authorize the payment, then
      // redirected to the `return_url`.
      if (error?.type === 'card_error' || error?.type === 'validation_error') {
        // setMessage(error.message)
      } else {
        // setMessage('An unexpected error occured.')
      }

      setLoading(false)
    },
    [elements, onSuccess, stripe],
  )

  return (
    <StyledForm onSubmit={handleSubmit}>
      <PaymentElement />
      <button type="submit" disabled={!stripe || loading}>
        Checkout
      </button>
    </StyledForm>
  )
}
