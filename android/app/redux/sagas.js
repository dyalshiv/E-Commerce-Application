// import {  all } from "redux-saga/effects"
// import { workerGetError } from "./saga/errorSaga"
// import { watcherGetProducts, watcherGetProductsList } from "./saga/productSaga"


// //1 worker saga
// export function* loadMenuQWorker() {

// }
// //2 watcher saga
// export function* watchLoadMenu() {

// }
// //3 root saga
// //single entry point to start all sagas
// export default function* rootSaga() {
//   yield all([
//     workerGetError(),
//     watcherGetProducts(),
//     watcherGetProductsList()
//   ])
// }

import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_POSTS_REQUEST, fetchPostsSuccess, fetchPostsFailure } from './actions';

// Fetch API Call
const fetchData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
};

// Worker Saga
function* fetchPostsSaga() {
  try {
    const posts = yield call(fetchData); // Call fetch API
    console.log('posts--->',posts);
    
    yield put(fetchPostsSuccess(posts)); // Dispatch success action
  } catch (error) {
    yield put(fetchPostsFailure(error.message)); // Dispatch failure action
  }
}

// Watcher Saga
function* watchFetchPosts() {
  yield takeEvery(FETCH_POSTS_REQUEST, fetchPostsSaga);
}

// Root Saga
export default function* rootSaga() {
  yield watchFetchPosts();
}
