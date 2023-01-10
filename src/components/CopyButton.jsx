import { CopyToClipboard } from 'react-copy-to-clipboard'
import Button from '@mui/material/Button'
export default function CopyButton({ password, setOnCopy }) {
  return (
    <CopyToClipboard text={password} onCopy={() => setOnCopy(true)}>
      <Button variant="outlined" color="primary">
        Copy to Clipboard
      </Button>
    </CopyToClipboard>
  )
}
