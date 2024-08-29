// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId
};
// const firebaseConfig = {
//   apiKey: "AIzaSyCs7lc1ogmCnVBlliDbr63SpmhBC6l5I6M",
//   authDomain: "voyagevista-ec20a.firebaseapp.com",
//   projectId: "voyagevista-ec20a",
//   storageBucket: "voyagevista-ec20a.appspot.com",
//   messagingSenderId: "924865063353",
//   appId: "1:924865063353:web:6a1b2f3b3d24bb5b6fae68"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;