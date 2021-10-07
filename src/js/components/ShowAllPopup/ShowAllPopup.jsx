import React, { useEffect } from 'react';

import closeIcon from '../../../imgs/gallery/close.svg';

export const ShowAllPopup = ({ isViewAllShown, setIsViewAllShown }) => {

  // disable scroll when modal is on
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => document.body.style.overflow = "unset";
  }, []);

  const handleClick = () => setIsViewAllShown(!isViewAllShown);

  return (
    <div className="showAll">
      <div className="showAll__content">
      <h2 className="showAll__title">Leave your contact to get more info</h2>
      <form className="form">
        <input
          type="text"
          placeholder="Name"
          className="form__field form__field--name"
          name="customerName"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="form__field form__field--email"
          name="email"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          className="form__field form__field--phone"
          required
        />
        <textarea
          type="message"
          placeholder="Enter your inquiry"
          className="form__field form__field--message"
          required
        />
        <button
          className="form__field form__field--btn"
        >
          Send
        </button>
      </form>
      <img
          className="showAll__close"
          src={closeIcon}
          alt="close icon"
          onClick={handleClick}
        />
      </div>
    </div>

  )
}