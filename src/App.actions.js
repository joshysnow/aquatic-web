import fetch from 'cross-fetch';

export const REQUEST_DATA = 'app/request_data';
const requestData = () => ({
  type: REQUEST_DATA
});

export const RECEIVED_DATA = 'app/received_data';
const receivedData = (data) => ({
  type: RECEIVED_DATA,
  data
});

export function fetchWaterTests() {
  return dispatch => {
    dispatch(requestData);

    return fetch(`http://localhost:8000/water`)
      .then(
        response => response.json(),
        error => console.log(`Error fetching water tests: ${error}`)
      )
      .then(json => dispatch(receivedData(json)));
  };
}
