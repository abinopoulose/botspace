import {
  Box,
  Chip,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import { forwardRef, useImperativeHandle, useEffect } from 'react';
import { useForm, Controller, useWatch } from 'react-hook-form';
import { useAutomationStore, type CommentType } from '../../store/useAutomationBuilderStore';
import { commentTypeOptions, exampleKeywords } from '../../config';

type FormValues = {
  commentType: CommentType;
  keywords: string;
};

const CommentSelection = forwardRef((_, ref) => {
  const { updateField } = useAutomationStore();
  const {
    control,
    setValue,
    trigger,
    formState: { errors }
  } = useForm<FormValues>({
    defaultValues: {
      commentType: 'a specific word or words',
      keywords: ''
    }
  });

  // ✅ Watch values from the form and update Zustand instantly
  const commentType = useWatch({ control, name: 'commentType' });
  const keywords = useWatch({ control, name: 'keywords' });

  useEffect(() => {
    updateField('commentType', commentType);
  }, [commentType, updateField]);

  useEffect(() => {
    updateField('keywords', keywords);
  }, [keywords, updateField]);

  useImperativeHandle(ref, () => ({
    validate: async () => {
      const valid = await trigger();
      return valid;
    }
  }));

  return (
    <Stack spacing={2}>
      <Typography variant="h6">And this comment has</Typography>
      <Controller
        name="commentType"
        control={control}
        render={({ field }) => (
          <RadioGroup {...field} onFocus={() => updateField('activeStep', 'Comment')}>
            {commentTypeOptions.map((option) => (
              <Paper key={option.value} sx={{ p: 1, mb: 1 }}>
                <Box display="flex" alignItems="center">
                  <FormControlLabel
                    value={option.value}
                    control={<Radio />}
                    label={<Typography>{option.label}</Typography>}
                    sx={{ m: 0, flex: 1 }}
                  />
                </Box>

                {commentType === 'a specific word or words' &&
                  option.value === 'a specific word or words' && (
                    <Stack spacing={1} padding={1}>
                      <Controller
                        name="keywords"
                        control={control}
                        rules={{ required: 'Please enter at least one keyword' }}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            placeholder="Word or words"
                            error={!!errors.keywords}
                            helperText={errors.keywords?.message}
                            fullWidth
                          />
                        )}
                      />
                      <Typography variant="caption" color='gray'>Use commas to separate words</Typography>
                      <Box display="flex" flexWrap="wrap" gap={1} alignItems="center">
                        <Typography variant="caption" color='gray'>For example:</Typography>
                        {exampleKeywords.map((word) => (
                          <Chip
                            key={word}
                            label={word}
                            size="small"
                            variant="outlined"
                            color="primary"
                            clickable
                            onClick={() => setValue('keywords', word)}
                          />
                        ))}
                      </Box>
                    </Stack>
                  )}
              </Paper>
            ))}
          </RadioGroup>
        )}
      />
    </Stack>
  );
});

export default CommentSelection;
