import React from 'react';

function TaskForm() {
  return (
    <div className="container col-sm-8 mt-4">
      <h4 className="mb-4">Add/Edit Task</h4>
      <form action="/" method="post">
        <div className="form-group">
          <label for="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group">
          <label for="description">Description</label>
          <textarea
            rows="4"
            type="text"
            className="form-control"
            id="description"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group">
          <label for="dueDate">Due Date</label>
          <input
            type="text"
            className="form-control"
            id="dueDate"
            aria-describedby="emailHelp"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
