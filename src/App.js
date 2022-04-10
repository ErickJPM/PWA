import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './navigation/navigation';
import firebase from './firebase';
function App() {
  
  return (
    <Navigation/>
  );
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js')
      .then(function() {
          console.log('ServiceWorker registered!');
      })
      .catch(function(err) {
          console.log('ServiceWorker failed :(', err);
      });
  });
}


export default App;
