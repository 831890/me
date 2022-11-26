import React from 'react';
import { Reset } from 'styled-reset'
import styled from 'styled-components';
import Header from './components/Header';

function App() {
  return (
    <>
    <Reset/>
      <div className="App">
        <Header style={{display:'flex'}}/>
      </div>
    </>
  );

}


export default App;
