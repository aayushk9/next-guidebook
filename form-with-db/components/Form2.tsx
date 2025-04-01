import axios from 'axios';

import client from '@/db'

async function getUserDetails() {
  const response = await axios.get('<https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details>');
  return response.data;
}

export default async function Home() {
  const userData = await getUserDetails();

  return (
    <div>
      {userData.email}
      {userData.name}
    </div>
  );
}