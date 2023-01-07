import Container from '@mui/material/Container'
import Input from '@mui/material/Input'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { useState, useEffect } from 'react'
export default function App() {
  const [password, setPassword] = useState('')
  const [onCopy, setOnCopy] = useState(false)
  const [onGenPass, setOnGenPass] = useState(false)

  useEffect(() => {
    setOnGenPass(false)
    setOnCopy(false)

    if (onGenPass) {
      fetch('http://localhost:3000/')
        .then((data) => data.json())
        .then((data) => setPassword(data.password))
        .catch((e) => console.log(e))
    }
  }, [onGenPass])

  const handleGenPass = () => {
    setOnGenPass(true)
  }

  return (
    <Container maxWidth="lg">
      {onCopy && (
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
      )}
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
            }}
          >
            <Input
              placeholder="Click the button to generate your password"
              id="password"
              value={password}
            />
            <CopyToClipboard text={password} onCopy={() => setOnCopy(true)}>
              <Button variant="outlined" color="primary">
                Copy to Clipboard
              </Button>
            </CopyToClipboard>
          </Box>
          <Button variant="contained" color="primary" onClick={handleGenPass}>
            Generate Your Password
          </Button>
        </Box>
      </Box>
    </Container>
  )
}
