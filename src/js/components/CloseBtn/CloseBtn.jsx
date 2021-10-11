import React from 'react';

import closeIcon from '../../../imgs/gallery/close.svg';

export const CloseBtn = ({ handleClick }) => {

  return (
    <img
      className="close"
      src={closeIcon}
      alt="close icon"
      onClick={handleClick}
    />
  )
}
