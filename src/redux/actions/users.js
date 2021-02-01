import * as type from '../types';

export function getusers(users) {
  return { 
    type: type.GET_USERS,
    payload: users,
  }
}