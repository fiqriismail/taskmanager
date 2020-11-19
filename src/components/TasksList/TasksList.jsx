import React, { useEffect, useState } from 'react';
import axios from 'axios';

import TaskItem from './TaskItem';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [taskUpdated, setTaskUpdated] = useState(false);

  useEffect(() => {
    const apiUrl = 'https://reactapidemo-290306.firebaseio.com/tasks.json';
    axios.get(apiUrl).then((response) => {
      if (response.data) {
        setTasks(Object.values(response.data));
      }
    });
  }, [taskUpdated]);

  const handleComplete = (taskid) => {
    const apiUrl = `https://reactapidemo-290306.firebaseio.com/tasks/${taskid}.json`;
    axios.patch(apiUrl, { status: 'Completed' }).then((response) => {
      if (response.status === 200) {
        setTaskUpdated(!taskUpdated);
      }
    });
  };

  const handleDelete = (taskid) => {
    const apiUrl = `https://reactapidemo-290306.firebaseio.com/tasks/${taskid}.json`;
    axios.delete(apiUrl).then((response) => {
      if (response.status === 200) {
        setTaskUpdated(!taskUpdated);
      }
    });
  };

  const displayTasks = () => {
    if (tasks.length === 0)
      return (
        <div className="spinner-border m-auto" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      );
    return tasks.map((task) => {
      return (
        <TaskItem
          key={task.task_id}
          taskInfo={task}
          onComplete={handleComplete}
          onDelete={handleDelete}
        />
      );
    });
  };

  return (
    <div className="container mt-4">
      <div className="row row-cols-1 row-cols-md-3">{displayTasks()}</div>
    </div>
  );
}

export default TodoList;
