import Grid from '@mui/material/Grid';
import Preview from '../components/preview/Preview';
import AutomationConfig from '../components/automation-config/AutomationConfig';

function AutomationBuilder() {
  return (
    <Grid container height="100vh">
      <Grid
        size={3}
        component="div"
        sx={{
          height: '100%',
          overflowY: 'auto'
        }}>
        <AutomationConfig />
      </Grid>
      <Grid
        size={9}
        component="div"
        sx={{
          height: '100%'
        }}>
        <Preview />
      </Grid>
    </Grid>
  );
}

export default AutomationBuilder;
