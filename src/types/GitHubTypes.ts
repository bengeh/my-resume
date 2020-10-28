import { GitHub } from '../interfaces/GitHub';

export const GET_GIT_HUB_DATA = 'GET_GIT_HUB_DATA';

export interface GetGitHubStateType {
  gitHubData: GitHub[];
}

interface GetGitHubActionType {
  type: typeof GET_GIT_HUB_DATA;
  payload: GitHub[];
}
export type GitHubActionType = GetGitHubActionType;