export const REGISTER_INPUT_SUBMIT = 'REGISTER_INPUT_SUBMIT';
export const REGISTER_INPUT_CHANGE = 'REGISTER_INPUT_CHANGE';

export const registerInputSubmit = () => ({
  type: REGISTER_INPUT_SUBMIT,
});

export const registerInputChange = (payload) => ({
  type: REGISTER_INPUT_CHANGE,
  payload,
});
