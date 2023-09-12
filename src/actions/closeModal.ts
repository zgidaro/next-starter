import { NiceModalHandler } from '@ebay/nice-modal-react'

export const resolveCloseModal = (modal: NiceModalHandler, args?: unknown) => {
  modal.resolve(args)
  modal.hide()
  modal.remove()
}

export const rejectCloseModal = (modal: NiceModalHandler, args?: unknown) => {
  modal.reject(args)
  modal.hide()
  modal.remove()
}
