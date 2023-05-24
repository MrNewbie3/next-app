const initialState = {
  status: Boolean,
  token: String,
  data: Object,
};

const reducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case "LOGIN":
      console.log(state);
      return { ...state, status: true, token: payload.data.token, data: payload.data.user };
    case "LOGOUT":
      return { ...state, status: false, token: null, data: null };

    default:
      return state;
  }
};

export default reducer;
