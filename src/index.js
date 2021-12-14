import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { createStore } from "redux";
import { Provider } from 'react-redux';
import postTodo from './Services/postTodo';

const reducer = (state=
  {
    todos:[],
    counter:0
  },
  action)=>{ 
  let updatedList;
  switch (action.type){
      case 'ADD_TODO':
        updatedList = [...state.todos,action.value];
        postTodo(updatedList);
        return {
          ...state,
          todos:updatedList
        };
      case 'DELETE_TODO':
        updatedList = state.todos.filter((_val,i)=> i != action.index);
        postTodo(updatedList);
        return {
          ...state,
          todos:updatedList
        }
      case 'CREATE':
          return {
            ...state,
            todos:action.payload
          }
      case 'Increment':
          return{
            ...state,
            counter:state.counter+1
          }
      case 'Decrement':
          return {
            ...state,
            counter:state.counter-1
          } 
      default:
          return state;     
  }
}
          
      // case 'SORT_TODO':
      //     return [...state.sort()]
    
const store = createStore(reducer);

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider >
    </React.StrictMode>,
    document.getElementById('root')
  );

// store.subscribe(render);
// render()
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

