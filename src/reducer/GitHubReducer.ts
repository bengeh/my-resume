import {
    GET_GIT_HUB_DATA,
    GetGitHubStateType,
    GitHubActionType
  } from '../types/GitHubTypes';

  
  const initialStateGetGitHubData: GetGitHubStateType = {
    gitHubData: []
  };
  
  export const getGitHubReducer = (
    state = initialStateGetGitHubData,
    action: GitHubActionType
  ): GetGitHubStateType => {
    switch (action.type) {
      case GET_GIT_HUB_DATA:
          let langaugeMap: any = {}
          action.payload.map((k: any) => {
              if(k.language){
                if (langaugeMap[k.language]){
                    langaugeMap[k.language] +=1
                } else{
                    langaugeMap[k.language] = 1
                }
              }
          })
          console.log("this the language map...")
          console.log(langaugeMap)
        return {
          ...state,
          gitHubData: langaugeMap
        };
      default:
        return state;
    }
  };