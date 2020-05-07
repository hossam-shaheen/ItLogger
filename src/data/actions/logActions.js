import {
  GET_LOGS,
  ADD_LOGS,
  DELETE_LOGS,
  UPDATE_LOGS,
  CURRENT_LOGS,
  SET_LOADING,
  SEARCH_LOGS,
} from './types';

export const getLogs = () => {
  setLoading();
  return async (dispatch) => {
    const response = await fetch('/logs');
    const data = await response.json();
    dispatch({ type: GET_LOGS, payload: data });
  };
};

export const deleteLog = (id) => {
  return async (dispatch) => {
    const response = await fetch(`/logs/${id}`, {
      method: 'delete',
    });

    dispatch({ type: DELETE_LOGS, payload: id });
  };
};

export const addNewLog = (issue) => {
  setLoading();
  return async (dispatch) => {
    const response = await fetch('/logs', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(issue),
    });
    const data = await response.json();
    dispatch({ type: ADD_LOGS, payload: data });
  };
};

export const setCurrentLog = (currentLog) => {
  return { type: CURRENT_LOGS, payload: currentLog };
};

export const editLog = (currentLog) => {
  return async (dispatch) => {
    const response = await fetch(`/logs/${currentLog.id}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(currentLog),
    });
    const data = await response.json();
    dispatch({ type: UPDATE_LOGS, payload: currentLog });
  };
};

export const logSearch = (text) => {
  console.log(text);
  return async (dispatch) => {
    const response = await fetch(`/logs?q=${text}`);
    const data = await response.json();
    dispatch({ type: SEARCH_LOGS, payload: data });
  };
};

export const setLoading = () => {
  return { type: SET_LOADING, payload: true };
};
