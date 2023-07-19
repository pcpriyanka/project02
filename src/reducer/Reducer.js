import { combineReducers } from "redux";

function counterReducer(state = 0, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}

const rootReducer = combineReducers({ counterReducer });

export default rootReducer;

// import { ADD_TODO } from '../action/Action'

// function todo(state, action) {
// 	switch (action.type) {
// 		case ADD_TODO:
// 			return {
// 				id: action.id,
// 				text: action.text,
// 			}
// 		default:
// 			return state
// 	}
// }
// function todos(state = [], action) {
// 	switch (action.type) {
// 		case ADD_TODO:
// 			return [
// 				...state,
// 				todo(undefined, action)
// 			]
// 		default:
// 			return state
// 	}
// }
// const todoApp = combineReducers({
// 	todos
// })
// export default todoApp;
