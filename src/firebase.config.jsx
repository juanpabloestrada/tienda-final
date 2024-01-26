// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfxu-HeqCu1iTmJDGGdtUAyjobZjMt0kg",
  authDomain: "tienda-proyecto-entrega.firebaseapp.com",
  projectId: "tienda-proyecto-entrega",
  storageBucket: "tienda-proyecto-entrega.appspot.com",
  messagingSenderId: "96706177034",
  appId: "1:96706177034:web:91ff5824d79a7c720f17f3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);