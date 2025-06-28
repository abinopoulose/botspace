import React from 'react';
import { Avatar, Box, IconButton, Typography } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendIcon from '@mui/icons-material/Send';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

type InstagramPost = {
  id: string;
  image: string;
  description: string;
  likes: number;
  comments: number;
  postedAt: string;
};

type User = {
  name: string;
  username: string;
  profilePicture: string;
};

type Props = {
  post: InstagramPost;
  user: User;
  onBack?: () => void;
};

const PostPage: React.FC<Props> = ({ post, user, onBack }) => {
  return (
    <Box
      sx={{
        bgcolor: '#000',
        color: '#fff',
        width: '100%',
        maxWidth: 400,
        mx: 'auto',
        fontFamily: 'sans-serif',
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
      }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: '3rem',
          px: 1.5,
          borderBottom: '1px solid #222',
          position: 'relative',
          justifyContent: 'center'
        }}>
        <IconButton
          onClick={onBack}
          sx={{
            color: '#fff',
            position: 'absolute',
            left: 8,
            top: '50%',
            transform: 'translateY(-50%)'
          }}>
          <ArrowBackIosNewIcon fontSize="small" />
        </IconButton>

        <Box textAlign="center">
          <Typography fontSize={11} color="gray">
            {user.username}
          </Typography>
          <Typography fontSize={13} fontWeight={700}>
            Posts
          </Typography>
        </Box>
      </Box>

      <Box display="flex" alignItems="center" justifyContent="space-between" p={1.5}>
        <Box display="flex" alignItems="center">
          <Avatar src={user.profilePicture} sx={{ width: 32, height: 32, mr: 1 }} />
          <Typography fontSize={14} fontWeight={600}>
            {user.username}
          </Typography>
        </Box>
        <IconButton sx={{ color: '#fff' }}>
          <MoreHorizIcon />
        </IconButton>
      </Box>

      <Box
        sx={{
          bgcolor: '#222',
          height: 300,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: post.image ? `url(${post.image})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
        {!post.image && (
          <Typography color="#aaa" textAlign="center" px={2}>
            You haven’t picked a post for your automation yet
          </Typography>
        )}
      </Box>

      <Box display="flex" justifyContent="space-between" px={1.5} pt={1}>
        <Box display="flex" gap={1}>
          <IconButton sx={{ color: '#fff' }}>
            <FavoriteBorderIcon fontSize="small" />
          </IconButton>
          <IconButton sx={{ color: '#fff' }}>
            <ChatBubbleOutlineIcon fontSize="small" />
          </IconButton>
          <IconButton sx={{ color: '#fff' }}>
            <SendIcon fontSize="small" />
          </IconButton>
        </Box>
        <IconButton sx={{ color: '#fff' }}>
          <BookmarkBorderIcon fontSize="small" />
        </IconButton>
      </Box>

      <Box px={1.5} py={1}>
        <Typography fontSize={14} fontWeight={600}>
          {post.likes} likes
        </Typography>
        <Typography fontSize={14}>
          <strong>{user.username}</strong> {post.description}
        </Typography>
        <Typography fontSize={12} color="gray" mt={0.5}>
          View all {post.comments} comments
        </Typography>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          bgcolor: '#000',
          borderTop: '1px solid #222',
          height: '3rem',
          display: 'flex',
          alignItems: 'center'
        }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-evenly', width: '100%', px: 2 }}>
          <HomeFilledIcon />
          <SearchOutlinedIcon />
          <AddBoxOutlinedIcon />
          <MovieOutlinedIcon />
          <AccountCircleOutlinedIcon />
        </Box>
      </Box>
    </Box>
  );
};

export default PostPage;
