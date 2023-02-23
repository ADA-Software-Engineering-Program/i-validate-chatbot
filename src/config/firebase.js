// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxv-6wcrtpm9o1BHzmoOGONIgMH4l9hwY",
  authDomain: "i-validate.firebaseapp.com",
  projectId: "i-validate",
  storageBucket: "i-validate.appspot.com",
  messagingSenderId: "586358098698",
  appId: "1:586358098698:web:2df0fabc854adb736b88f3",
  measurementId: "G-4SFHZG6GL9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { provider };

export default auth;