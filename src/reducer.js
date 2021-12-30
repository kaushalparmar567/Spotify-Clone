export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    
    // // remve after finished developing
    //token: "BQD1OfofXffWi_zVBw2BV3-1O-ySr5hBHaDxZlt6cAv1iJVAkDEZ1Ka7qOHlAcQcK3anzA-o6ICaejfbzqTISlR9cU9XeIrTk2P37_BatxC09x_Aekc0NNLgRMFGFQJlqElc42n_pz3ToAtFVE8O7yUuKAafNCKi9SooHfzaNW0H4ufXt0v1fzmXkRwceNnZTgHYDQbTVDSgwrXZDGP9r7LBthq0-UgY2UkAwYO9FzZF1IxSyKNM9bSlLHxFCmAygOXPpmFflQNhgji7P-yPE8Pihf_PDYJbXUAt4gm7JrTv",
}

const reducer = (state, action) => {
 console.log(action);
 
switch(action.type) {
  case 'SET_USER' :
      return {
          ...state,
          user: action.user,
      };
      case 'SET_TOKEN' :
        return {
            ...state,
            token: action.token,
        };
      case 'SET_PLAYLISTS' :
        return {
         ...state,
         playlists: action.playlists,
        };
      
      case 'SET_DISCOVER_WEEKLY' :
        return {
          ...state,
          discover_weekly : action.discover_weekly,
        }  

   default:
       return state;   
}

}

export default reducer;