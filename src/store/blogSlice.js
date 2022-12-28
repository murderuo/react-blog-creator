import { createSlice } from '@reduxjs/toolkit';


const initialState = [
  {
    userId: '1',
    id: '1',
    user: 'ugur',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nisi ipsam ducimus numquam temporibus aliquid itaque sint quas perspiciatis tempora consectetur dolor et vero, soluta voluptatum nulla dicta nihil placeat!',
    comments: [
      {
        commentId: '1',
        userId: '1',
        email: 'ad@asd.gmail.com',
        body: ' Lorem ipsum dolor sit amet, consectetur adipisicing.',
      },
    ],
  },
];

export const blogSlice = createSlice({
  name: 'blogposts',
  initialState,
  reducers: {
    addPost: () => {},
    getUsers: () => {},
    getPosts: () => {},
    getComments: () => {},
    getPhotos: () => {},
  },
});

export const { addPost, getUsers, getPosts, getComments, getPhotos } =
  blogSlice.actions;

export default blogSlice.reducer;
