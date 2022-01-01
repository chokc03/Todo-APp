# Todo App(first project)

### Demo
<img width="310" alt="image" src="https://user-images.githubusercontent.com/86751419/146941415-d3e41922-7dde-4d3d-80b1-9137c30128d6.png">
website : https://chokc03.github.io/Todo-App/

### Purpose of the project
- Learning how states interacts with other components and how to pass in the props into another component.
- Learn how to optimize callback functions

### Used Skills
- React
- Css

### Advanced Feature
#### React 

- Todo editing function
    1. Create two function in 'Todo.jsx' component
        - handleEdit function :
        ```ts
            //Make the selected id's edit into True 
        const handleEdit=(id)=>{
            setTodos(todos.map(todo=>
                todo.id===id?{...todo,edit:!todo.edit}:todo
                ))
        }
        ```
        - updateTodo function :
        ```ts
        //Update the text of the todo which has True in edit
        //and refresh the edit into false
        const updateTodo=(id,text)=>{
            setTodos(todos.map(todo=>
                todo.id===id?{...todo,text:text,edit:false}:todo,
                ))
        }
        ```
    2. Pass it into 'TodoLists.jsx'. The reason is because these two function needs a specific id from a todo.

    3. Make a new component called 'TodoUpdate.jsx'. If the edit is true move on to the 'TodoUpdate.jsx', else stay with the TodoLists.

    4. Make 'TodoUpdate.jsx' similar with 'TodoSearch.jsx' except submitting function. In that function, you have to pass in the corresponding id into the updateTodo function(also the new input value).

- Adding Todo

"Todo.jsx"
```ts
    //Make a function that can add todos as you enter a new input
    //Get the input from 'TodoSearch.jsx' and add it into Todo object
    const handleTodo=ipnut=>{
        const todo={
            id:nextId.current,
            text:ipnut
        }
        //Concat new todo to old Todos
        setTodos(todos.concat(todo));
        //Add 1 for the next todo's Id to make it unique
        nextId.current +=1;
    }
```
"TodoLists.jsx"
```ts
 <AiOutlineCloseCircle
                    className="removeBtn"
                    //use callback function to pass in the id state
                    onClick={()=>handleRemove(id)}
                    />
```

- optimization (Use useCallback)

Used useCallback for all the callback functions in order to prevent rendering an unnecessary function. Thus, functions are only called when their values changes.
```ts
const handleTodo=useCallback(ipnut=>{
        const todo={
            id:nextId.current,
            text:ipnut,
            edit:false
        }
        //Concat new todo to old Todos
        setTodos(todos.concat(todo));
        //Add 1 for the next todo's Id to make it unique
        nextId.current +=1;
    },[todos],);
```
#### CSS
- Add button moving up and down
```ts
.todoContainer button:hover{
    border-bottom: solid 3px #4de94d;
    animation: btn 1s alternate;
}
@keyframes btn{
    0%{transform:translate(0);}
    20%{transform:translateY(-3px);}
    40%{transform:translateY(-1px);}
    60%{transform:translateY(-2.5px);}
    80%{transform:translateY(-1px);}
    100%{transform:translateY(0);}
}

```
- Regular colors for each Todo
```ts
.todoList-container:nth-child(4n+1){
    border-bottom-color: rgba(255,12,241,1);
}
.todoList-container:nth-child(4n+2){
    border-bottom-color: rgba(93,12,255,1);
}
.todoList-container:nth-child(4n+3){
    border-bottom-color: rgba(20,159,255,1);
}
```
