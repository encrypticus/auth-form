export const USER_NAME = 'USER_NAME';
export const USER_EMAIL = 'USER_EMAIL';
export const USER_PHONE = 'USER_PHONE';

export const setUserName = (name) => ({
  type: USER_NAME,
  payload: name
});

export const setUserEmail = (email) => ({
  type: USER_EMAIL,
  payload: email
});

export const setUserPhone = (phone) => ({
  type: USER_PHONE,
  payload: phone
});
