import { getGitHubDataAction } from '../actions/GitHubAction';
import { Dispatch } from 'redux';
import { GitHubActionType } from '../types/GitHubTypes';


export const getGitHubData = () => {
  return function (dispatch: Dispatch<GitHubActionType>) {
    //   console.log(data)
    //   dispatch(getGitHubDataAction(data))
    // return data;
    const POST_URL = 'https://api.github.com/users/bengeh/repos ';
    fetch(POST_URL, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => {
        console.log("This is the data....")
        console.log(data)
        dispatch(getGitHubDataAction(data));
        return data;
      });
  };
};