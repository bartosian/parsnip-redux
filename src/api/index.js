import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001';
const client = axios.create({
    baseURL: API_BASE_URL
});

export function fetchTasks() {
    return client.get('/tasks');
}