export const SUBMIT_FORM = "SUBMIT_FORM";

export const submitForm = (data) => {
  return {
    type: SUBMIT_FORM,
    payload: data
  };
};
