import React from 'react';

import sandwich from '../../../imgs/header/icons/sandwich.svg';
import closeIcon from '../../../imgs/header/icons/close.svg';

export const HambCross = ({ toggleMenu, isMenuShown }) => {
  
  return (
    <>
      {(isMenuShown !== true) ? (
        <img
          src={sandwich}
          alt="sandwich menu"
          className="hambCross hambCross--hamb"
          onClick={toggleMenu}
        />
      ) : (
        <img
          src={closeIcon}
          alt="cross menu"
          className="hambCross hambCross--close"
          onClick={toggleMenu}
        />
      )}
    </>
    
  )
}
