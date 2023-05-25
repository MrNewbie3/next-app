const initialState = {
  status: Boolean,
  token: String,
  data: null,
};

const reducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case "LOGIN":
      return { ...state, status: payload.success, token: payload.data.token, data: payload.data.user };
    case "LOGOUT":
      return { ...state, status: false, token: null, data: null };

    default:
      return state;
  }
};

export default reducer;
