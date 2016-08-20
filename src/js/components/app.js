import React from 'react';
import ReactDOM from 'react-dom';
import Request from 'superagent';
var _ = require('lodash');

import SearchBox from './searchBox';
import Results from './results';
import ResultItem from './resultItem';
import Modal from './modal';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
      singleFilm: {},
      errorSearchMessage: false,
      errorAPIMessage: false,
      modalOpen: false
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.sortBy = this.sortBy.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(index) {
    let filmTitle = this.state.searchResults[index].Title.replace(/\s+/g, '+');
    let filmYear = this.state.searchResults[index].Year;
    let url = `http://www.omdbapi.com/?t=${filmTitle}&y=${filmYear}&plot=full&r=json`;

    Request.get(url)
      .end((error, response) => {
        this.setState({
          singleFilm: JSON.parse(response.text),
          modalOpen: true
        });
      });
  }

  closeModal(event) {
    event.preventDefault();
    this.setState({
      modalOpen: false
    });
  }

  sortBy(field) {
    this.setState({
      searchResults: _.sortBy(this.state.searchResults, field)
    });
  }

  handleSearch(url) {
    Request.get(url)
      .end((error, response) => {
        if(!error && JSON.parse(response.text).Response === 'True') {
          this.setState({
            searchResults: JSON.parse(response.text).Search
          });
        } else if(!error && JSON.parse(response.text).Response === 'False') {
          this.setState({
            errorSearchMessage: true
          });
        } else {
          console.error('There was an error fetching data from OMDB', error);
          this.setState({
            errorAPIMessage: true
          });
        }
      });
  }

  render() {
    return(
      <div>
        <SearchBox handleSearch={this.handleSearch} />
        <Results searchResults={this.state.searchResults}
                 onSortItems={this.sortBy}
                 errorAPIMessage={this.state.errorAPIMessage}
                 errorSearchMessage={this.state.errorSearchMessage}
                 handleOpenModal={this.openModal} />
        {this.state.modalOpen
          ? <Modal handleCloseModal={this.closeModal} film={this.state.singleFilm} />
          : ''
        }
      </div>
    );
  }
}
