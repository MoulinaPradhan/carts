import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyByktdtZPflaBa2xV54aKyMskvgVo4wE1I",
  authDomain: "cart-31c4a.firebaseapp.com",
  databaseURL: "https://cart-31c4a.firebaseio.com",
  projectId: "cart-31c4a",
  storageBucket: "cart-31c4a.appspot.com",
  messagingSenderId: "703108008880",
  appId: "1:703108008880:web:24682ffe12e83238d8a475"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render(<App />,
  document.getElementById('root')
);

