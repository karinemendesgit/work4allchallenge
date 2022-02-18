import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

interface User {
  email: string,
  password: string
}

type Auth = {
  users: User[],
  isAuthenticated: boolean
}

const initialState: Auth = {
  users: [],
  isAuthenticated: false
}

const loginSlice = createSlice ({
  name: 'login',
  initialState,
  reducers: {
    login (state, action) {
      const { email, password } = action.payload;
      if (email.length > 0 && password.length > 0) {
        const userHaveAccount = state.users.find((user: User) => user.email === email);
        console.log(userHaveAccount)
        if (userHaveAccount && userHaveAccount.password === password) {
          state.isAuthenticated = true;
          toast.success('Login made successfully!');
        }
        if (userHaveAccount && userHaveAccount.password !== password) {
          toast.error("Password is incorrect!")
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