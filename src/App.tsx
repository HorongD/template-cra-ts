import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

const repository = 'template-cra-ts';

function App() {
  return (
    <BrowserRouter basename={repository}>
      <Route exact path="/" component={() => <>Home</>} />
      <Route path="/login" component={() => <>Login</>} />
    </BrowserRouter>
  );
}

export default App;
