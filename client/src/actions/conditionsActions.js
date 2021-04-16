import {
    GET_CONDITIONS, CONDITIONS_SUCCESS, CONDITIONS_FAILED
} from 'src/constants/conditionConstants';

const getConditions = (value) => {
    return {
        type: GET_CONDITIONS,
        payload: value,
    };
};

const getConditionsSuccess = (data) => {
    return {
        type: CONDITIONS_SUCCESS,
        payload: data,
    };
};
const getConditionsFailed = () => {
    return {
        type: CONDITIONS_FAILED,
    };
};

export {
    getConditions, getConditionsSuccess, getConditionsFailed
};
