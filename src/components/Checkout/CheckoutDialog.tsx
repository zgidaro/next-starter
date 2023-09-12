import { resolveCloseModal } from '@/actions/closeModal'
import { useStripeContext } from '@/context/Stripe'
import NiceModal, { useModal } from '@ebay/nice-modal-react'
import { Elements } from '@stripe/react-stripe-js'
import { StripeElementsOptions } from '@stripe/stripe-js'
import React, { useCallback, useMemo } from 'react'
import { CheckoutForm } from './CheckoutForm'

export const CheckoutDialog = NiceModal.create(
  ({ clientSecret }: { clientSecret: string }) => {
    const { stripePromise } = useStripeContext()
    const modal = useModal()

    const options: StripeElementsOptions = useMemo(
      () => ({
        clientSecret,
        appearance: {
          theme: 'flat',
          variables: {
            // colorPrimary: '#0570de',
            // colorBackground: '#ffffff',
            // colorText: '#30313d',
            // colorDanger: '#df1b41',
            // fontFamily: 'Ideal Sans, system-ui, sans-serif',
            // spacingUnit: '2px',
            // borderRadius: '4px',
            // See all possible variables below
          },
        },
      }),
      [clientSecret],
    )

    const onSuccess = useCallback(() => {
      resolveCloseModal(modal)
    }, [modal])

    return (
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm onSuccess={onSuccess} />
      </Elements>
    )
  },
)
