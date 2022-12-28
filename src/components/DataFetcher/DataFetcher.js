import { useEffect, useState } from 'react';
import axios from 'axios';
const baseURL = process.env.REACT_APP_JSON_URL;

function DataFetcher() {
  const customAxios = axios.create({ baseURL });
  const [users, setData] = useState('');
  const [error, setError] = useState('');

  const fetchUsers = async () => {
    try {
      const response = await customAxios.get('/users');
      const data = response.data;
      // console.log(data);
      setData(data);
    } catch (error) {
      // console.log(error);
      setError(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return <>{JSON.stringify(users)}</>;
}

export default DataFetcher;
