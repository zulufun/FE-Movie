const types = {
  LOAD_MOVIE: "moive/load-moive",
  LOAD_MOVIE_SUCCESS: "moive/load-moive-success",
};

const action = {
  loadMovie: () => {
    return {
      type: types.LOAD_MOVIE,
    };
  },
  loadMOvieSuccess: (data: any) => {
    return {
      type: types.LOAD_MOVIE_SUCCESS,
      payload: { data },
    };
  },
};

const actions = {
  types,
  action,
};

export default actions;
export const MovieActions = action;
