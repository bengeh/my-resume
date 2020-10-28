import { LeetCode } from '../interfaces/LeetCode';

export const GET_LEET_CODE_DATA = 'GET_LEET_CODE_DATA';

export interface GetLeetCodeStateType {
  leetCodeData: LeetCode;
}

interface GetLeetCodeActionType {
  type: typeof GET_LEET_CODE_DATA;
  payload: LeetCode;
}
export type LeetCodeActionType = GetLeetCodeActionType;