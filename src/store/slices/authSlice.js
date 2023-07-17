import { createSlice } from "@reduxjs/toolkit";
import "../../config/firebase";

import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getFirestore,
  setDoc,
} from "firebase/firestore";

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
  const db = getFirestore();

  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    const docRef = doc(db, "users", response.user.uid);
    const docSnap = await getDoc(docRef);

    const userData = docSnap.data();

    const user = {
      id: userData.id,
      name: userData.name,
      email: userData.email,
      pic: userData.pic,
      isSubscribed: userData.isSubscribed,
    };
    console.log(user);
    dispatch(setUser(user));
  } catch (error) {
    console.log(error.message);
    dispatch(setError(error.message));
  }
};

export const signUp = (email, password, name, img) => async (dispatch) => {
  const auth = getAuth();
  const db = getFirestore();
  const colRef = collection(db, "users");

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
        // console.log(data.secure_url);
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
    };
    // -----------------------------------------------------------

    await setDoc(doc(db, "/users", response.user.uid), user)
      .then(() => {
        console.log("New User Created !");
      })
      .catch((err) => {
        console.log(err);
      });
    auth.signOut();
    // -----------------------------------------------------------
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
