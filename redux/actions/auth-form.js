export const FORM_IS_SHOWN = 'FORM_IS_SHOWN';

export const showForm = (show) => ({
  type: FORM_IS_SHOWN,
  payload: show
});
