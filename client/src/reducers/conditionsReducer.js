import { GET_CONDITIONS, CONDITIONS_SUCCESS, CONDITIONS_FAILED } from 'src/constants/conditionConstants';

const conditionsReducer = (state = {
    conditionsData: {},
}, action) => {
  switch (action.type) {
    case GET_CONDITIONS:
    {
      return {
        ...state,
      };
    };
    case CONDITIONS_SUCCESS:
    {
      return {
        ...state,
        conditionsData: action.payload
      };
    };
    case CONDITIONS_FAILED:
    {
      return {
        ...state,
        conditionsData: undefined
      };
    };       
    default:
      return state;
  }
};

export default conditionsReducer;
