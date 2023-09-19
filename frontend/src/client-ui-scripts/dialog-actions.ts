export function openDialog (querySelector: string): void {
  const dialog: HTMLDialogElement | null = document.querySelector(querySelector)
  if (dialog != null) {
    dialog.showModal()
  } else {
    throw new Error('There are not elements that matches with ' + querySelector)
  }
}

export function closeDialog (querySelector: string): void {
  const dialog: HTMLDialogElement | null = document.querySelector(querySelector)
  if (dialog != null) {
    dialog.open = false
  } else {
    throw new Error('There are not elements that matches with ' + querySelector)
  }
}
