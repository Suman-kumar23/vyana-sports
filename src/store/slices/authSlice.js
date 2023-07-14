import { createSlice } from "@reduxjs/toolkit";
import "../../config/firebase";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
    error: null,
    isLoggedIn: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
      state.user.pic = action.payload.pic;
      // state.user = action.payload;
      state.isLoggedIn = true;
    },
    removeUser: (state, action) => {
      state.isLoggedIn = false;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setUser, setError, removeUser } = authSlice.actions;

export const signIn = (email, password, name) => async (dispatch) => {
  const auth = getAuth();
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    const user = {
      name,
      email: response.user.email,
      pic: response.user.photoURL,
    };
    dispatch(setUser(user));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const signUp = (email, password, name) => async (dispatch) => {
  const auth = getAuth();
  try {
    // const response = await createUserWithEmailAndPassword(
    //   auth,
    //   email,
    //   password
    // );
    // const user = {
    //   name: name,
    //   email: response.user.email,
    //   pic: picUrl,
    // };
    // dispatch(setUser(user));
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = {
      name: name,
      email: response.user.email,
      pic: picUrl,
    };
    dispatch(setUser(user));
    console.log(response.user.email);
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const logOut = () => (dispatch) => {
  try {
    dispatch(removeUser());
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export default authSlice.reducer;
