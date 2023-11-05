
import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyAd144dM9DjVASxlLVQJB1Eb0RalTgYTW4",
//   authDomain: "car-client-9c5cd.firebaseapp.com",
//   projectId: "car-client-9c5cd",
//   storageBucket: "car-client-9c5cd.appspot.com",
//   messagingSenderId: "547709657274",
//   appId:"1:547709657274:web:d63ea8467afb476fe62283",
// };
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITEVITE_storageBucket_apiKey,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;