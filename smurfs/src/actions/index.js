import axios from 'axios';

export const ADD_SMURF = 'ADD_SMURF';
export const NEW_SMURF_SUCCESS = 'NEW_SMURF_SUCCESS';
export const NEW_SMURF_FAILED = 'NEW_SMURF_FAILED';
export const GET_SMURF = 'GET_SMURF';
export const SMURF_SUCCESS = 'SMURF_SUCCESS';
export const SMURF_FAILED = 'SMURF_FAILED';




export function getSmurf() {

  return (dispatch) => {
    dispatch({ type: GET_SMURF })
    axios.get('http://localhost:3333/smurfs')
      .then((res) => {
        console.log("getSmurf", res)
        dispatch({ type: SMURF_SUCCESS, payload: res.data })
      })
      .catch((err) => {
        dispatch({ type: SMURF_FAILED, payload: err.response.data })
      })
  }
}


export function addSmurf(smurf) {
  return (dispatch) => {
    dispatch({ type: ADD_SMURF });
    axios.post('http://localhost:3333/smurfs/', smurf)
          .then(({ data }) => {
      dispatch({ type: NEW_SMURF_SUCCESS, payload: data });
    })
      .catch(err => {
        dispatch({ type: NEW_SMURF_FAILED, payload: err })
      })
  }

}








/*
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
