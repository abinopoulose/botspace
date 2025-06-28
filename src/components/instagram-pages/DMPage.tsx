import React from 'react';
import { Avatar, Box, IconButton, InputBase, Typography } from '@mui/material';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import type { User } from '../../features/automation-builder/types';

type ChatMessage = {
  fromMe: boolean;
  type?: 'text' | 'button';
  text: string;
  buttonLabel?: string;
  placeholder?: string;
};

type Props = {
  user: User;
  messages: ChatMessage[];
};

const DMPage: React.FC<Props> = ({ user: { username, profilePicture }, messages }) => {
  return (
    <Box
      sx={{
        bgcolor: '#000',
        color: '#fff',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'sans-serif',
        position: 'relative'
      }}>
      {/* Header */}
      <Box
        sx={{
          height: 50,
          borderBottom: '1px solid #222',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 1.5
        }}>
        <Box display="flex" alignItems="center" gap={1}>
          <Avatar src={profilePicture} sx={{ width: 32, height: 32 }} />
          <Typography fontWeight={600}>{username}</Typography>
        </Box>
        <Box display="flex">
          <IconButton sx={{ color: '#fff' }}>
            <PhoneOutlinedIcon />
          </IconButton>
          <IconButton sx={{ color: '#fff' }}>
            <VideocamOutlinedIcon />
          </IconButton>
        </Box>
      </Box>

      <Box
        sx={{
          flex: 1,
          overflowY: 'auto',
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 1.5
        }}>
        {messages.map((msg, i) => (
          <Box
            key={i}
            sx={{
              display: 'flex',
              justifyContent: msg.fromMe ? 'flex-end' : 'flex-start'
            }}>
            {!msg.fromMe && (
              <Avatar
                src={profilePicture}
                sx={{ width: 28, height: 28, mr: 1, alignSelf: 'flex-end' }}
              />
            )}

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: msg.fromMe ? 'flex-end' : 'flex-start'
              }}>
              {msg.type === 'button' ? (
                <Box
                  sx={{
                    bgcolor: '#2a2a2a',
                    color: '#fff',
                    borderRadius: 3,
                    p: 1.2,
                    maxWidth: '70%',
                    borderBottomLeftRadius: 0
                  }}>
                  <Typography fontSize={14}>{msg.text || msg.placeholder}</Typography>
                  {msg.buttonLabel && (
                    <Box
                      sx={{
                        mt: 1,
                        backgroundColor: '#1a1a1a',
                        borderRadius: 1.5,
                        px: 2,
                        py: 0.7,
                        textAlign: 'center',
                        fontWeight: 600,
                        fontSize: 14,
                        wordBreak: 'break-word'
                      }}>
                      {msg.buttonLabel || msg.placeholder}
                    </Box>
                  )}
                </Box>
              ) : (
                <Box
                  sx={{
                    bgcolor: msg.fromMe ? '#9147ff' : '#2a2a2a',
                    color: '#fff',
                    borderRadius: 3,
                    px: 2,
                    py: 1,
                    maxWidth: '70%',
                    wordBreak: 'break-word',
                    fontSize: 14,
                    ...(msg.fromMe ? { borderBottomRightRadius: 0 } : { borderBottomLeftRadius: 0 })
                  }}>
                  {msg.text || msg.placeholder}
                </Box>
              )}
            </Box>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          p: 1,
          bgcolor: '#000',
          borderTop: '1px solid #222'
        }}>
        <Box
          sx={{
            bgcolor: '#1e1e1e',
            borderRadius: '2rem',
            px: 1.5,
            py: 0.8,
            display: 'flex',
            alignItems: 'center'
          }}>
          <Box
            sx={{
              width: 30,
              height: 30,
              bgcolor: '#0095f6',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mr: 1.2
            }}>
            <CameraAltIcon sx={{ color: '#fff', fontSize: 18 }} />
          </Box>

          <InputBase
            placeholder="Message..."
            sx={{
              color: '#ccc',
              flex: 1,
              fontSize: 14,
              background: 'none'
            }}
          />
          <Box display="flex" gap={1}>
            <IconButton sx={{ color: '#fff', p: 0.5 }}>
              <ImageOutlinedIcon sx={{ fontSize: 18 }} />
            </IconButton>
            <IconButton sx={{ color: '#fff', p: 0.5 }}>
              <InsertCommentOutlinedIcon sx={{ fontSize: 18 }} />
            </IconButton>
            <IconButton sx={{ color: '#fff', p: 0.5 }}>
              <AddCircleOutlineIcon sx={{ fontSize: 18 }} />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DMPage;
