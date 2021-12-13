import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { createStore } from "redux";
import { Provider } from 'react-redux';

// todo_list
const reducer = (state=[],action)=>{ 
  switch (action.type){
      case 'ADD_TODO':
          return [...state,action.value];
      case 'DELETE_TODO':
          return state.filter((_val,i)=> i != action.index);  
      // case 'SORT_TODO':
      //     return [...state.sort()]
      default:
          return state;     
  }
}

// const reducer = (state=0,action)=>{ 
//   switch (action.type){
//       case 'Increment':
//           return state+1 ;
//       case 'Decrement':
//           return state-1;  
//       default:
//           return state;     
//   }
// }
const store = createStore(reducer);

// const render = () =>{
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
// }
// store.subscribe(render);
// render()
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

