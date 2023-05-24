export const login = (data: Object) => ({
  type: "LOGIN",
  payload: data,
});

export const logout = () => ({
  type: "LOGOUT",
});
