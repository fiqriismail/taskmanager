import React from 'react';

function TaskForm() {
  return (
    <div className="container col-sm-8 mt-4">
      <h4 className="mb-4">New Task</h4>
      <form action="/" method="post">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" className="form-control" id="title" name="title" />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            rows="4"
            type="text"
            className="form-control"
            id="description"
            name="description"
          />
        </div>
        <div className="form-group">
          <label htmlFor="dueDate">Due Date</label>
          <input
            type="text"
            className="form-control"
            id="dueDate"
            name="dueDate"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
