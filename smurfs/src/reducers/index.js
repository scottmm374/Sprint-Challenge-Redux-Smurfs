import {
  GET_SMURF,
  SMURF_SUCCESS,
  SMURF_FAILED,
  ADD_SMURF,
  NEW_SMURF_SUCCESS,
  NEW_SMURF_FAILED
} from '../actions/index';




const initialState = {
  fetchingSmurfs: false,
  addingSmurf: false,
  errorMessage: null,
  smurfs: []
}


export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_SMURF: {
      return {
        ...state,
        fetchingSmurfs: true,
      }
    }

    case SMURF_SUCCESS: {
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false,
        errorMessage: null,
      }
    }

    case SMURF_FAILED: {
      return {
        ...state,
        fetchingSmurfs: false,
        errorMessage: action.payload.message,
      }
    }

    case ADD_SMURF: {
      return {
        ...state,
        addingSmurf: true,

      }
    }

    case NEW_SMURF_SUCCESS: {
      return {
        ...state,
        smurfs: action.payload,
        addingSmurf: false,

      }
    }

    case NEW_SMURF_FAILED: {
      return {
        ...state,
        fetchingSmurfs: false,
        addingSmurf: false,
        errorMessage: action.payload,
        

      }
    }

    default:
      return state
  }

}


const rootReducer = smurfReducer;
export default rootReducer;



//  Your initial/default state for this project could *Although does not have to* look a lot like this
//  {
//    smurfs: [],
//    fetchingSmurfs: false
//    addingSmurf: false
//    updatingSmurf: false
//    deletingSmurf: false
//    error: null
//  }
// */

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer.
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
