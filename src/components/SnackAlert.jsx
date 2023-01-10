import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'

export default function SnackAlert({ onCopy, setOnCopy }) {
  return (
    <Snackbar
      open={onCopy}
      autoHideDuration={6000}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      onClose={() => setOnCopy(false)}
    >
      <Alert
        severity="success"
        sx={{ width: '100%' }}
        onClose={() => setOnCopy(false)}
      >
        Copy to Clipboard
      </Alert>
    </Snackbar>
  )
}
