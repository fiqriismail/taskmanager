import React, { useEffect, useState } from 'react';
import axios from 'axios';

import TaskItem from './TaskItem';

function TodoList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://reactapidemo-290306.firebaseio.com/tasks.json';

    axios.get(apiUrl).then((response) => {
      if (response.data) {
        setTasks(Object.values(response.data));
      }
    });
  }, []);

  const displayTasks = () => {
    if (tasks.length === 0)
      return (
        <div className="spinner-border m-auto" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      );
    return tasks.map((task) => {
      return <TaskItem key={task.task_id} taskInfo={task} />;
    });
  };

  return (
    <div className="container mt-4">
      <div className="row">{displayTasks()}</div>
    </div>
  );
}

export default TodoList;
