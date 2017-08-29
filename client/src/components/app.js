import React, {Component} from 'react';
import TaskList from '../containers/tasks-list';

export default class App extends Component {
  render() {
    return (
      <div className="row">
          <div className="col-md-12">
            <p>Hello World!</p>
            <TaskList/>
          </div>
      </div>
    );
  }
}