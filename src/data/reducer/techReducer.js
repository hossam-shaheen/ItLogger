import { GET_TECHS, ADD_TECHS, DELETE_TECHS } from '../actions/types';
const techState = {
  techs: [],
  error: null,
};
export const techReducer = (state = techState, action) => {
  switch (action.type) {
    case ADD_TECHS:
      return {
        ...state,
        techs: [...state.techs, action.payload],
      };
    case GET_TECHS:
      return {
        ...state,
        techs: action.payload,
      };
    case DELETE_TECHS:
      return {
        ...state,
        techs: state.techs.filter((tech) => tech.id !== action.payload),
      };
    default:
      return {
        ...state,
      };
  }
};
