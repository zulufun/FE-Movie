import actions from "./actions";

const init = {
  movies: [],
};

const MovieReducer = (state: any = init, action: any) => {
  switch (action.type) {
    case actions.types.LOAD_MOVIE:
      return {
        ...state,
      };
    case actions.types.LOAD_MOVIE_SUCCESS:
      return {
        ...state,
        ...{
          movies: action.payload.data,
        },
      };
    default:
      return state;
  }
};
export default MovieReducer;
