import {
    GET_GIT_HUB_DATA,
    GetGitHubStateType,
    GitHubActionType
  } from '../types/GitHubTypes';

  
  const initialStateGetGitHubData: GetGitHubStateType = {
    gitHubData: [],
    isLoading: true,
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
              return langaugeMap
          })
          console.log("this the language map...")
          console.log(langaugeMap)
        return {
          ...state,
          isLoading: false,
          gitHubData: langaugeMap
        };
      default:
        return state;
    }
  };