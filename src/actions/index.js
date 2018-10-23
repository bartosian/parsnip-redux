import * as api from "../api";


export function createTask({ title, description }) {  return {
    type: 'CREATE_TASK',
    payload: {
        id: uniqueId(), title,
    description,
    status: 'Unstarted',
}, };
}

export function editTask( id, params = {} ) {  return {
    type: 'EDIT_TASK',
    payload: {
        id: id,
        params
    }, };
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
        api.fetchTasks()
            .then(resp => {
                dispatch(fetchTasksSucceeded(resp.data));
            })
    }

}

