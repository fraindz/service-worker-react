import React from "react";
import axios from "axios";

async function getUser() {
  let user = await axios.get("https://randomuser.me/api");
  return user;
}

async function getTodos() {
  let todos = await axios.get("http://localhost:8000/todos");
  return todos;
}

class App extends React.Component {
  state = { user: {}, todos: [] };
  componentDidMount() {
    getUser().then(res => this.setState({ user: res.data.results[0] }));
    getTodos().then(res => this.setState((console.log(res), { todos: res.data })));
  }
  onLoadUser = () => {
    getUser().then(res => this.setState({ user: res.data.results[0] }));
  };
  onLoadTodos = () => {
    getTodos().then(res => this.setState((console.log(res), { todos: res.data })));
  };
  render() {
    return (
      <div className="App">
        <h1>Service worker resource caching strategies demo</h1>
        <button onClick={this.onLoadUser}>Load dummy user</button>(different response every time)
        <h2>{JSON.stringify(this.state.user.name)}</h2><br /><br />
        <button onClick={this.onLoadTodos}>Load todos</button>(same response every time)
        {this.state.todos.map(t => 
          (<React.Fragment><h2>{JSON.stringify(t)}</h2><br /><br /></React.Fragment>)        
        )}
      </div>
    );
  }
}

export default App;
