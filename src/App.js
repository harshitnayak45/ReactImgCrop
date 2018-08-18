import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import ReactCrop from 'react-image-crop';
import ImgDropAndCrop from './commpnents/ImgDropAndCrop'
import './App.css';


class App extends Component {
  render () {
    return (
      <div className='App'>
       <header className="App-header">
         <h1 className="App-title">Image Drop And Crop</h1>
       </header>
        <ImgDropAndCrop />
      </div>
    )
  }
}

export default App