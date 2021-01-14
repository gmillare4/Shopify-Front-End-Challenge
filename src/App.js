import React, { Component } from "react";
import { render } from "react-dom";
import "./App.css";
import { Nominations, SearchBar, SearchResults } from "./components";

export default class App extends Component {
  constructor() {
    super();
  }
  //http://www.omdbapi.com/?i=tt3896198&apikey=807abc94
  //http://www.omdbapi.com/?apikey=807abc94
  componentDidMount() {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=807abc94")
      .then((res) => res.json())
      .then((data) => console.log("Data", data));
  }

  render() {
    return (
      <div className="App">
        <h1>Something</h1>
        <Nominations />
        <SearchBar />
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
