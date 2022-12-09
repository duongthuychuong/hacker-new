import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true };
    case SET_STORIES:
      const { hits, nbPages } = action.payload;
      return { ...state, isLoading: false, hits, nbPages };
    case REMOVE_STORY:
      const newHits = state.hits.filter(
        (story) => story.objectID !== action.payload
      );
      return { ...state, hits: newHits };
    case HANDLE_SEARCH:
      return { ...state, query: action.payload, page: 0 };
    default:
      throw new Error("Invalid action type: " + action.type);
  }
};
export default reducer;
