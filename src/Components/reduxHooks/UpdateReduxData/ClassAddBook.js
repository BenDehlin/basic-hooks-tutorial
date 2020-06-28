import React, { Component } from "react"
import { connect } from "react-redux"
import { addBook } from "../../../redux/reducer"

class ClassAddBook extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      author: "",
    }
  }

  handleChange = ({ target }) => {
    const { name, value } = target
    this.setState({ [name]: value })
  }

  addToList = () => {
    const { name, author } = this.state
    this.props.addBook({ name, author })
    resetFields()
  }

  resetFields = () => {
    this.setState({ name: "", author: "" })
  }

  render() {
    return (
      <div>
        <input
          placeholder="Book Name"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          placeholder="Author Name"
          name="author"
          value={this.state.author}
          onChange={this.handleChange}
        />
        <button onClick={this.addToList}>Add Book</button>
        <button onClick={this.resetFields}>Clear Fields</button>
      </div>
    )
  }
}

export default connect(null, { addBook })(ClassAddBook)
