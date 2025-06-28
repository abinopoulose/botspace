import { useEffect } from 'react';
import {
  Box,
  Chip,
  Paper,
  Radio,
  Stack,
  Typography,
  RadioGroup,
  FormControlLabel
} from '@mui/material';

import PostSelection from './PostSelection';
import dummyPosts from '../../data/dummyPosts';
import { useAutomationStore, type PostType } from '../../store/useAutomationBuilderStore';
import { postTypeOptions } from '../../config';

const PostSelectionForm = () => {
  const { updateField, postType, postId } = useAutomationStore();

  const handlePostTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateField('postType', event.target.value as PostType);
  };

  useEffect(() => {
    updateField('postType', postTypeOptions[0].value);
    updateField('postId', dummyPosts[0].id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Stack spacing={2}>
      <Typography variant="h6">When someone comments on</Typography>
      <RadioGroup
        value={postType}
        onChange={handlePostTypeChange}
        onFocus={() => updateField('activeStep', 'Post')}>
        {postTypeOptions.map((option) => {
          const isSelected = postType === option.value;

          return (
            <Paper
              key={option.value}
              sx={{
                p: 1.5,
                width: '100%',
                overflow: 'hidden',
                boxSizing: 'border-box',
                marginBottom: 1
              }}>
              <Box display="flex" alignItems="center">
                <FormControlLabel
                  value={option.value}
                  control={<Radio disabled={option.isPro} />}
                  label={<Typography>{option.label}</Typography>}
                  sx={{ flex: 1, m: 0 }}
                />
                {option.isPro && <Chip label="Pro" color="primary" size="small" />}
              </Box>

              {option.value === 'a specific post or reel' && isSelected && (
                <PostSelection
                  posts={dummyPosts}
                  selectedPostIds={postId ? [postId] : []}
                  onSelect={(post) => {
                    updateField('postId', post.id);
                    updateField('activeStep', 'Post');
                  }}
                />
              )}
            </Paper>
          );
        })}
      </RadioGroup>
    </Stack>
  );
};

export default PostSelectionForm;
