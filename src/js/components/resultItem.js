import React from 'react';

import App from './app';

export default class ResultItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='results__item--wrapper' onClick={this.props.handleOpenModal.bind(this, this.props.index)}>
        <div className='result__item'>
          <div className='result__poster--wrapper'>
            <img className='result__poster' src={this.props.trackPoster} />
          </div>
          <div className='result__item--info'>
            <span className={'result__type--span' + ' ' + (this.props.trackType === 'movie' ? 'type__movie' : 'type__series')}>&bull;	{this.props.trackType}</span>
            <h3 className='result__title'>{this.props.trackTitle}</h3>
            <span className='result__year--span'>{this.props.trackYear}</span>
          </div>
        </div>
      </div>
    );
  }
}
