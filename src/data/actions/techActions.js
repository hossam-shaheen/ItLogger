import { GET_TECHS, ADD_TECHS, DELETE_TECHS } from './types';

export const getTechs = () => {
  return async (dispatch) => {
    const response = await fetch('/techs');
    const data = await response.json();
    dispatch({ type: GET_TECHS, payload: data });
  };
};

export const deleteTech = (id) => {
  return async (dispatch) => {
    const response = await fetch(`/techs/${id}`, {
      method: 'delete',
    });

    dispatch({ type: DELETE_TECHS, payload: id });
  };
};

export const addNewTech = (tech) => {
  return async (dispatch) => {
    const response = await fetch('/techs', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tech),
    });
    const data = await response.json();
    dispatch({ type: ADD_TECHS, payload: data });
  };
};
