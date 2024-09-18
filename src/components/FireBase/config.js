// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDO-V2STn0h7kXe6PUi4n9ahbc02IT_4lE",
  authDomain: "chat-app-e750d.firebaseapp.com",
  databaseURL: "https://chat-app-e750d-default-rtdb.firebaseio.com",
  projectId: "chat-app-e750d",
  storageBucket: "chat-app-e750d.appspot.com",
  messagingSenderId: "154020073815",
  appId: "1:154020073815:web:bcd87210303c6889e22e12",
  measurementId: "G-6NM1TVPKNX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider()
export { auth, provider };

