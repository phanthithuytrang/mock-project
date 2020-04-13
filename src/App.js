import React from 'react';
import Footer from "./components/Footer/Footer";
import './App.css';
import Header from './components/Header/Header';
import FormSignIn from './components/FormSignIn/FormSignIn';

function App() {
  return (
    <div className="App">
      <Header/>
      <Footer/>
      {/* <FormSignIn/> */}
    </div>
  );
}

export default App;
