import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { GET_USERS } from '../types';

const apiUrl = `https://jsonplaceholder.typicode.com/users`;

 function getApi() {
  return fetch(apiUrl, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',

      }
  }).then(response => response.json())
    .catch((error) => {throw error})
}

 function* fetchUsers(action) {
    console.log('hri')
   try {
      const users = yield call(getApi);
      yield put({type: 'GET_USERS_SUCCESS', users: users});
   } catch (e) {
      yield put({type: 'GET_USERS_FAILED', message: e.message});
   }
}

export default function* userSaga() {
    console.log('redux saga is running');
    yield takeLatest(GET_USERS, fetchUsers);
}

