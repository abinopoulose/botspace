import { Box, Button, Stack } from '@mui/material';
import { useRef, useState } from 'react';
import PostSelectionForm from './PostSelectionForm';
import CommentSelection from './CommentSelectionForm';
import DMConfigForm from './DMConfigForm';
import OtherAutomationOptions from './OtherAutomationOptions';

const AutomationConfig = () => {
  const [stepIndex, setStepIndex] = useState(0);

  const commentRef = useRef<{ validate: () => Promise<boolean> }>(null);
  const dmRef = useRef<{ validate: () => Promise<boolean> }>(null);

  const steps = [
    {
      label: 'Post Selection',
      Component: PostSelectionForm
    },
    {
      label: 'Comment Selection',
      ref: commentRef,
      Component: CommentSelection
    },
    {
      label: 'DM Configuration',
      ref: dmRef,
      Component: DMConfigForm
    },
    {
      label: 'Other Options',
      ref: null,
      Component: OtherAutomationOptions
    }
  ];

  const handleNext = async () => {
    const currentStep = steps[stepIndex];

    let isValid = true;
    if (currentStep.ref?.current?.validate) {
      isValid = await currentStep.ref.current.validate();
    }

    if (isValid) {
      setStepIndex((prev) => prev + 1);
    }
  };

  return (
    <Box padding={2} overflow="auto">
      <Stack spacing={2}>
        {steps.map((step, index) =>
          index <= stepIndex ? (
            <Box key={step.label}>
              <step.Component ref={step.ref} />
            </Box>
          ) : null
        )}

        {stepIndex < steps.length - 1 && (
          <Box display="flex" justifyContent="flex-end">
            <Button variant="outlined" onClick={handleNext}>
              Next
            </Button>
          </Box>
        )}
      </Stack>
    </Box>
  );
};

export default AutomationConfig;
