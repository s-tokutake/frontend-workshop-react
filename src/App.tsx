import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

type Task = {
  id: string
  title: string
  completed: boolean
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([
  ]) 
  const [input, setInput] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!input.trim()) {
      return
    }
    const task = {
      id: crypto.randomUUID(),
      title: input,
      completed: false,
    }
    
    setTasks([
      ...tasks,
      task,
    ])
    setInput('')
  }

  function handleToggle(task: Task) {
    setTasks(
      tasks.map((t) =>
        t.id === task.id ? { ...t, completed: !t.completed } : t
      )
    )
  }

  return (
    <>
      <h1>&#128129;todoアプリ&#128006;</h1>
      
      {tasks.length > 0 ?
      <>
        <h2>My Task</h2>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <input type="checkbox" 
              onChange={() => handleToggle(task)}
              checked={task.completed}
              />
              {task.completed ? <s>{task.title}</s> : task.title}
            </li>
          ))}
        </ul>
      </> : <p>タスクはありません</p>
    }
    <form onSubmit={handleSubmit}>
      <input type="text" value={input} onChange={
        (e) => setInput(e.target.value)
      }></input>
      <button type="submit">add tasks</button>
    </form>
    </>
  )
}

export default App
