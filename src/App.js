
import React,{useState, useRef, useEffect} from 'react';
import './App.css';
import Todo from './components/todo';


function App() {
  const stored = JSON.parse(localStorage.getItem('todokey'));
  const [todo, setTodos]= useState(stored?stored:[]);
  const input=useRef();

  useEffect(()=>{
    const stored = JSON.parse(localStorage.getItem('todokey'));
    if (stored) setTodos(stored);
  }, [])

  useEffect(()=>{
    localStorage.setItem('todokey', JSON.stringify(todo));
  }, [todo])

  const handleTodo = ()=>{
    const newtodo = input.current.value;
    var num=todo.length;
    num++;
    setTodos(prevTodos=>{
      return [...prevTodos,{id: num, name: newtodo, completed: false}]
    })
    input.current.value=null;

  }
  function toggle(id){
    const newtodo=[...todo]
    const togit=newtodo.find(todo=>todo.id===id)
    togit.completed=!togit.completed
    setTodos(newtodo)

  }
  function clear(){
    setTodos([])
  }
  return (
<>
  <Todo todo={todo} toggle={toggle}/>
  <input ref={input}type='text'/>
  <button onClick={handleTodo}>Add</button>
  <button onClick={clear}>Clear</button>
  <div>{todo.filter(todo=>!todo.completed).length} left to do</div>
</>
  );
}

export default App;
