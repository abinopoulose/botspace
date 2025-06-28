import { Box, Button, Paper, Typography } from '@mui/material';
import PhoneFrame from '../../../../components/PhoneFrame';

import PillToggleGroup from '../../../../components/PillToggleGroup';
import PostPage from '../../../../components/instagram-pages/PostPage';
import dummyPosts from '../../data/dummyPosts';
import CommentSection from '../../../../components/instagram-pages/CommentSection';
import DMPage from '../../../../components/instagram-pages/DMPage';
import { useAutomationStore } from '../../store/useAutomationBuilderStore';
import { automationDMSteps } from '../../config';
import { user } from '../../data/dummyUser';

const Preview = () => {
  const {
    activeStep,
    linkDMText,
    openingDMText,
    openingDMEnabled,
    sendLinkButtonText,
    keywords,
    updateField,
    postId
  } = useAutomationStore();

  const renderStep = () => {
    switch (activeStep) {
      case 'Post':
        return (
          <PostPage
            post={dummyPosts.find((post) => post.id === postId) || dummyPosts[0]}
            user={user}
          />
        );
      case 'Comment':
        return (
          <CommentSection
            comments={[
              {
                text: keywords,
                username: 'username',
                time: 'now',
                commentPlaceholder: 'Leaves a comment'
              }
            ]}
          />
        );
      case 'DM':
        return (
          <DMPage
            user={user}
            messages={
              openingDMEnabled
                ? [
                    {
                      fromMe: false,
                      type: 'button',
                      text: openingDMText,
                      buttonLabel: sendLinkButtonText,
                      placeholder: 'Opening message'
                    },
                    { fromMe: true, text: sendLinkButtonText, placeholder: "Button text" },
                    { fromMe: false, text: linkDMText, placeholder: 'Write a message' }
                  ]
                : [{ fromMe: false, text: linkDMText, placeholder: 'Write a message' }]
            }
          />
        );
      default:
        return null;
    }
  };

  return (
    <Paper
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: '1rem',
        borderRadius: 0
      }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="subtitle1">Preview</Typography>
        <Button size="small" variant="contained">
          Go Live
        </Button>
      </Box>
      <Box
        flex="1"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        gap={2}>
        <PhoneFrame>{renderStep()}</PhoneFrame>
        <PillToggleGroup
          options={[...automationDMSteps]}
          value={activeStep}
          onChange={(value) =>
            updateField('activeStep', value as (typeof automationDMSteps)[number])
          }
        />
      </Box>
    </Paper>
  );
};

export default Preview;
