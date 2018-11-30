import * as AppActions from './App.actions';

const initialState = {
  isFetching: false,
  data: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AppActions.REQUEST_DATA:
      return {
        ...state,
        isFetching: true
      };
    case AppActions.RECEIVED_DATA:
     return {
       ...state,
       isFetching: false,
       data: action.data
     };
    default:
      return state;
  }
};
