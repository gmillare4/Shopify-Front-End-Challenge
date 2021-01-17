import React, { Component } from "react";
import { render } from "react-dom";
import "./App.css";
import { Nominations, SearchBar, SearchResults } from "./components";
import { CardGroup } from "reactstrap";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      searchParam: "",
      searchResults: [],
      nominations: [],
      banner: false,
      resultsFor: "",
      apiError: false,
      loading: false,
      totalResults: 0,
      currPage: 1,
    };
    this.handleChange = this.handleChange.bind(this);
    this.search = this.search.bind(this);
    this.nominate = this.nominate.bind(this);
    this.remove = this.remove.bind(this);
  }

  search(event, page) {
    event.preventDefault();
    this.setState({ loading: true });
    fetch(
      `https://www.omdbapi.com/?s=${this.state.searchParam}&page=${page}&apikey=807abc94`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((res) => {
        if (res.Response === "True") {
          this.setState({ apiError: false });
          this.setState({ loading: false });
          this.setState({ totalResults: Number(res.totalResults) });
          this.setState({ searchResults: res.Search });
          this.setState({ currPage: page });
        } else {
          this.setState({ apiError: res.Error });
          this.setState({ loading: false });
          this.setState({ totalResults: 0 });
          this.setState({ searchResults: [] });
        }
      })
      .catch((err) => console.log("error", err));
    this.setState({ resultsFor: this.state.searchParam });
  }

  handleChange = (event) => {
    this.setState({ searchParam: event.target.value });
  };

  nominate(event) {
    let canNominate = true;
    for (let j = 0; j < this.state.nominations.length; j++) {
      if (this.state.nominations[j].imdbID === event.target.value) {
        canNominate = false;
      }
    }
    if (this.state.nominations.length === 5) {
      canNominate = false;
    }
    if (canNominate) {
      for (let i = 0; i < this.state.searchResults.length; i++) {
        if (this.state.searchResults[i].imdbID === event.target.value) {
          this.setState({
            nominations: [
              ...this.state.nominations,
              this.state.searchResults[i],
            ],
          });
        }
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

  componentDidUpdate(prevProps, prevState) {
    if (this.state.nominations !== prevState.nominations) {
      if (this.state.nominations.length === 5) {
        this.setState({ banner: true });
      } else {
        this.setState({ banner: false });
      }
    }
  }

  render() {
    let banner;
    if (this.state.banner) {
      banner = (
        <h4 className="banner center">
          You've successfully nominated 5 movies!
        </h4>
      );
    } else {
      banner = <h4 className="noBanner text center">No Banner</h4>;
    }
    return (
      <div className="App">
        {banner}
        <h1 className="center">The Shoppies</h1>
        <SearchBar
          search={this.search}
          searchParam={this.state.searchParam}
          handleChange={this.handleChange}
          apiError={this.state.apiError}
        />
        <CardGroup>
          <SearchResults
            searchResults={this.state.searchResults}
            nominate={this.nominate}
            resultsFor={this.state.resultsFor}
            loading={this.state.loading}
            totalResults={this.state.totalResults}
            search={this.search}
            currPage={this.state.currPage}
            nominations={this.state.nominations}
          />
          <Nominations
            nominations={this.state.nominations}
            remove={this.remove}
          />
        </CardGroup>
      </div>
    );
  }
}
