// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkLT5kl4dw9QzjsB_-pOCUqNG-veBLQlc",
  authDomain: "mesfamily-e665f.firebaseapp.com",
  projectId: "mesfamily-e665f",
  storageBucket: "mesfamily-e665f.appspot.com",
  messagingSenderId: "526498223524",
  appId: "1:526498223524:web:809697d0c7b2b59be95d31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth