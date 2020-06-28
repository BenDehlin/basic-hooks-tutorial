import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addBook } from "../../../redux/reducer"

const HookAddBook = () => {
  const [name, setName] = useState("")
  const [author, setAuthor] = useState("")
  const dispatch = useDispatch()

  const addToList = () => {
    dispatch(addBook({ name, author }))
    resetFields()
  }
  const resetFields = () => {
    setName("")
    setAuthor("")
  }
  return (
    <div>
      <input
        placeholder="Book Name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Author Name"
        name="author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input />
      <button onClick={addToList}>Add Book</button>
      <button onClick={resetFields}>Clear Fields</button>
    </div>
  )
}

export default HookAddBook
