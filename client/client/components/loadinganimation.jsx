// This file has been edited following tutorial here:
// https://www.youtube.com/watch?v=Ke90Tje7VS0
import React, { Component } from "react";
import "../spinner.css";

class LoadingAnimation extends Component {
  
  render() {
    return (
      <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
    );
  }
}

export default LoadingAnimation;
