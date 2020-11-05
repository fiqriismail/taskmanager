import React from 'react';

function TaskItem(props) {
  const borderColor =
    props.taskInfo.status === 'Completed' ? 'border-success' : '';
  return (
    <div className="col mb-2">
      <div className={'card border ' + borderColor}>
        <div className="card-header">
          <span>{props.taskInfo.title}</span>
          <br />
          <span className="badge badge-pill badge-primary">
            {props.taskInfo.dueDate}
          </span>
        </div>
        <div className="card-body d-flex flex-column">
          <p className="card-text">{props.taskInfo.description}</p>

          <div className="mt-auto text-right">
            <button
              className="btn btn-danger btn-sm mr-2"
              onClick={() => props.onDelete(props.taskInfo.task_id)}
            >
              Delete
            </button>
            <button
              className="btn btn-success btn-sm "
              onClick={() => props.onComplete(props.taskInfo.task_id)}
            >
              Complete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskItem;
