import { createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

const initialState = [
  {
    userId: '1',
    id: '1',
    user: 'ugur',
    photo: 'https://via.placeholder.com/150/d32776',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nisi ipsam ducimus numquam temporibus aliquid itaque sint quas perspiciatis tempora consectetur dolor et vero, soluta voluptatum nulla dicta nihil placeat!',
    comments: [
      {
        commentId: '1',
        userId: '1',
        email: 'ad@asd.gmail.com',
        commentBody: ' Lorem ipsum dolor sit amet, consectetur adipisicing.',
      },
    ],
  },
];

export const blogSlice = createSlice({
  name: 'blogposts',
  initialState,
  reducers: {
    addPost: (state, action) => {
      console.log(action.payload.posts);
      const userId = v4().slice(0, 3);
      return [
        ...state,
        {
          userId: userId,
          id: v4().slice(0, 3),
          user: action.payload.users[0].value,
          photo: action.payload.photos[0].value,
          title: action.payload.titles[0].value,
          body: action.payload.postsBody?.reduce(
            (acc, post) => acc + post.value,
            '',
          ),
          comments: [
            ...action.payload.comments.map(comment => ({
              commentId: v4().slice(0, 3),
              userId: userId,
              email: `${action.payload.users[0].value}@gmail.com`,
              commentBody: comment.value,
            })),
          ],
        },
      ];
    },
  },
});

export const { addPost } = blogSlice.actions;

export default blogSlice.reducer;
