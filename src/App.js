// import logo from './logo.svg';
import "./App.css";
import Counter from "./component/Counter";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;

// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { addTodo } from './action/Action'

// import AddToDo from './component/AddToDo.js';
// import ToDoList from './component/ToDoList.js';

// class App extends Component {
//    render() {
//       const { dispatch, visibleTodos } = this.props

//       return (
//          <div>
//             <AddToDo onAddClick = {text =>dispatch(addTodo(text))} />
//             <ToDoList todos = {visibleTodos}/>
//          </div>
//       )
//    }
// }
// function select(state) {
//    return {
//       visibleTodos: state.todos
//    }
// }
// export default connect(select)(App);

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
