import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import App from './app';

export default class SearchBox extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div className='search__wrapper'>
        <div className='centered'>
          <img src='images/logo.png' alt='logo' />
          <div className='input__wrapper'>
            <h1>OMDb</h1>
            <p>The Open <span className='search__span'>Movie</span> Database.</p>
            <div className='input__container'>
              <span>
                <input id='search__input'
                       ref='query'
                       autoFocus='true'
                       type='text'
                       placeholder='Search for anything right here, right now...'/>
                <button id='submit__input'
                        className='btn'
                        type='submit'
                        value='search'
                        onClick={this.createAjax.bind(this)}>Search</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  createAjax() {
    let query = ReactDOM.findDOMNode(this.refs.query).value;
    let url = `http://www.omdbapi.com/?s=${query}&plot=full&r=json`;
    this.props.handleSearch(url);
  }
}
