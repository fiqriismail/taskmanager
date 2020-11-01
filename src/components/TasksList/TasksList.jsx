import React, { useState } from 'react';
import moment from 'moment';

import TaskItem from './TaskItem';

function TodoList() {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Task 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar ornare nisi, in hendrerit tellus ultricies et. ',
      createdDate: new Date(),
      dueDate: moment().add(3, 'days').format('DD-MM-yyyy'),
      status: 'New',
    },
    {
      id: '2',
      title: 'Task 2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar ornare nisi, in hendrerit tellus ultricies et. ',
      createdDate: new Date(),
      dueDate: moment().add(3, 'days').format('DD-MM-yyyy'),
      status: 'New',
    },
    {
      id: '3',
      title: 'Task 3',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar ornare nisi, in hendrerit tellus ultricies et. ',
      createdDate: new Date(),
      dueDate: moment().add(3, 'days').format('DD-MM-yyyy'),
      status: 'Completed',
    },
    {
      id: '4',
      title: 'Task 4',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar ornare nisi, in hendrerit tellus ultricies et. ',
      createdDate: new Date(),
      dueDate: moment().add(3, 'days').format('DD-MM-yyyy'),
      status: 'Completed',
    },
    {
      id: '5',
      title: 'Task 5',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar ornare nisi, in hendrerit tellus ultricies et. ',
      createdDate: new Date(),
      dueDate: moment().add(3, 'days').format('DD-MM-yyyy'),
      status: 'New',
    },
  ]);

  const displayTasks = () => {
    return tasks.map((task) => {
      return <TaskItem key={task.id} taskInfo={task} />;
    });
  };

  return (
    <div className="container mt-4">
      <div className="row">{displayTasks()}</div>
    </div>
  );
}

export default TodoList;
