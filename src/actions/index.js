import axios from 'axios';
import FETCH_USERS from './types';

export default function fetchUsers() {
  const requset = axios.get('https://jsonplaceholder.typicode.com/users');

  return {
    type: FETCH_USERS,
    payload: requset,
  };
}
