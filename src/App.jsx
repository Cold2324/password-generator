import Container from '@mui/material/Container'
import Input from '@mui/material/Input'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
export default function App() {
  return (
    <Container maxWidth="lg">
      <Box
        component="div"
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
            <Input placeholder="123jfk2k3k2n" id="password" />
            <Button variant="outlined" color="primary">
              Copy to Clipboard
            </Button>
          </Box>
          <Button variant="contained" color="primary">
            Generate Your Password
          </Button>
        </Box>
      </Box>
    </Container>
  )
}
