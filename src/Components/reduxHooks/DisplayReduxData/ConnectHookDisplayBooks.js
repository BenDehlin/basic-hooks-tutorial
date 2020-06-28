import React from "react"
import { connect } from "react-redux"

const ConnectHookAddBook = (props) => {
  return (
    <div>
      {props.books.map((e) => (
        <div>{e.name}</div>
      ))}
    </div>
  )
}

const mapStateToProps = (reduxState) => reduxState
export default connect(mapStateToProps)(ConnectHookAddBook)
