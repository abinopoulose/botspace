import { Button, ThemeProvider } from '@mui/material';
import { theme } from './lib/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button>Hello</Button>
    </ThemeProvider>
  );
}

export default App;
