/*
Writer : Kyungchan Cho
This file manipulate all the inputed todo lists
First written Date : 2021.12.20
Finall edit Date : 2021.12.20
*/

import React, {useState}from 'react';
import {GrStar} from 'react-icons/gr';
import {AiOutlineCloseCircle} from 'react-icons/ai';

function TodoLists({todo, handleRemove}) {
    //Same as {todo.id}, {todo.text}
    const {id, text} =todo;
    const [star,setStar] = useState(false);
    //Allow to toggle boolean for the className changes
    const toggleStar=()=>{
        setStar(value=>!value)
    }
    return (
        <>
            <div className="todoList-container">
                <div className="todos">
                    {text}
                </div>
                <div className="todos-icon">
                    <GrStar
                    onClick={toggleStar}
                    //Toggle classNames when clicked
                    className={star?"star-on":"star-off"}
                    />
                    <AiOutlineCloseCircle
                    className="removeBtn"
                    onClick={()=>handleRemove(id)}
                    />
                </div>
            </div>
        </>
    )
}

export default TodoLists
