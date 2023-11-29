import { useState } from 'react'
import TaskItem from './TaskItem';

export default function TaskForm() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      complete: false,
    }
    setTodoList([...todoList, task]);
  }

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  }

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, complete:true };
        } else {
          return task;
        }
      })
    )
  }

  return (
    <>
      <div className="App"></div>
      <div className="addTask">
        <input onChange={handleChange}/>
        <button onClick={addTask}>Agregue Tarea</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
        return <TaskItem 
        taskName={task.taskName} 
        id={task.id}
        complete={task.complete} 
        deleteTask={deleteTask}
        completeTask={completeTask}
        />
        })}
      </div>
    </>
  )
}
