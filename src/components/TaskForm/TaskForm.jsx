import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { v4 as uuid4 } from 'uuid';

function TaskForm(props) {
  const [message, setMessage] = useState('');

  const initialValues = {
    title: '',
    description: '',
    dueDate: '',
  };

  const onSubmit = (values, { resetForm }) => {
    const taskId = uuid4();
    const apiUrl = `https://reactapidemo-290306.firebaseio.com/tasks/${taskId}.json`;
    const task = { ...values, status: 'New', task_id: taskId };

    axios
      .put(apiUrl, task)
      .then((response) => {
        if (response.status === 200) {
          setMessage('Task saved successfully');
          resetForm({ values: '' });
        }
      })
      .catch((error) => {
        setMessage(`Something went wrong, error is ${error.message}`);
      });
  };

  // const validate = (values) => {
  //   let errors = {};
  //   if (!values.title) {
  //     errors.title = 'Title is required';
  //   }

  //   if (!values.description) {
  //     errors.description = 'Description is required';
  //   }

  //   if (!values.dueDate) {
  //     errors.dueDate = 'The due date is required';
  //   } else if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(values.dueDate)) {
  //     errors.dueDate = 'Date must be dd/mm/yyyy format';
  //   }
  //   return errors;
  // };

  const validationSchema = Yup.object({
    title: Yup.string().required('Title cannot be blank'),
    description: Yup.string().required('Description cannot be blank'),
    dueDate: Yup.date().required('Due Date is required'),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    //validate,
  });

  return (
    <div className="container col-sm-8 mt-4">
      <h4 className="mb-4">New Task</h4>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
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
            className="form-control"
            id="description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
          ></textarea>
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
      {message ? (
        <div className="alert alert-primary mt-4" role="alert">
          {message} - Click here to see <Link to="/">all tasks</Link>
        </div>
      ) : null}
    </div>
  );
}

export default TaskForm;
