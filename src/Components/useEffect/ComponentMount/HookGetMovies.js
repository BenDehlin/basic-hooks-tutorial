import React, { useState, useEffect } from "react"
import axios from "axios"

const HookOnMount = () => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    axios
      .get("/api/movies")
      .then((res) => {
        setMovies(res.data)
      })
      .catch((err) => console.log(err))
  }, [])
  return (
    <div>
      {movies.map((e) => (
        <div>{e.name}</div>
      ))}
    </div>
  )
}
export default HookOnMount
