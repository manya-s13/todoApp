import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { CreateTodo } from './components/CreateTodo.jsx'
import {Todos} from './components/Todos'
import './App.css'

function App() {

  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:3005/todos")
    .then(async function(res){
       const json = await res.json();
       setTodos(json.todos);
    })
  }, [])

  return (
    <>
    <CreateTodo></CreateTodo>
    <Todos todos={todos}></Todos>
    </>
  )
}

export default App
