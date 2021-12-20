# Todo App(first project)

### Purpose of the project
Learning how states is connected with other components and usage of the props

### Used Skills
- React
- Css

### Advanced Feature
#### React 
- Remove function
```ts
const handleRemove=(id)=>{
        //Use filter to remove the selcted id and maintain rest of the todos
        const removeArr=todos.filter(todo=>todo.id!==id)
        setTodos(removeArr);
    }
```
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
### Working On ...
- Todo edit function

