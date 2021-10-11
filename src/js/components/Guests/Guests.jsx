import React from 'react';

import _1 from '../../../imgs/guests/1.jpg';
import _2 from '../../../imgs/guests/2.jpeg';
import _3 from '../../../imgs/guests/3.jpg';

export const Guests = () => {

  return (
    <div className="guests" id="guests">
      <div className="guests__content">
        <h2 className="guests__title">Guest's mentions</h2>

        <div className="guests__people">
          <div className="person">
            <img
              className="person__photo"
              src={_1}
              alt="portrait"
            />
            <p className="person__name">David Beckmann</p>
            <p className="person__position">Fashion Journalist</p>
            <p className="person__feedback">
              Great property on the edge of times square and Central Park. 
              The staff, property and facilities are all top notch (dare I say "spacious" for NYC). 
              The elevators remind you of classic films, and if you get a central park view, 
              you're in for a wonderful treat each time you look outside your window.
            </p>
          </div>

          <div className="person">
            <img
              className="person__photo"
              src={_2}
              alt="portrait"
            />
            <p className="person__name">Terra Mallique</p>
            <p className="person__position">Producer, Director</p>
            <p className="person__feedback">
              It had been 5 years since we had last stayed at this peoperty and the recent renovations are quite nice. 
              Valet and doorman services is quick and efficient, especially for NY. Check-in is quick. 
              The members lounge offers a nice, full breakfast and the restaurant next door is convenient. 
            </p>
          </div>

          <div className="person">
            <img
              className="person__photo"
              src={_3}
              alt="portrait"
            />
            <p className="person__name">Archiba Konello</p>
            <p className="person__position">Vice President at JWM Inc.</p>
            <p className="person__feedback">
              My husband and I stayed at the JW during our wedding weekend in Sept, 
              seperate rooms before the wedding and joint rooms after the wedding. 
              We got upgraded - which I thought was extremely nice. 
              Would stay again and recommend!
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
