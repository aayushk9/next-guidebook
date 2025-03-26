"use client"

import axios from "axios"
import { useState, ChangeEventHandler, use } from "react"
import { useRouter } from "next/navigation";

export function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

     
    return <div>
        <input onChange={(e) => {
            setUsername(e.target.value)
        }} value={username} type="text" placeholder="aayush"/>

        <input onChange={(e) => {
            setPassword(e.target.value)
        }} value={password} type="text" placeholder="****"/>

        <button onClick={async() => {
            const response = await axios.post("http://localhost:3000/api/user", {
               username,
               password
            }
            )
            router.push("/")
            console.log(response)
        }}>Signup</button>
    </div>
}