import { fork, take } from 'redux-saga/effects';

export default function* rootSaga() {
    yield fork(watchFetchTasks);
    yield  fork(watchSomethingElse);

}

function* watchFetchTasks() {
    while (true) {
        yield take('FETCH_TASKS_STARTED');
        console.log('started!');
    }
}

function* watchSomethingElse() {
    console.log('watching something else!');
}