import { createSlice } from "@reduxjs/toolkit";
import "../../config/firebase";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";

// ('===================================================================');
//                              AUTH SLICE
// ('====================================================================');

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

// ('===================================================================');
//                              SIGNUP
// ('====================================================================');

export const signUp = (email, password, name, img) => async (dispatch) => {
  const auth = getAuth();
  const db = getFirestore();

  let apiUrl = "https://api.cloudinary.com/v1_1/dvvkzczgx/image/upload";
  let data = {
    file: img,
    upload_preset: "chat-app",
  };
  let photoURL;

  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    // -----------------------------------------------------------
    await fetch(apiUrl, {
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
    })
      .then(async (r) => {
        let data = await r.json();
        photoURL = data.secure_url;
        return data.secure_url;
      })
      .catch((err) => console.log(err));
    // -----------------------------------------------------------

    const user = {
      id: response.user.uid,
      name: name,
      email: email,
      pic: photoURL,
      isSubscribed: false,
      subscriptionType: 0,
    };
    // -----------------------------------------------------------

    await setDoc(doc(db, "/users", response.user.uid), user)
      .then(() => {
        console.log("New User Created !");
      })
      .catch((err) => {
        console.log(err);
      });

    await auth.signOut();
    // -----------------------------------------------------------
  } catch (error) {
    dispatch(setError(error.message));
  }
};

// ('===================================================================');
//                              LOGOUT
// ('====================================================================');

export const logOut = () => (dispatch) => {
  try {
    dispatch(removeUser());
    AsyncStorage.removeItem("user");
  } catch (error) {
    dispatch(setError(error.message));
    console.log(error);
  }
};

export default authSlice.reducer;
