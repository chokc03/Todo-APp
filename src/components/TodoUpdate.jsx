/*
Writer : Kyungchan Cho
This file allows to update new todo text
First written Date : 2021.12.21
Finall edit Date : 2021.12.21
*/

import React,{useState} from 'react'

function TodoUpdate({todo,updateTodo}) {
    const[input,setInput] = useState('');
    const{id,text}=todo;
    const handleChange =(e)=>{
        setInput(e.target.value);
    }
    const submitUpdate=(e)=>{
        if (input===''){
            e.preventDefault();
            return;
        }

        else{
        //Pass in the input and id value to the function
        updateTodo(id,input);
        e.preventDefault();
        setInput('');
        }
    }
    return (
        <div>
            <form onSubmit={submitUpdate}>
                <input type="text" 
                placeholder={text}
                onChange={handleChange}
                value={input}/>
                <button>Update</button>
            </form>
        </div>
    )
}

export default TodoUpdate
