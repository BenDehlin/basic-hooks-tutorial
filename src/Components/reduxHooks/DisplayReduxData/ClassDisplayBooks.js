import React, { Component } from "react"
import {connect} from 'react-redux'

class ClassDisplayBooks extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        {this.props.books.map((e) => (
          <div>{e.name}</div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (reduxState) => reduxState
export default connect(mapStateToProps)(ClassDisplayBooks)
