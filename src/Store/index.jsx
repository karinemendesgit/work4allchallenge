import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./login.ts";

const store = configureStore({
  reducer: { login: loginReducer }
});

export default store;