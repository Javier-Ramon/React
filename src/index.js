
import React from "react";

import reactDOM from "react-dom/client";
import { initializeApp} from "firebase/app";

import App from './App';

const el = document.getElementById("root");

const root = reactDOM.createRoot(el);



root.render(< App/>)
