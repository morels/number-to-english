// This file has been edited following tutorial here:
// https://www.youtube.com/watch?v=Ke90Tje7VS0
import React, { Component } from "react";
import axios from "axios";
import LoadingAnimation from "./loadinganimation";

class Converter extends Component {
  constructor(props) {
    super(props);
    this.state = { number: "", loading: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ number: e.target.value });
  }

  handleSubmit(event) {
    this.setState({ loading: true });

    axios
      .get(`http://localhost:3001/apis/digitToWords/${this.state.number}`)
      .then(response => {
        console.log("response", response);
        this.setState({
          number: response.data.number
        });
      })
      .finally(() => this.setState({ loading: false }));

    event.preventDefault();
  }

  render() {
    const { loading, result } = this.state;
    return (
      <div class="col-md-6 offset-md-3">
        <form onSubmit={event => this.handleSubmit(event)}>
          <div class="form-group">
            <label for="numberInDigits">
              Type a number to transform in english
            </label>
            <input
              type="text"
              class="form-control"
              id="numberInDigits"
              placeholder="123'456.789"
              value={this.state.number}
              onChange={this.handleChange}
            />
          </div>
          <input class="btn btn-primary w-100" type="submit" value="Submit" />
        </form>
        {loading && <LoadingAnimation />}
        {result && <p>{{ result }}</p>}
      </div>
    );
  }
}

export default Converter;
