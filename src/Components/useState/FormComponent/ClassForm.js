import React, { Component } from "react"
import axios from 'axios'

class ClassForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      email: "",
      firstName: "",
      lastName: "",
      password: "",
    }
  }

  handleChange = ({ target }) => {
    const { name, value } = target
    this.setState({ [name]: value })
  }

  login = (e) => {
    e.preventDefault()
    const { username, email, firstName, lastName, password } = this.state
    axios
      .post("/auth/login", { username, email, firstName, lastName, password })
      .then((res) => {
        console.log("logged in")
        console.log(res.data)
      })
      .catch((err) => console.log(err))
  }

  render() {
    const { username, email, firstName, lastName, password } = this.state
    return (
        <form onSubmit={login}>
          <input
            placeholder="Enter username"
            name="username"
            value={username}
            onChange={handleChange}
          />
          <input
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <input
            placeholder="Enter First Name"
            name="firstName"
            value={firstName}
            onChange={handleChange}
          />
          <input
            placeholder="Enter Last Name"
            name="lastName"
            value={lastName}
            onChange={handleChange}
          />
          <input
            placeholder="Enter password"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
          <button type="submit">Log In</button>
        </form>
    )
  }
}

export default ClassForm