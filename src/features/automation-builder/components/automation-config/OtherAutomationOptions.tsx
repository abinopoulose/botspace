import { Box, Chip, Paper, Stack, Typography } from '@mui/material';

import { otherAutomationOptions } from '../../config';
import StyledSwitch from '../../../../components/StyledSwitch';

const OtherAutomationOptions = () => {
  return (
    <Stack spacing={2}>
      <Typography variant="h6">Other things to automate</Typography>
      <Stack spacing={1}>
        {otherAutomationOptions.map((option) => {
          return (
            <Paper
              key={option.value}
              sx={{
                p: 1.5
              }}>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Typography>{option.label}</Typography>
                <Box display="flex" gap="8px" alignItems="center">
                  {option.isPro && <Chip label="Pro" color="primary" size="small" />}
                  <StyledSwitch checked={false} />
                </Box>
              </Box>
            </Paper>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default OtherAutomationOptions;
