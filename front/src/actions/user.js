export const REGISTER_INPUT_SUBMIT = 'REGISTER_INPUT_SUBMIT';
export const INPUT_CHANGE = 'INPUT_CHANGE';
export const LOGIN_INPUT_SUBMIT = 'LOGIN_INPUT_SUBMIT';
export const USER_IS_CONNECTED = 'USER_IS_CONNECTED';
export const USER_IS_SUBSCRIBED = 'USER_IS_SUBSCRIBED';
export const LOGOUT_HANDLER = 'LOGOUT_HANDLER';

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
export const userIsConnected = (session) => ({
  type: USER_IS_CONNECTED,
  session,
});

// A mettre à jour avec la réponse de l'action REGISTER_INPUT_SUBMIT
export const userIsSubscribed = (session) => ({
  type: USER_IS_SUBSCRIBED,
  session,
});

export const logoutHandler = () => ({
  type: LOGOUT_HANDLER,
});
