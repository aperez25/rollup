import axios from 'axios';

/* ---- ACTIONS ---- */
const CREATE = 'CREATE_USER';
const REMOVE = 'REMOVE_USER';

/* ---- ACTION CREATORS ---- */
const createUser = user => ({ type: CREATE, user })
const removeUser = () => ({ type: REMOVE })

/* ---- REDUCER ---- */

export default function reducer(state = {}, action) {
  switch (action.type) {
    case CREATE:
      return action.user;
    case REMOVE:
      return {};
    default:
      return state;
  }
}

/* ---- DISPATCHERS ---- */
export const login = () => dispatch =>
  axios.post('/auth')
  .then(res => dispatch(createUser(res.data)))
  .catch(err => dispatch(createUser({ err })));

export const logout = () => dispatch =>
  axios.post('/logout')
  .then(res => dispatch(removeUser()))
  .catch(err => console.log(err));
