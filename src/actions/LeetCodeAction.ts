import { GET_LEET_CODE_DATA, LeetCodeActionType } from '../types/LeetCodeTypes';
import { LeetCode } from '../interfaces/LeetCode';

export const getLeetCodeDataAction = (leetCodeData: LeetCode): LeetCodeActionType => {
  return {
    type: GET_LEET_CODE_DATA,
    payload: leetCodeData
  };
};