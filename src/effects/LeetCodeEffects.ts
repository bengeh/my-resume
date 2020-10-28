import { getLeetCodeDataAction } from '../actions/LeetCodeAction';
import { Dispatch } from 'redux';
import { LeetCodeActionType } from '../types/LeetCodeTypes';
import data from '../data/leetCode.json'

export const getLeetCodeData = () => {
  return function (dispatch: Dispatch<LeetCodeActionType>) {
      console.log(data)
      dispatch(getLeetCodeDataAction(data))
    return data;
    // const POST_URL = 'https://leetcode.com/api/problems/algorithms/';
    // fetch(POST_URL, {
    //   method: 'GET'
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log("This is the data....")
    //     console.log(data)
    //     dispatch(getLeetCodeDataAction(data));
    //     return data;
    //   });
  };
};