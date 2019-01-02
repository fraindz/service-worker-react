import React from "react";
import axios from "axios";

async function getUser() {
  let user = await axios.get("https://randomuser.me/api");
  return user;
}

class App extends React.Component {
  state = { user: {} };
  componentDidMount() {
    getUser().then(res => this.setState({ user: res.data.results[0] }));
  }
  onLoadUser = () => {
    getUser().then(res => this.setState({ user: res.data.results[0] }));
  };
  render() {
    return (
      <div className="App">
        <h1>Service worker prefetch demo</h1>
        <button onClick={this.onLoadUser}>Load dummy user</button>
        <h2>{JSON.stringify(this.state.user.name)}</h2><br /><br />
      </div>
    );
  }
}

export default App;
