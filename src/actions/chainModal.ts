import NiceModal from '@ebay/nice-modal-react'

type Modals = Array<{ modal: React.FC<any>; args?: any }>

/**
 * The handler to manage chaining modals one after another.
 */
interface Chainable {
  /**
   * The method to add a modal and its props to the chain. Returns {@link Chainable | Chainable}
   */
  chain: (modal: React.FC<any>, args?: any) => Chainable
  /**
   * The method to show all the chained modals. The resulting props of each modal will be passed
   * as a prop to the next modal. It will return the result from the last modal.
   */
  show: () => Promise<unknown>
}

function show(modals: Modals) {
  return async () => {
    let res: unknown
    try {
      for (const { modal, args } of modals) {
        const additionalArgs = typeof res === 'object' ? res : { res }
        res = undefined
        res = await NiceModal.show(modal, { ...args, ...additionalArgs })
      }
    } catch (error) {
      if (error) {
        console.error(error)
      }
    }
    return res
  }
}

function chain(modals: Modals) {
  return function internalChain(modal: React.FC<any>, args?: any): Chainable {
    modals.push({ modal, args })
    return { chain: internalChain, show: show(modals) }
  }
}

export function chainModal(modal: React.FC<any>, args?: any): Chainable {
  const modals = [{ modal, args }]
  return { chain: chain(modals), show: show(modals) }
}
