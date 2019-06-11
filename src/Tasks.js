import React, { useState, useEffect } from "react";
import uuid from "uuid/v4";

const TASKS_STORAGE_KEY = "TASKS_STORAGE_KEY";

const storeTasks = tasksMap => {
  localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasksMap));
};

const readStoredTasks = () => {
  // used JSON.parse because it returns stringified object values but we need the object itself
  // instead of returning directly we will check if it is null or not because if its null, app will crash
  // return JSON.parse(localStorage.getItem("TASKS_STORAGE_KEY"));

  const tasksMap = JSON.parse(localStorage.getItem("TASKS_STORAGE_KEY"));

  // if tasksMap is null - which is if no tasks have been set yet, then return empty arrays
  // if tasksMap has any tasks, then return the existing tasks
  return tasksMap ? tasksMap : { tasks: [], completedTasks: [] };
};

function Tasks() {
  const [taskText, setTaskText] = useState("");

  // calling it before we apply values to tasks and completedTasks
  const storedTasks = readStoredTasks();
  // const [tasks, setTasks] = useState([]);
  const [tasks, setTasks] = useState(storedTasks.tasks);
  // const [completedTasks, setCompletedTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState(
    storedTasks.completedTasks
  );

  useEffect(() => {
    storeTasks({ tasks, completedTasks });
  });

  const updateTaskText = event => {
    setTaskText(event.target.value);
  };

  const addTask = () => {
    setTasks([...tasks, { taskText, id: uuid() }]);
  };

  const completeTask = completedTask => () => {
    setCompletedTasks([...completedTasks, completedTask]);

    // to show only the filtered tasks
    setTasks(tasks.filter(task => task.id !== completedTask.id));
  };

  const deleteTask = task => () => {
    setCompletedTasks(completedTasks.filter(t => t.id !== task.id));
  };

  console.log("tasks", tasks);
  console.log("completedTasks", completedTasks);

  return (
    <div>
      <h3>Tasks</h3>
      <div className="form">
        <input type="text" value={taskText} onChange={updateTaskText} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="task-list">
        {tasks.map(task => {
          const { id, taskText } = task;

          return (
            <div key={id} onClick={completeTask(task)}>
              {taskText}
            </div>
          );
        })}
      </div>
      <div className="completed-list">
        {completedTasks.map(task => {
          const { id, taskText } = task;

          return (
            <div key={id}>
              {taskText}
              <span onClick={deleteTask(task)} className="delete-task">
                &nbsp;x
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Tasks;
