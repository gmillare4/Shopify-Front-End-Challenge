import React, { Component } from "react";
import { render } from "react-dom";
import "./App.css";
import { Nominations, SearchBar, SearchResults } from "./components";

export default class App extends Component {
  constructor() {
    super();
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
