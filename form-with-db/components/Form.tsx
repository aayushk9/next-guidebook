"use client"

import { useState } from "react"
import axios from "axios";

export function Form () {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    return( <div>
       <input type="text" placeholder="username" value={username} onChange={(e) => {
         setUsername(e.target.value)
       }}/> 

       <input type="password" placeholder="*****" value={password} onChange={(e) => {
        setPassword(e.target.value)
       }}/>

       <button type="submit" onClick={async() => {
           const res = await axios.post("http://localhost:3000/api/user", {
            username,
            password
           });
           return res.data
       }}>login</button>
    </div>
    )
}