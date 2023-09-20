import { getDomElementOrThrow } from './utils'

export function openDialog (querySelector: string): void {
  const dialog: HTMLDialogElement = getDomElementOrThrow(querySelector)

  dialog.showModal()
}

export function closeDialog (querySelector: string): void {
  const dialog: HTMLDialogElement = getDomElementOrThrow(querySelector)

  dialog.close()
}
