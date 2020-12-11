import {
    GET_LEET_CODE_DATA,
    GetLeetCodeStateType,
    LeetCodeActionType
  } from '../types/LeetCodeTypes';
  
  const initialStateGetLeetCodeData: GetLeetCodeStateType = {
    leetCodeData: {
        numSolved: 0,
        easyQns: 0,
        medQns: 0,
        hardQns: 0
    }
  };
  
  export const getLeetCodeReducer = (
    state = initialStateGetLeetCodeData,
    action: LeetCodeActionType
  ): GetLeetCodeStateType => {
    switch (action.type) {
      case GET_LEET_CODE_DATA:
        return {
          ...state,
          leetCodeData: action.payload
        };
      default:
        return state;
    }
  };