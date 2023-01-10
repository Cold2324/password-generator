import LoadingButton from '@mui/lab/LoadingButton'
export default function GenPassButton({ handleGenPass, onLoad }) {
  return (
    <LoadingButton
      variant="contained"
      color="primary"
      onClick={handleGenPass}
      loading={onLoad}
    >
      Generate Password
    </LoadingButton>
  )
}
