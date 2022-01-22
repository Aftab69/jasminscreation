import React from 'react';
import { Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import Store from './components/Store';
import Upload from './components/Upload';
import Signin from './components/Signin';
import Signup from './components/Signup';
import "../src/App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Route exact path="/"><Home /></Route>
      <Route path="/cart"><Cart /></Route>
      <Route path="/store"><Store /></Route>
      <Route path="/upload"><Upload /></Route>
      <Route path="/signin"><Signin /></Route>
      <Route path="/signup"><Signup /></Route>
    </>
  )
}

export default App;
