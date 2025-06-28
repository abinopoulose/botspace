import { Box, Button, Link, Paper, Stack, TextField, Typography } from '@mui/material';
import { forwardRef, useImperativeHandle, useEffect } from 'react';
import { useForm, Controller, useWatch } from 'react-hook-form';
import StyledSwitch from '../../../../components/StyledSwitch';
import { useAutomationStore } from '../../store/useAutomationBuilderStore';

const defaultDmText = `Hey there! I’m so happy you’re here, thanks so much for your interest 😊 

Click below and I’ll send you the link in just a sec ✨`;

const defaultButtonText = 'Send me the link';

type DMConfigValues = {
  openingDMEnabled: boolean;
  openingDMText: string;
  sendLinkButtonText: string;
  linkDMText: string;
};

const DMConfigForm = forwardRef((_, ref) => {
  const { updateField } = useAutomationStore();

  const {
    control,
    trigger,
    formState: { errors }
  } = useForm<DMConfigValues>({
    defaultValues: {
      openingDMEnabled: true,
      openingDMText: defaultDmText,
      sendLinkButtonText: defaultButtonText,
      linkDMText: ''
    }
  });

  const openingDMEnabled = useWatch({ control, name: 'openingDMEnabled' });
  const openingDMText = useWatch({ control, name: 'openingDMText' });
  const sendLinkButtonText = useWatch({ control, name: 'sendLinkButtonText' });
  const linkDMText = useWatch({ control, name: 'linkDMText' });

  useEffect(() => {
    updateField('openingDMEnabled', openingDMEnabled);
  }, [openingDMEnabled, updateField]);

  useEffect(() => {
    updateField('openingDMText', openingDMText);
  }, [openingDMText, updateField]);

  useEffect(() => {
    updateField('sendLinkButtonText', sendLinkButtonText);
  }, [sendLinkButtonText, updateField]);

  useEffect(() => {
    updateField('linkDMText', linkDMText);
  }, [linkDMText, updateField]);

  useImperativeHandle(ref, () => ({
    validate: async () => {
      const valid = await trigger();
      return valid;
    }
  }));

  return (
    <Stack spacing={2}>
      <Typography variant="h6">They will get</Typography>
      <Paper sx={{ display: 'flex', flexDirection: 'column', gap: 1, p: 1.5 }}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography>an opening DM</Typography>
          <Controller
            name="openingDMEnabled"
            control={control}
            render={({ field }) => (
              <StyledSwitch
                {...field}
                checked={field.value}
                onFocus={() => updateField('activeStep', 'DM')}
              />
            )}
          />
        </Box>

        {openingDMEnabled && (
          <Stack spacing={1}>
            <Controller
              name="openingDMText"
              control={control}
              rules={{ required: 'Opening message is required' }}
              render={({ field }) => (
                <TextField
                  {...field}
                  placeholder="Message"
                  multiline
                  rows={4}
                  fullWidth
                  error={!!errors.openingDMText}
                  helperText={errors.openingDMText?.message}
                  onFocus={() => updateField('activeStep', 'DM')}
                />
              )}
            />
            <Controller
              name="sendLinkButtonText"
              control={control}
              rules={{ required: 'Button text is required' }}
              render={({ field }) => (
                <TextField
                  {...field}
                  placeholder="Message"
                  fullWidth
                  error={!!errors.sendLinkButtonText}
                  helperText={errors.sendLinkButtonText?.message}
                  onFocus={() => updateField('activeStep', 'DM')}
                />
              )}
            />
            <Link underline="hover" onFocus={() => updateField('activeStep', 'DM')}>
              Why does an opening DM matter?
            </Link>
          </Stack>
        )}
      </Paper>

      <Paper sx={{ display: 'flex', flexDirection: 'column', gap: 1, p: 1.5 }}>
        <Typography>an DM with the link</Typography>
        <Controller
          name="linkDMText"
          control={control}
          rules={{ required: 'Link message is required' }}
          render={({ field }) => (
            <TextField
              {...field}
              placeholder="Message"
              multiline
              rows={4}
              fullWidth
              error={!!errors.linkDMText}
              helperText={errors.linkDMText?.message}
              onFocus={() => updateField('activeStep', 'DM')}
            />
          )}
        />
        <Button variant="outlined">Add a Link</Button>
      </Paper>
    </Stack>
  );
});

export default DMConfigForm;
