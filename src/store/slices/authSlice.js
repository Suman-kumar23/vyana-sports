import { createSlice } from "@reduxjs/toolkit";
import firebase from "../../config/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

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
      (state.user = null), (state.isLoggedIn = false);
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setUser, setError, removeUser } = authSlice.actions;

export const signIn = (email, password) => async (dispatch) => {
  const auth = getAuth();
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    const user = {
      name: response.user.displayName,
      email: response.user.email,
      pic: response.user.photoURL,
    };
    dispatch(setUser(user));
    console.log(response.user.displayName);
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
