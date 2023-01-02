import axios from 'axios';
const baseURL = process.env.REACT_APP_JSON_URL;

const customAxios = axios.create({ baseURL });

export const fetchData = async () => {
  // ftching users
  const { data: usersdata } = await customAxios.get('/users');
  const users = usersdata;
  // fetching photos
  const { data: photosdata } = await customAxios.get('/photos');
  const photos = photosdata.slice(0, 12);
  //fetching posts
  const { data: postdata } = await customAxios.get('/posts');
  const posts = postdata.slice(0, 13);
  // fetcing comments
  const { data: commentsdata } = await customAxios.get('/comments');
  const comments = commentsdata.slice(0, 10);
  // setting titles
  const titles = posts.map(post => ({ id: post.id, title: post.title }));
  // console.log(titles);

  return { users, photos, posts, comments, titles };
};
