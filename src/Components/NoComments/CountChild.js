import React, { useEffect } from "react"

const CountChildTwo = ({ count }) => {
  useEffect(() => {
    console.log(`count has changed to ${count}`)
  }, [count])
  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  )
}
export default CountChildTwo
