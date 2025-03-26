import Image from "next/image";
import axios from "axios";

async function getUserDetails() {
  const response = await axios.get("http://localhost:3000/api/user");
  return response.data
}

export default async function Home() {
  const userData = await getUserDetails();
  return (
    <div className="">
      Hola     
      <br></br>
    {userData.email}
    <br></br>
    {userData.password}   
    </div>
  );
}