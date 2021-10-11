import React, { useState } from 'react';

import { Map } from '../Map/Map';

export const Contacts = ({
  setName, setEmail, setPhone, setMessage,
}) => {
  const [ tempName, setTempName ] = useState('');
  const [ tempEmail, setTempEmail ] = useState('');
  const [ tempPhone, setTempPhone ] = useState('');
  const [ tempMessage, setTempMessage ] = useState('');

  const [ isMapVisible, setIsMapVisible ] = useState(false);

  const toggleMap = () => setIsMapVisible(!isMapVisible);

  const handleChange = e => {
    if(e.target.name === 'name') {
      setTempName(e.target.value);
    } else if(e.target.name === 'email') {
      setTempEmail(e.target.value)
    } else if(e.target.name === 'phone') {
      setTempPhone(e.target.value);
    } else {
      setTempMessage(e.target.value);
    }
  }

  const onSubmitForm = e => {
    e.preventDefault();
    setName(tempName);
    setEmail(tempEmail);
    setPhone(tempPhone);
    setMessage(tempMessage);

    setTempName('');
    setTempEmail('');
    setTempPhone('');
    setTempMessage('');
  }

  return (
    <div className="contacts" id="contacts">
      <div className="contacts__content">

        <h2 className="contacts__title">Contact Us</h2>

        <div className="contacts__section">

          <div className="contactInfo">
            <div className="contactInfo__content contactInfo__content--phoneEmail">
              <div className="contactPart phone">
                <p className="contactPart__title">Phone</p>
                <a
                  href="tel: +123 333 66 77"
                  className="contactPart__info"
                >
                  +0123 333 6677
                </a>
              </div>
              <div className="contactPart email">
                <p className="contactPart__title">Email</p>
                <a
                  href="mailto: request@ere.com"
                  className="contactPart__info"
                >
                  request@ere.com
                </a>
              </div>

            </div>

            <div className="contactInfo__content contactInfo__content--address">
              <div
                onClick={toggleMap}
                className="contactPart--address"
              >
                <p className="contactPart__title">Address</p>
                <p className="contactPart__info">
                  160&nbsp;Central&nbsp;Park&nbsp;South, 
                  New&nbsp;York, NY&nbsp;10019
                </p>
              </div>
            </div>
          </div>

          <form
            onSubmit={onSubmitForm}
            className="contactForm"
            method="POST"
            action="./"
          >
            <input
              value={tempName}
              onChange={handleChange}
              required
              type="text"
              name="name"
              placeholder="Name"
              className="contactForm__field contactForm__field--name"
            />
            <input
              value={tempEmail}
              onChange={handleChange}
              required
              type="email"
              name="email"
              placeholder="Email"
              className="contactForm__field contactForm__field--email"
            />
            <input
              value={tempPhone}
              onChange={handleChange}
              required
              type="tel"
              name="phone"
              placeholder="Phone"
              className="contactForm__field contactForm__field--phone"
            />
            <textarea
              value={tempMessage}
              required
              onChange={handleChange}
              name="message"
              placeholder="Message"
              className="contactForm__field contactForm__field--textarea"
            />
            <button
              className="contactForm__field contactForm__field--btn"
            >
              Consultation
            </button>
          </form>

        </div>

      </div>
      { isMapVisible && (
        <Map
          toggleMap={toggleMap }
        />
      )}
    </div>
  )
}
