import React, { useState } from "react"
// remember to import the relevant hooks from wherever they come from.
// useState and useEffect both come from react but there are many other
// useful hooks that you have access to.

const Input = () => {
  // destructure the name of your state and a function to change
  // that state off of the useState hook (returns as an array).
  // You can call your state and function whatever you would like.
  // Pass into the useState function whatever you would like the
  // initial state to be.
  const [name, setName] = useState("")
  // additional pieces of state are generally created with a seperate
  // useState call to avoid needing to spread in the previous state when
  // one thing changes.
  const [password, setPassword] = useState("")

  return (
    <div>
      <h1>
        Name: {name} Password: {password}
      </h1>
      {/* Input on changes become easier because all you have to do
      is have the state change function take in e.target.value from the
      onChange event. Using custom hooks this can actually become even 
      easier. */}
      <input value={name} onChange={(e) => setName(e.target.value)} />
      {/* in order to have the ability to reset an input field make sure
      to set the value of the input field to the name of your state. This
      will make changes to the state also update the input field. */}
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
