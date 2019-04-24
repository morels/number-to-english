import React, { Component } from 'react';
import Converter from "./converter"
import '../App.css';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { composing: true, calling: false };
  // }
  
  render() {
    // const { calling, dialing} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={{"https://images-na.ssl-images-amazon.com/images/I/611BaikODeL._SY741_.jpg"}} className="App-logo" alt="logo" /> */}
          <h1>
            Number to English Converter
          </h1>
        </header>
        <Converter />
        {/* {dialing && (<Phone></Phone>})
      {calling && (<PhoneCalling></PhoneCalling>})
       */}
      </div>
    );
  }
}

export default App;
