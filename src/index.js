import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { getFirestore } from 'firebase/firestore';
//Aca pegue los datos de firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfV-Rsf9IVlDX04fABqUFb7zodk0iDQhg",
  authDomain: "coderhouse-react-a5bd1.firebaseapp.com",
  projectId: "coderhouse-react-a5bd1",
  storageBucket: "coderhouse-react-a5bd1.appspot.com",
  messagingSenderId: "244517980325",
  appId: "1:244517980325:web:bbc901dfe213d0d952a54c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
