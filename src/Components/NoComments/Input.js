import React, { useState } from "react"

const Input = () => {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div>
      <h1>
        Name: {name} Password: {password}
      </h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setName("")}>Clear</button>

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => setPassword("")}>Clear</button>
    </div>
  )
}

export default Input
