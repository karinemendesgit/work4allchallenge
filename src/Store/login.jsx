import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email, password
}

const loginSlice = createSlice ({
  name: 'login',
  initialState,
  reducers: {
    login (state, action) {
      const { email, password } = action.payload;
      if (email.length > 0 && password.length > 0) {
        const userHaveAccount = state.users.find((user) => user.email === email);
        console.log(userHaveAccount)
        if (userHaveAccount && userHaveAccount.password === password) {
          state.isAuthenticated = true;
          state.userAuthenticated = userHaveAccount;
          toast.success('Login made successfully!');
        }
        if (userHaveAccount && userHaveAccount.password !== password) {
          toast.error("Senha incorreta!")
        }
        if (!userHaveAccount) {
          toast.warning("Email wasn't found in our registers!")
        }
      }
    }
  }
})

export default loginSlice.reducer;
export const loginActions = loginSlice.actions;