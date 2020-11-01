import React from 'react';

function TaskItem(props) {
  const borderColor = props.taskInfo.status === 'New' ? 'border-primary' : '';
  return (
    <div className={'card m-1 col-3 p-0 border ' + borderColor}>
      <div className="card-body">
        <div className="row">
          <div className="col">
            <h5 className="card-title">{props.taskInfo.title}</h5>
          </div>
          <div className="col text-right">
            <small>{props.taskInfo.dueDate}</small>
          </div>
        </div>

        <p className="card-text">{props.taskInfo.description}</p>
        <a href="/" className="btn btn-success card-link">
          Complete
        </a>
        <a href="/" className="btn btn-danger card-link">
          Delete
        </a>
      </div>
    </div>
  );
}

export default TaskItem;
