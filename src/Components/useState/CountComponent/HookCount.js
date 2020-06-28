import React, { useState } from "react"

const HookCount = (props) => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(count + 5)}>+5</button>
      <button onClick={() => setCount(count - 5)}>-5</button>
    </div>
  )
}

export default HookCount