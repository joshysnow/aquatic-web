import fetch from 'cross-fetch';

export const REQUEST_DATA = 'app/request_data';
const requestData = () => ({
  type: REQUEST_DATA
});

export const RECEIVED_DATA = 'app/received_data';
const receivedData = (data) => {
  return {
    type: RECEIVED_DATA,
    data: data === undefined ? [] : data
  };
};

export function fetchWaterTests() {
  return dispatch => {
    dispatch(requestData);

    return fetch(`http://localhost:8000/water`)
      .then(
        response => response.json(),
        error => console.log(error)
      )
      .then(json => dispatch(receivedData(json)));
  };
}
