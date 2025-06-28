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

export type { InstagramPost, User };
