import React from "react"
import { withRouter } from "react-router-dom"

class ClassNavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { push } = this.props.history
    return (
      <div>
        <button onClick={() => push("/home")}>Home</button>
        <button onClick={() => push("/profile")}>Profile</button>
        <button onClick={() => push("/about")}>About</button>
      </div>
    )
  }
}

export default withRouter(ClassNavBar)
