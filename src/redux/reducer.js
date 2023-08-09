import { SUBMIT_FORM } from "./action";

const initialState = {
    formData: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_FORM:
      return {
      ...state,
      formData: action.payload,
      };
      default:
        return state;
    }
};
 export default reducer;
