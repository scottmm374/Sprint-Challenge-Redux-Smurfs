import axios from 'axios';

const ADD_SMURF = 'ADD_SMURF';
const GET_SMURF = 'GET_SMURF';
const SMURF_SUCCESS = 'SMURF_SUCCESS';
const SMURF_FAILED = 'SMURF_FAILED';




export const getSmurf = () => {
  
  return(dispatch) => {
    dispatch({ type: GET_SMURF })
    axios.get('http://localhost:3333/')
      .then((res) => {
        console.log("getSmurf", res)
        dispatch({ type: SMURF_SUCCESS, payload: res.data })
      })
      .catch((err) => {
        dispatch({ type: SMURF_FAILED, payload: err.response.data})
      })
  }
}


export const addSmurf = smurf => {
  const newSmurf = 
    axios.post('http://localhost:3333/smurfs/', smurf);
    return dispatch => {
      dispatch({ type: ADD_SMURF });
      newSmurf.then(({data}) => {
        dispatch({ type: ADD_SMURF, payload: data });
      })
      .catch(err => {
        dispatch({ type: SMURF_FAILED, payload: err})
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
