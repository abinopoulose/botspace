import React from 'react';
import { Box } from '@mui/material';
import type { InstagramPost } from '../../types';

type PostSelectionProps = {
  posts: InstagramPost[];
  selectedPostIds: string[];
  onSelect: (post: InstagramPost) => void;
};

const PostSelection: React.FC<PostSelectionProps> = ({ posts, selectedPostIds, onSelect }) => {
  return (
    <Box
      sx={{
        width: '100%',
        overflowX: 'auto',
        mt: 1
      }}>
      <Box
        sx={{
          display: 'flex',
          gap: 1,
          px: 1,
          py: 1,
          width: 'max-content'
        }}>
        {posts.map((post) => {
          const isSelected = selectedPostIds.includes(post.id);
          return (
            <Box
              key={post.id}
              onClick={() => onSelect(post)}
              sx={{
                position: 'relative',
                minWidth: 80,
                height: 80,
                flexShrink: 0,
                borderRadius: 2,
                overflow: 'hidden',
                cursor: 'pointer',
                border: isSelected ? '3px solid #1976d2' : '2px solid transparent'
              }}>
              <Box
                component="img"
                src={post.image}
                alt={`Post ${post.id}`}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default PostSelection;
