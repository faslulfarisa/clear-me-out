// import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

const Counter = () => {
 
    //   const sortTodo = (value)=> {
    //     store.dispatch({
    //         type: 'SORT_TODO',
    //         value
    //   }) 
    // }
    const dispatch =useDispatch()
    const count = useSelector(state=>state.Counter)
    return (
        <div className="counter">
            <button
                onClick={
                    ()=>{
                        dispatch({
                            type:"Increment"
                        })
                        }
                    }
            >+</button>
            <div className="value">
                {count}
            </div>
            <button
                onClick={
                    ()=>{
                        dispatch({
                            type:"Decrement"
                        })
                        
                    }
                }
            >-</button>
        </div>
    )
    }
    
    //     </div>
    //     <button
    //     onClick={
    //         ()=>{
    //             sortTodo(input) 
    //         }
    //     }>SORT</button>
    // </div>
           
export default Counter

