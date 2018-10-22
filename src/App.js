import React, { Component } from 'react'; import TasksPage from './components/TasksPage';


class App extends Component { render() {
    return (
        <div className="main­content">
            <TasksPage tasks={mockTasks} /> </div>
    ); }
}

export default App;