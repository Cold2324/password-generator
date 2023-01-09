import Container from '@mui/material/Container'
import Input from '@mui/material/Input'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'
import LoadingButton from '@mui/lab/LoadingButton'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { useState, useEffect } from 'react'
import { URL } from './config'
export default function App() {
  const [password, setPassword] = useState('')
  const [onLoad, setOnLoad] = useState(false)
  const [onCopy, setOnCopy] = useState(false)
  const [onGenPass, setOnGenPass] = useState(false)

  useEffect(() => {
    setOnGenPass(false)
    setOnCopy(false)

    if (onGenPass) {
      setOnLoad(true)
      fetch(`${URL}`)
        .then((data) => data.json())
        .then((data) => {
          setPassword(data.password)
          setOnLoad(false)
        })
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
          <LoadingButton
            variant="contained"
            color="primary"
            onClick={handleGenPass}
            loading={onLoad}
          >
            Generate Password
          </LoadingButton>
        </Box>
      </Box>
    </Container>
  )
}
