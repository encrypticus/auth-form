import { FORM_IS_SHOWN } from '../actions/auth-form';

const initialState = {
  formIsShown: false,
};

const authFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORM_IS_SHOWN: {
      return {
        ...state,
        formIsShown: action.payload,
      }
    }
  }

  return state;
};

export default authFormReducer;
