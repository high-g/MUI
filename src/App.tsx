import { PhotoCamera } from '@mui/icons-material'
import { CssBaseline, AppBar, Toolbar, Typography, Box, Container } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme()

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera sx={{ mr: 2 }} />
          <Typography variant="h6">Album layout</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Box
          sx={{
            bgcolor: 'Background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">aa</Container>
        </Box>
      </main>
    </ThemeProvider>
  )
}

export default App
