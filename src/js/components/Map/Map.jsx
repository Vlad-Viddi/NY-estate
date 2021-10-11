import React from 'react';
import { useDisableScroll } from '../../helpers/useDisableScroll';

import { CloseBtn } from '../CloseBtn/CloseBtn';

export const Map = ({ toggleMap }) => {
  useDisableScroll();

  return (
    <section className="map">
      <div className="map__content">
        <h2 className="map__title">Our Location</h2>
        <div className="position">
        <iframe
          className="position__map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46566.35937330426!2d-73.9681079647379!3d40.76386763302041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f716255555%3A0x3117e7ef4b2bf2ed!2sEssex%20House%20Residences!5e0!3m2!1suk!2sua!4v1633940059998!5m2!1suk!2sua"
          allowfullscreen=""
          loading="lazy"
          title="our location"
        />
        </div>
        <CloseBtn handleClick={toggleMap}/>
      </div>
    </section>
  )
}
