import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News';

export class App extends Component {
  render() {
    return (
      <div>
        <div style={{height: "80px"}}>
           <Navbar/>     
        </div>
       

        <News/>
      </div>
    )
  }
}

export default App