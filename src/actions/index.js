import * as api from "../api";

function fetchTasksStarted() { return {
    type: 'FETCH_TASKS_STARTED', };
}


export function createTask({ title, description, status='Unstarted' }) {
    return function(dispatch) {
        api.createTask({title, description, status})
            .then(resp => {
                dispatch(createTaskSucceeded(resp.data))
            });
    }
}

export function editTask(id, params = {}) {
    return (dispatch, getState) => {

    const task = getTaskById(getState().tasks, id);

    const updatedTask = Object.assign({}, task, params);


    api.editTask(id, updatedTask).then(resp => { dispatch(editTaskSucceeded(resp.data));
    }); };
}
function getTaskById(tasks, id) {
    return tasks.find(task => task.id === id);
}

function fetchTasksFailed(error) { return {
    type: 'FETCH_TASKS_FAILED', payload: {
        error, },
}; }


export function createTaskSucceeded(task) {
    return {
        type: 'CREATE_TASK_SUCCEEDED',
        payload: {
            task
        }
    };
}

export function editTaskSucceeded(task) {
    return {
        type: 'EDIT_TASK_SUCCEEDED',
        payload: {
            task
        }
    };
}

export function fetchTasksSucceeded(tasks) {
    return {
      type: 'FETCH_TASKS_SUCCEEDED',
      payload: {
          tasks
      }
    };
}

export function fetchTasks() {
    return function(dispatch) {

        dispatch(fetchTasksStarted());

        api.fetchTasks()
            .then(resp => {

                // setTimeout(() => {
                //     dispatch(fetchTasksSucceeded(resp.data));
                // }, 2000);

                throw new Error('Oh noes! Unable to fetch tasks!');

            }).catch(err => {
                dispatch(fetchTasksFailed(err.message));
        })
    }

}

