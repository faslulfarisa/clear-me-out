import React from 'react'

const Counter = ({store}) => {
    const add = ()=> {
        store.dispatch({
        type: 'Increment',
      })
    }
    const sub = ()=> {
        store.dispatch({
        type: 'Decrement',  
        })
    }
    return (
        <div>
            <button className="sign-up-page-button" onClick={sub}>-</button>
            <div>{store.getState()}</div>
            <button className="sign-up-page-button" onClick={add}>+</button>      
        </div>
    )
}
export default Counter

