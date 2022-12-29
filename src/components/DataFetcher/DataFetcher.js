import { useEffect, useState } from 'react';
import axios from 'axios';
const baseURL = process.env.REACT_APP_JSON_URL;

function DataFetcher() {
  const [data, setData] = useState({
    users: [],
    photos: [],
    titles: [],
    posts: [],
    comments: [],
  });
  const customAxios = axios.create({ baseURL });
  const [error, setError] = useState('');

  const fetchData = async () => {
    try {
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
      console.log(titles);

      // console.log(data);
      setData({ ...data, users, photos, posts, comments, titles });
    } catch (error) {
      // console.log(error);
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <>{JSON.stringify(data.users)}</>;
}

export default DataFetcher;
