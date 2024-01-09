
import React from "react";

import reactDOM from "react-dom/client";
import { initializeApp} from "firebase/app";

import App from './App';

const el = document.getElementById("root");

const root = reactDOM.createRoot(el);



const firebaseConfig = {
  apiKey: "AIzaSyCiW3O6fJLUABDOYmujqgXV5YOxQxeeODY",
  authDomain: "jrinformatica-cc99d.firebaseapp.com",
  projectId: "jrinformatica-cc99d",
  storageBucket: "jrinformatica-cc99d.appspot.com",
  messagingSenderId: "518198797424",
  appId: "1:518198797424:web:966f2dae669be23e2640b5"
};

// Initialize Firebase
 initializeApp(firebaseConfig);

root.render(< App/>)
