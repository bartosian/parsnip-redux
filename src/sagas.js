import { fork } from 'redux-saga/effects';

export default function* rootSaga() {
    console.log('Root saga reporting for duty!');
}

function* watchFetchTasks() {
    console.log('watching!');
}

function* watchSomethingElse() {
    console.log('watching something else!');
}