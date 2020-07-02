import React, { Component } from 'react';
import './App.css';
import Fileupload from './Fileupload/Fileupload'
import Imagegallery from './Imagegallery/Imagegallery'
export const APIURL = "http://localhost:8888";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Fileupload/>
        <Imagegallery/>
      </div>
    )
  }
}

export default App;
