import React, { useState } from "react";
import uuid from 'uuid/v4';

function Tasks() {
  const [taskText, setTaskText] = useState('');
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompleteTasks] = useState([]);

  const updateTaskText = event => {
    setTaskText(event.target.value);
  }

  const addTask = () => {
    setTasks([...tasks, { taskText, id: uuid() }]);
  }

  const completeTask = completedTask => () => {
    setCompleteTasks([...completedTasks, completedTask])
    setTasks(tasks.filter(task => task.id !== completedTask.id))
  }

  const deleteTask = task => () => {
    setCompleteTasks(completedTasks.filter(t => t.id !== task.id));
  }

  return (
    <div>
      <h3>Tasks</h3>
      <div className="form">
        <input type="text" value={taskText} onChange={updateTaskText}/>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="task-list">
        {
          tasks.map(task => {
            return <div key={task.id} onClick={completeTask(task)}>{task.taskText}</div>
          })
        }
      </div>
      <div className="completed-list">
        {
          completedTasks.map(task => {
            return (
              <div key={task.id} >{task.taskText} {' '}
                <span className='delete-task' onClick={deleteTask(task)}>x</span> 
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Tasks;