import React from "react"
import { useHistory } from "react-router-dom"

const HookNavBar = (props) => {
  const { push } = useHistory()
  return (
    <div>
      <button onClick={() => push("/home")}>Home</button>
      <button onClick={() => push("/profile")}>Profle</button>
      <button onClick={() => push("/about")}>About</button>
    </div>
  )
}
export default HookNavBar
