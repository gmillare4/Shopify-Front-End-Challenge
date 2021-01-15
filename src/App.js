import React, { Component } from "react";
import { render } from "react-dom";
import "./App.css";
import { Nominations, SearchBar, SearchResults } from "./components";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      searchParam: "",
      searchResults: [],
      nominations: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.search = this.search.bind(this);
    this.nominate = this.nominate.bind(this);
    this.remove = this.remove.bind(this);
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
      .then((data) => this.setState({ searchResults: data.Search }))
      .then(console.log("Search Results", this.state.searchResults));
  }

  nominate(event) {
    for (let i = 0; i < this.state.searchResults.length; i++) {
      if (this.state.searchResults[i].imdbID === event.target.value) {
        this.setState({
          nominations: [...this.state.nominations, this.state.searchResults[i]],
        });
      }
    }
  }

  remove(event) {
    let newNominations = this.state.nominations.filter(
      (nomination) => nomination.imdbID !== event.target.value
    );
    this.setState({
      nominations: newNominations,
    });
  }

  handleChange = (event) => {
    this.setState({ searchParam: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <h1>The Shoppies</h1>
        <Nominations
          nominations={this.state.nominations}
          remove={this.remove}
        />
        <SearchBar
          search={this.search}
          searchparam={this.state.searchParam}
          handleChange={this.handleChange}
        />
        <SearchResults
          searchResults={this.state.searchResults}
          nominate={this.nominate}
        />
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
