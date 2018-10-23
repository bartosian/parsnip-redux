


export default function tasks(state = { tasks: [] }, action) {
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