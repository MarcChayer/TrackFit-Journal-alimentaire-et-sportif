export const REGISTER_INPUT_SUBMIT = 'REGISTER_INPUT_SUBMIT';
export const INPUT_CHANGE = 'INPUT_CHANGE';
export const LOGIN_INPUT_SUBMIT = 'LOGIN_INPUT_SUBMIT';
export const USER_IS_CONNECTED = 'USER_IS_CONNECTED';

export const registerInputSubmit = () => ({
  type: REGISTER_INPUT_SUBMIT,
});

export const inputChange = (payload) => ({
  type: INPUT_CHANGE,
  payload,
});

export const loginInputSubmit = () => ({
  type: LOGIN_INPUT_SUBMIT,
});

// A mettre à jour avec la réponse de l'action LOGIN_INPUT_SUBMIT
export const userIsConnected = () => ({
  type: USER_IS_CONNECTED,
});
