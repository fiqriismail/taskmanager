import React from 'react';
import { useFormik } from 'formik';

const initialValues = {
  title: '',
  description: '',
  dueDate: '',
};

const onSubmit = (values) => {
  console.log('form data:', values);
};

const validate = (values) => {
  let errors = {};
  if (!values.title) {
    errors.title = 'Title is required';
  }

  if (!values.description) {
    errors.description = 'Description is required';
  }

  if (!values.dueDate) {
    errors.dueDate = 'The due date is required';
  } else if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(values.dueDate)) {
    errors.dueDate = 'Date must be dd/mm/yyyy format';
  }
  return errors;
};

function TaskForm() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <div className="container col-sm-8 mt-4">
      <h4 className="mb-4">Add/Edit Task</h4>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            aria-describedby="emailHelp"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
          />
          {formik.touched.title && formik.errors.title ? (
            <div className="small text-danger">{formik.errors.title}</div>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            rows="4"
            type="text"
            className="form-control"
            id="description"
            name="description"
            aria-describedby="emailHelp"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            values={formik.values.description}
          />
          {formik.touched.description && formik.errors.description ? (
            <div className="small text-danger">{formik.errors.description}</div>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="dueDate">Due Date</label>
          <input
            type="text"
            className="form-control"
            id="dueDate"
            name="dueDate"
            aria-describedby="emailHelp"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.dueDate}
          />
          {formik.touched.dueDate && formik.errors.dueDate ? (
            <div className="small text-danger">{formik.errors.dueDate}</div>
          ) : null}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
