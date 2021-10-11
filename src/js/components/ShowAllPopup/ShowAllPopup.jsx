import React from 'react';

import { useDisableScroll } from '../../helpers/useDisableScroll';

import { CloseBtn } from '../CloseBtn/CloseBtn';

export const ShowAllPopup = ({ 
  tempName,
  tempEmail,
  tempPhone,
  tempMessage,
  handleChange,
  onSubmitForm,
  isViewAllShown,
  setIsViewAllShown
}) => {

  useDisableScroll();

  const handleClick = () => setIsViewAllShown(!isViewAllShown);
  const onSubmitFormBinded = e => {
    onSubmitForm(e);
    setIsViewAllShown(!isViewAllShown);
  }

  return (
    <div className="showAll">
      <div className="showAll__content">
      <h2 className="showAll__title">Leave your contact to get more info</h2>
      <form
        className="form"
        onSubmit={onSubmitFormBinded}
        method="POST"
        action="./"
      >
        <input
          type="text"
          value={tempName}
          onChange={handleChange}
          placeholder="Name"
          className="form__field form__field--name"
          name="name"
          required
        />
        <input
          type="email"
          value={tempEmail}
          onChange={handleChange}
          placeholder="Email"
          className="form__field form__field--email"
          name="email"
          required
        />
        <input
          type="tel"
          value={tempPhone}
          onChange={handleChange}
          name="phone"
          placeholder="Phone"
          className="form__field form__field--phone"
          required
        />
        <textarea
          type="message"
          value={tempMessage}
          onChange={handleChange}
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
      <CloseBtn handleClick={handleClick}/>
      </div>
    </div>
  )
}
