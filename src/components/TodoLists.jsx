/*
Writer : Kyungchan Cho
This file manipulate all the inputed todo lists
First written Date : 2021.12.20
Finall edit Date : 2021.12.21
*/

import React, {useState}from 'react';
import {GrStar} from 'react-icons/gr';
import {AiOutlineCloseCircle, AiFillEdit} from 'react-icons/ai';
import TodoUpdate from './TodoUpdate';

function TodoLists({todo, handleRemove, handleEdit, updateTodo}) {
    //Same as {todo.id}, {todo.text}, {todo.edit}
    const {id, text, edit} =todo;
    const [check,setCheck]=useState(false);
    const [star,setStar] = useState(false);
    //Allow to toggle boolean for the className changes
    const toggleStar=()=>{
        setStar(value=>!value)
    }
    const toggleCheck=()=>{
        setCheck(value=>!value);
    }
    return (
        <>
        {edit?<TodoUpdate todo={todo} updateTodo={updateTodo}/>:
        (
            <div className="todoList-container">
                <div onClick={toggleCheck} 
                className={check?"check todos":"todos"}>
                    {text}
                </div>
                <div className="todos-icon">
                    <GrStar
                    onClick={toggleStar}
                    //Toggle classNames when clicked
                    className={star?"star-on":"star-off"}
                    />

                    <AiFillEdit
                    className="editBtn"
                    onClick={()=>handleEdit(id)}/>

                    <AiOutlineCloseCircle
                    className="removeBtn"
                    //use callback function to pass in the id state
                    onClick={()=>handleRemove(id)}
                    />

                </div>
            </div>
            )}
        </>
    )
}

export default TodoLists
