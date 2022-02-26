interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const reducer = (state: RepositoriesState, action: any) => {
  switch (action.type) {
    case "search_repositores":
      return { loading: true, error: null, data: [] };

    case "search_repositores_success":
      return { loading: false, error: false, data: action.payload };

    case "search_repositores_error":
      return { loading: false, error: action.payload, data: [] };

    default:
      return state;
  }
};

export default reducer;
