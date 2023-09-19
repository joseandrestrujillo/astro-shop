import { openDialog, closeDialog } from '../client-ui-scripts/dialog-actions'

export function handleDialogOpen (open: boolean): void {
  if (open) {
    openDialog('#search-dialog')
  } else {
    closeDialog('#search-dialog')
  }
}
