import React from 'react';
import { Avatar, Box, IconButton, InputBase, Stack, Typography } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SendIcon from '@mui/icons-material/Send';

type Comment = {
  username: string;
  text: string;
  time: string;
  commentPlaceholder: string;
};

type Props = {
  comments: Comment[];
};

const CommentSection: React.FC<Props> = ({ comments }) => {
  return (
    <Box
      sx={{
        bgcolor: '#121212',
        color: '#fff',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        fontFamily: 'sans-serif'
      }}>
      <Box
        sx={{
          height: 60,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          borderBottom: '1px solid #2c2c2c'
        }}>
        <Box
          sx={{
            width: 36,
            height: 4,
            bgcolor: '#3a3a3a',
            borderRadius: 2,
            position: 'absolute',
            top: 8
          }}
        />
        <Typography fontWeight={600}>Comments</Typography>
        <SendIcon sx={{ position: 'absolute', right: 12, fontSize: 20, color: '#fff' }} />
      </Box>
      <Box sx={{ flex: 1, overflowY: 'auto', px: 2, py: 1 }}>
        {comments.map((comment, idx) => (
          <Box key={idx} sx={{ mb: 2 }}>
            <Box display="flex" alignItems="center">
              <Avatar sx={{ width: 28, height: 28, mr: 1 }} />

              <Stack>
                <Box display="flex" alignItems="center">
                  <Typography fontSize={14} fontWeight={500}>
                    {comment.username}
                  </Typography>
                  <Typography fontSize={12} color="gray" ml={1}>
                    {comment.time}
                  </Typography>
                </Box>
                {comment.text ? (
                  <Typography fontSize={14}>{comment.text}</Typography>
                ) : (
                  <Typography fontSize={14} color="gray">
                    {comment.commentPlaceholder}
                  </Typography>
                )}
              </Stack>
              <IconButton sx={{ color: '#fff', p: 0.5, marginLeft: 'auto' }}>
                <FavoriteBorderIcon fontSize="small" />
              </IconButton>
            </Box>

            <Typography fontSize={12} color="gray" ml={5}>
              Reply
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Emoji Row */}
      <Box
        sx={{
          display: 'flex',
          gap: 1,
          px: 2,
          py: 1,
          borderTop: '1px solid #2c2c2c',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        {['❤️', '🙌', '🔥', '👏', '😭', '😍', '😮', '😂'].map((emoji, idx) => (
          <Typography key={idx} fontSize={20}>
            {emoji}
          </Typography>
        ))}
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          px: 2,
          py: 1,
          borderTop: '1px solid #2c2c2c'
        }}>
        <Avatar sx={{ width: 28, height: 28, mr: 1 }} />
        <Box
          sx={{
            flex: 1,
            backgroundColor: '#1e1e1e',
            borderRadius: '2rem',
            px: 2,
            py: 0.8
          }}>
          <InputBase
            placeholder="Add a comment for username..."
            fullWidth
            sx={{ color: '#fff', fontSize: 14, background: 'none' }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CommentSection;
