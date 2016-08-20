import React from 'react';

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div id="modal" className="modal modal__bg">
        <div className='modal__dialog'>
          <div className="modal__content">
            <h2 className="modal__film--title">{this.props.film.Title} | {this.props.film.Year} | {this.props.film.Country}</h2>
            <span className="modal__film--genre">{this.props.film.Genre}</span>
            <h4 className="modal__film--actors"><span>Actors:</span> {this.props.film.Actors}</h4>
            <h4 className="modal__film--director"><span>Director:</span> {this.props.film.Director}</h4>
            <p className="modal__film--plot"><span>Plot:</span> {this.props.film.Plot}</p>
            <h4 className="modal__film--awards"><span>Awards: </span>{this.props.film.Awards}</h4>
            <button href="" className="modal__close" onClick={this.props.handleCloseModal.bind(this, event)}>
  					  <svg className="" viewBox="0 0 24 24">
                <path d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z"/><path d="M0 0h24v24h-24z" fill="none"/>
              </svg>
  				  </button>
          </div>
        </div>
      </div>
    );
  }
}
