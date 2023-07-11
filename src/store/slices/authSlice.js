import { createSlice } from "@reduxjs/toolkit";
import firebase from "../../config/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setUser, setError } = authSlice.actions;

export const signIn = (email, password) => async (dispatch) => {
  const auth = getAuth();
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);

    dispatch(setUser(response.user));
    // console.log(user);
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const logOut = () => (dispatch) => {
  try {
    dispatch(setUser(null));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export default authSlice.reducer;
