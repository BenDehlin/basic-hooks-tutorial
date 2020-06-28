import React, { useState } from "react"
import axios from "axios"

const HookForm = (props) => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [password, setPassword] = useState("")

  const login = (e) => {
    e.preventDefault()
    axios
      .post("/auth/login", { username, email, firstName, lastName, password })
      .then((res) => {
        console.log("logged in")
        console.log(res.data)
      })
      .catch((err) => console.log(err))
  }
  return (
    <form onSubmit={login}>
      <input
        placeholder="Enter username"
        value={username}
        onChange={() => setUsername(e.target.value)}
      />
      <input
        placeholder="Enter email"
        value={email}
        onChange={() => setEmail(e.target.value)}
      />
      <input
        placeholder="Enter First Name"
        value={firstName}
        onChange={() => setFirstName(e.target.value)}
      />
      <input
        placeholder="Enter Last Name"
        value={lastName}
        onChange={() => setLastName(e.target.value)}
      />
      <input
        placeholder="Enter password"
        type="password"
        value={password}
        onChange={() => setPassword(e.target.value)}
      />
      <button type="submit">Log In</button>
    </form>
  )
}

export default HookForm