import React from 'react';

export default class Modal extends React.Component {
  render() {
    return (
      <div id="modal" className="modal modal__bg" role="dialog" aria-hidden="true">
        <div className='modal__dialog'>
          <div className="modal__content">
            <h1>Modal</h1>
            <p>Church-key American Apparel trust fund, cardigan mlkshk small batch Godard mustache pickled bespoke meh seitan. Wes Anderson farm-to-table vegan, kitsch Carles 8-bit gastropub paleo YOLO jean shorts health goth lo-fi. Normcore chambray locavore Banksy, YOLO meditation master cleanse readymade Bushwick.</p>
            <a href="" className="modal__close">
  					  <svg className="" viewBox="0 0 24 24">
                <path d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z"/><path d="M0 0h24v24h-24z" fill="none"/>
              </svg>
  				  </a>
          </div>
        </div>
      </div>
    );
  }
}
