import { USER_REQUEST,USER_FAILURE,USER_SUCCESS } from '../Actions/user_actions'

const initialState = {
  isFetching : false,
  user: {},
  request : ''
};

function userReducer(state = initialState , action) {
  switch (action.type) {
    case USER_REQUEST:
      return Object.assign({}, state, {
        isFetching : true,
        user : {},
        request : 'Loading'
      })
    case USER_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        user :{},
        request : 'Failed'
      })
    case USER_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        user: action.payload,
        request : 'success'
      })
    default:
      return state
  }
}



export default userReducer;