import { combineReducers } from 'redux';
import { getLeetCodeReducer } from './LeetCodeReducer';
import { getGitHubReducer } from './GitHubReducer';

const rootReducer = combineReducers({
  leetCodeData: getLeetCodeReducer,
  gitHubData: getGitHubReducer
});

export default rootReducer;