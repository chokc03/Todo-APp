/*
Writer : Kyungchan Cho
This file combines all the components and helps to show it in the screen
First written Date : 2021.12.20
Finall edit Date : 2021.12.21
*/


import React,{useState,useRef} from 'react';
import TodoLists from './TodoLists';
import TodoSearch from './TodoSearch';


function Todo() {
    //use useRef in order to make a unique id for the todo
    const nextId = useRef(0);
    const [todos,setTodos] = useState([]);
    //Make a function that can add todos as you enter a new input
    //Get the input from 'TodoSearch.jsx' and add it into Todo object
    const handleTodo=ipnut=>{
        const todo={
            id:nextId.current,
            text:ipnut,
            edit:false
        }
        //Concat new todo to old Todos
        setTodos(todos.concat(todo));
        //Add 1 for the next todo's Id to make it unique
        nextId.current +=1;
    };
    //Remove selected Todo List
    const handleRemove=(id)=>{
        //Use filter to remove the selcted id and maintain rest of the todos
        const removeArr=todos.filter(todo=>todo.id!==id)
        setTodos(removeArr);
    };
    //Make the selected id's edit into True 
    const handleEdit=(id)=>{
        setTodos(todos.map(todo=>
            todo.id===id?{...todo,edit:!todo.edit}:todo
            ))
    }
    //Update the text of the todo which has True in edit
    //and refresh the edit into false
    const updateTodo=(id,text)=>{
        setTodos(todos.map(todo=>
            todo.id===id?{...todo,text:text,edit:false}:todo,
            ))
    }
    return (
        <>
            <div className="TodoAppContainer">
                <h1>Add your Plan for Today</h1>
                <div className="todoContainer">

                    <TodoSearch 
                    handleTodo={handleTodo}/>

                    {todos.map(todo=>(
                        <TodoLists 
                        todo={todo} 
                        key={todo.id} 
                        handleRemove={handleRemove}
                        handleEdit={handleEdit}
                        updateTodo={updateTodo}
                        />
                    ))}
                    
                </div>
            </div>
        </>
    )
}

export default Todo
