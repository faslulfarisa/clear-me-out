import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import postData from './Services/postData';

const Todo = () => {
    const [input,setInput]=useState("");
    const dispatch = useDispatch()
    const todoList = useSelector(state=>state.todos)
    
    useEffect(() => {
         fetch("http://192.168.1.42:8086/todos/testUser")
        .then(response=>response.json())
        .then(data=>
            {dispatch({   
                type:"CREATE",
                payload:data[0].todos.map(value=>value.text),

            })
        })
        },[])
    
    return (
        <div>
            <div className="todo-input-section">
                <input type="text"
                onChange={
                    (e)=>{
                        setInput(e.target.value)
                    }
                }
                value={input}
                />
                <button className="counter-page-button"
                onClick={()=>
                    {dispatch({
                        type:"ADD_TODO",
                        value:input
                    })
                setInput("")    
                }
                }
                >ADD</button>
                    {todoList.map((value,i)=>
                    <>
                        <div className="list-out" key ={i}>
                            {value}
                        </div>
                        <button className="counter-page-button"
                        onClick={
                            ()=>{
                                dispatch({
                                    type:"DELETE_TODO",
                                    index:i
                                })  
                            }
                        }>DELETE
                        </button>
                    </>
                    )}
            </div>
        </div>
    )
}

export default Todo
