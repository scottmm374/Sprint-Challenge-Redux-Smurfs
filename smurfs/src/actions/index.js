const ADD_SMURF = 'ADD_SMURF';
const GET_SMURF = 'GET_SMURF';
const FETCHING_SMURF = 'FETCHING_SMURF';
const SMURF_SUCCESS = 'SMURF_SUCCESS';
const SMURF_FAILED = 'SMURF_FAILED';




export function addSmurf ( name, age, height, id) {
  return {
    type: ADD_SMURF,
    payload: {
      name,
      age, 
      height,
      id,
    }
  }
}



export function getSmurf (){
  return(dispatch) => {
    dispatch({ type: GET_SMURF })
    axios.get(`http://localhost:3333`)
      .then((res) => {
        dispatch({ type: SMURF_SUCCESS, payload: res.data })
      })
      .catch((err) => {
        dispatch9({ type: SMURF_FAILED, payload: err.response.data})
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
