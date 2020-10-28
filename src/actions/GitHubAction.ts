import { GET_GIT_HUB_DATA, GitHubActionType } from '../types/GitHubTypes';
import { GitHub } from '../interfaces/GitHub';

export const getGitHubDataAction = (gitHubData: GitHub[]): GitHubActionType => {
  return {
    type: GET_GIT_HUB_DATA,
    payload: gitHubData
  };
};