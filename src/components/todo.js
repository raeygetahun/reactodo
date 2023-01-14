import React from 'react';
import List from './list'

function Todo(props){
    return(
        props.todo.map(todo=>{
            return <List key={todo.id} toggle={props.toggle} list={todo}/>
        })
    );

}
export default Todo;