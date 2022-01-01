/*
Writer : Kyungchan Cho
This file manipulates inputs need to added in the TodoList
First written Date : 2021.12.20
Finall edit Date : 2021.12.21
*/

import React, {useState,useCallback} from 'react'


function TodoSearch({handleTodo}) {
    const[input,setInput] = useState('');
    const handleChange =(e)=>{
        setInput(e.target.value);
    }
    //Add a new todo after submitted
    const handleSubmit=useCallback((e)=>{
        if (input===''){
            e.preventDefault();
            return;
        }

        else{
        //Pass in the input value to the new Todo
        handleTodo(input);
        //Prevent refreshing pages
        e.preventDefault();
        //reset the input value
        setInput('');
        }
    },[handleTodo, input]);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                placeholder="Add Todo"
                onChange={handleChange}
                value={input}/>
                <button>Add</button>
            </form>
        </div>
    )
}

export default TodoSearch
