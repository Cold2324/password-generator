import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import { useState, useEffect } from 'react'
import { URL } from './config'
import SnackAlert from './components/SnackAlert'
import CopyButton from './components/CopyButton'
import GenPassButton from './components/GenPassButton'
import Password from './components/Password'
export default function App() {
  const [password, setPassword] = useState('')
  const [onLoad, setOnLoad] = useState(false)
  const [onCopy, setOnCopy] = useState(false)
  const [onGenPass, setOnGenPass] = useState(false)

  useEffect(() => {
    // setOnGenPass(false)
    setOnCopy(false)

    if (onGenPass) {
      setOnLoad(true)
      fetch(`${URL}`)
        .then((data) => data.json())
        .then((data) => {
          setPassword(data.password)
          setOnLoad(false)
          setOnGenPass(false)
        })
        .catch((e) => console.log(e))
    }
  }, [onGenPass])

  const handleGenPass = () => {
    setOnGenPass(true)
  }

  return (
    <Container maxWidth="lg">
      {onCopy && <SnackAlert onCopy={onCopy} setOnCopy={setOnCopy} />}
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
              alignItems: 'center',
            }}
          >
            <Password password={password} />
            <CopyButton password={password} setOnCopy={setOnCopy} />
          </Box>
          <GenPassButton handleGenPass={handleGenPass} onLoad={onLoad} />
        </Box>
      </Box>
    </Container>
  )
}
