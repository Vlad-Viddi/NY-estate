import React, { useEffect } from 'react';

import closeIcon from '../../../imgs/header/icons/close.svg';

export const ModalMenu = ({ toggleMenu }) => {

  //disable scroll when modal is shown
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => document.body.style.overflow = 'unset';
  }, []);

  return (
    <div className="modalWrapper">
      <div className="modalMenu">
        <img
          src={closeIcon}
          onClick={toggleMenu}
          className="modalMenu__remover"
          alt="close icon"
        />

        <ul className="menuList">
          <li className="menuList__item">
            <a
              href="#home"
              onClick={toggleMenu}
            >
              HOME
            </a>
          </li>
          <li className="menuList__item">
            <a
              href="#aboutUs"
              onClick={toggleMenu}
            >
              ABOUT US
            </a>
          </li>
          <li className="menuList__item">
            <a
              href="#gallery"
              onClick={toggleMenu}
            >
              GALLERY
            </a>
          </li>
          <li className="menuList__item">
            <a
              href="#guests"
              onClick={toggleMenu}
            >
              GUEST'S REFERENCES
            </a>
          </li>
          <li className="menuList__item">
            <a
              href="#contacts"
              onClick={toggleMenu}
            >
              CONTACTS
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
