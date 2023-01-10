import { Box, Typography } from '@mui/material'

export default function Password({ password }) {
  return (
    <Box>
      <Typography>{password || 'Generated Your Password'}</Typography>
    </Box>
  )
}
