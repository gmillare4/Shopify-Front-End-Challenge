import React, { Component } from "react";
import { render } from "react-dom";
import "./App.css";
import { Nominations, SearchBar, SearchResults } from "./components";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      searchParam: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.search = this.search.bind(this);
  }
  //http://www.omdbapi.com/?i=tt3896198&apikey=807abc94
  //http://www.omdbapi.com/?apikey=807abc94
  componentDidMount() {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=807abc94")
      .then((res) => res.json())
      .then((data) => console.log("Data", data));
  }

  search(event) {
    event.preventDefault();
    console.log("Search Parameter", this.state.searchParam);
    fetch(
      `http://www.omdbapi.com/?s=${this.state.searchParam}&page=1&apikey=807abc94`
    )
      .then((res) => res.json())
      .then((data) => console.log("Data", data));
  }

  handleChange = (event) => {
    this.setState({ searchParam: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <h1>Something</h1>
        <Nominations />
        <SearchBar
          search={this.search}
          searchparam={this.state.searchParam}
          handleChange={this.handleChange}
        />
        <SearchResults />
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World</h1>
//     </div>
//   );
// }
// export default App;
