import React, { Component } from "react"
import axios from "axios"

class ClassOnMount extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
    }
  }
  componentDidMount() {
    axios
      .get("/api/movies")
      .then((res) => {
        this.setState({ movies: res.data })
      })
      .catch((err) => console.log(err))
  }
  render() {
    return (
      <div>
        {this.state.movies.map((e) => (
          <div>{e.name}</div>
        ))}
      </div>
    )
  }
}
export default ClassOnMount
