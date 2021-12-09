 const {createStore} = require("redux")// createStore is a function
// // console.log(createStore)

const reducer = (state=[],action)=>{ // reducer returns new state
    switch (action.type) {
        case 'ADD_TODO':
          return [...state,action.text]
        default:
          return state
    }
}
const store = createStore(reducer)
// console.log(store)

const addTodo = text=> ({
    type: 'ADD_TODO',
    text
  })
store.dispatch(addTodo("Add to do"));
// console.log(store.getState())


const reducer = (state=0,action)=>{
    switch (action.type){
        case 'Increment':
            return state+1
        case 'Decrement':
            return state-1
        default:
            return state
    }
}
const store = createStore(reducer)
const unsubscribe = store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch({
    type: 'Increment',
  })
store.dispatch({
    type: 'Decrement',
  })
  unsubscribe()
store.dispatch({
    type: 'Increment',
  })
 



