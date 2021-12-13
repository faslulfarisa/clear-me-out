import { useState } from "react"

const Counter = ({store}) => {
    const [input,setInput]=useState("");
    const addTodo = (value)=> {
        store.dispatch({
            type: 'ADD_TODO',
            value
      })
      
    }
    const deleteTodo = (index)=> {
        store.dispatch({
            type: 'DELETE_TODO',
            index
      }) 
    }
      const sortTodo = (value)=> {
        store.dispatch({
            type: 'SORT_TODO',
            value
      }) 
    }
    return (
            <div className="counter-page">
                <div className="todo-input-section">
                <input type="text" 
                    onChange={
                        (e)=>{
                            setInput(e.target.value)
                        }}
                    />
                    <button className="counter-page-button"
                        onClick={
                        ()=>{
                            addTodo(input);
                        }
                        }>ADD
                    </button>
                </div> 
                <div className="counter-todo-list">
                    {
                        store.getState().map((value,i)=><div className="list-out" key={i}>
                            {value} 
                            
                            <button className="counter-page-button"
                            onClick={
                                ()=>{
                                    deleteTodo(i);
                                    }
                                }>DELETE</button>
                            
                        </div>)
                    }
                </div>
                <button
                onClick={
                    ()=>{
                        sortTodo(input) 
                    }
                }>SORT</button>
            </div>
        
    )
}
export default Counter

