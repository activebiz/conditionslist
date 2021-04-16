import { combineReducers } from 'redux';
import conditions from 'src/reducers/conditionsReducer';

const rootReducer = combineReducers({
    conditions
});

export default rootReducer;
