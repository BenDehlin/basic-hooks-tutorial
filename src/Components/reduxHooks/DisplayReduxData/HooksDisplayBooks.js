import React from "react"
import { useSelector } from "react-redux"

const HooksDisplayBooks = () => {
  const { books } = useSelector((reduxState) => reduxState)
  return (
    <div>
      {books.map((e) => (
        <div>{e.name}</div>
      ))}
    </div>
  )
}

export default HooksDisplayBooks
