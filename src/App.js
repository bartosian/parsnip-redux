import React, { Component } from 'react';
import TasksPage from './components/TasksPage';
import { createTask, editTask, fetchTasks } from "./actions";
import { connect } from 'react-redux';
import FlashMessage from './components/FlashMessage';;


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
            {this.props.error &&
            <FlashMessage message={this.props.error} />
            }
            <TasksPage
                tasks={this.props.tasks}
                isLoading={ this.props.isLoading }
                onCreateTask={ this.onCreateTask }
                onEditStatus = { this.onEditStatus }
            /> </div>
    ); }
}

function mapStateToProps(state) {
    const { tasks, isLoading, error } = state.tasks;
    return {
        tasks,
        isLoading,
        error

    };
}

export default connect(mapStateToProps)(App);