
import { uniqueId } from '../actions';

const mockTasks = [ {
    id: uniqueId(),
    title: 'Learn Redux',
    description: 'The store, actions, and reducers, oh my!', status: 'In Progress',
}, {
    id: uniqueId(),
    title: 'Peace on Earth',
    description: 'No big deal.', status: 'In Progress',
}, ];


export default function tasks(state = { tasks: mockTasks }, action) {
    switch (action.type) {
        case 'CREATE_TASK': {
            console.log(state.tasks);
            return { tasks: [...state.tasks, action.payload]}
        }
        case 'EDIT_TASK': {
            const tasks = state.tasks.map(t => {
                if(t.id === action.payload.id) {
                    return Object.assign({}, t, action.payload.params);
                }

                return t;
            });


            return { tasks };
        }
    }
    return state
}