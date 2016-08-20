import React from 'react';

import App from './app';
import ResultItem from './resultItem';

export default class Results extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let resultItems;
    if(this.props.errorSearchMessage === true) {
      resultItems = <div className='error__message--wrapper'>
        <p>Sorry, we can't find any films matching your search.</p>
        <span>Please try a different term.</span>
      </div>;
    } else if(this.props.errorAPIMessage === true) {
      resultItems = <div className='error__message--wrapper'>
        <p>Sorry, there was an error trying to get the films.</p>
        <span>Please try again later.</span>
      </div>;
    } else if(typeof this.props.searchResults === 'object') {
      resultItems = this.props.searchResults.map((result, index) => {
        return (
          <ResultItem key={result.imdbID}
                      index={index}
                      trackTitle={result.Title}
                      trackType={result.Type}
                      trackYear={result.Year}
                      trackPoster={result.Poster}
                      handleOpenModal={this.props.handleOpenModal} />
        );
      });
    }
    return (
      <div className='results__wrapper'>
        <div className='centered'>
          <div className='results__top--section'>
            <h2>Results</h2>
            <div className='results__filters--section'>
              <span className='filter__span'>Sort By</span>
              <button className='btn__filter title__filter'
                      onClick={this.props.onSortItems.bind(null, 'Title')}>Title</button>
              <button className='btn__filter release__filter'
                      onClick={this.props.onSortItems.bind(null, 'Year')}>Release Year</button>
            </div>
          </div>
          <div className='results__centered'>
              {resultItems}
          </div>
        </div>
      </div>
    );
  }
}
