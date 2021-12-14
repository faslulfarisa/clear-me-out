import postData from "./postData"

const postTodo = (state) =>{
    let newTask ={
    "user": "testUser",
    "todos":state.map(value=>({text:value,status:true}))   
    }
    postData('http://192.168.1.42:8086/todos',newTask)
    .then(data => console.log(data)) // JSON data parsed by `data.json()` call
}

export default postTodo;