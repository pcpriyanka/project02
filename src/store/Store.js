import { createStore } from "redux";
// import toDoApp from '../reducer/Reducer';
import rootReducer from '../reducer/Reducer';


// let myStore=createStore(toDoApp);
let myStore=createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default myStore;