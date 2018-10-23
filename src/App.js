import React, { Component } from 'react';
import TasksPage from './components/TasksPage';
import { createTask, editTask, fetchTasks } from "./actions";
import { connect } from 'react-redux';


class App extends Component {

    onCreateTask = ({ title, description }) => {
        this.props.dispatch(createTask({title, description})); }

    onEditStatus = (id, status) => {
        this.props.dispatch(editTask(id, { status }));
    }

    componentDidMount() {
        this.props.dispatch(fetchTasks());
    }

    render() {
    return (
        <div className="main­content">
            <TasksPage
                tasks={this.props.tasks}
                onCreateTask={ this.onCreateTask }
                onEditStatus = { this.onEditStatus }
            /> </div>
    ); }
}

function mapStateToProps(state) {
    return {
        tasks: state.tasks
    };
}

export default connect(mapStateToProps)(App);