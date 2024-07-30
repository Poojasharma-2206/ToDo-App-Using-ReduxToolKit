import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './Components/AddTodo'
import Todos from './Components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-purple-700 text-3xl'>React Redux tool kit </h1>
    <AddTodo />
    <Todos />
    </>
  )
}

export default App
