import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainMenu from './components/MainMenu/MainMenu';
import TasksList from './components/TasksList/TasksList';
import TaskForm from './components/TaskForm/TaskForm';

function App() {
  return (
    <>
      <BrowserRouter>
        <MainMenu />
        <Switch>
          <Route path="/newtask">
            <TaskForm />
          </Route>
          <Route path="/">
            <TasksList />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
