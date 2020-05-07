import {
  GET_LOGS,
  ADD_LOGS,
  DELETE_LOGS,
  UPDATE_LOGS,
  CURRENT_LOGS,
  SEARCH_LOGS,
  SET_LOADING,
} from '../actions/types';
const logState = {
  logs: [],
  currentLog: null,
  loading: false,
  error: null,
};
export const logReducer = (state = logState, action) => {
  switch (action.type) {
    case ADD_LOGS:
      return {
        ...state,
        logs: [action.payload, ...state.logs],
        loading: false,
      };
    case GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false,
      };
    case DELETE_LOGS:
      return {
        ...state,
        logs: state.logs.filter((log) => log.id !== action.payload),
        currentLog: null,
        loading: false,
      };
    case UPDATE_LOGS:
      return {
        ...state,
        logs: state.logs.map((log) =>
          log.id === action.payload.id ? action.payload : log
        ),
        loading: false,
      };
    case CURRENT_LOGS:
      return {
        ...state,
        currentLog: action.payload,
      };

    case SEARCH_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false,
      };

    case SET_LOADING:
      return {
        ...state,
        logs: action.payload,
        loading: true,
      };
    default:
      return {
        ...state,
      };
  }
};
