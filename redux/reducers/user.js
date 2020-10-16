import { USER_NAME, USER_EMAIL, USER_PHONE } from '../actions/user';

const initialState = {
  name: 'Аноним',
  email: 'Укажите E-mail',
  phone: 'Укажите номер телефона'
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_NAME: {
      return {
        ...state,
        name: action.payload
      };
    }

    case USER_EMAIL: {
      return {
        ...state,
        email: action.payload
      };
    }

    case USER_PHONE: {
      return {
        ...state,
        phone: action.payload
      };
    }
  }

  return state;
};

export default userReducer;
