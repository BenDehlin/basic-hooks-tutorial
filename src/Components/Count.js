import React, { useState } from "react"
import CountChild from "./CountChild"

const Count = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <CountChild count={count} />
    </div>
  )
}

export default Count
