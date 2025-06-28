import { ThemeProvider } from '@mui/material';

import { theme } from './lib/theme';
import AutomationBuilder from './features/automation-builder/route/AutomationBuilder';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AutomationBuilder />
    </ThemeProvider>
  );
}

export default App;
