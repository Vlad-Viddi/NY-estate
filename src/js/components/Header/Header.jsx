import React, { useState } from 'react';
import { ModalMenu } from '../ModalMenu/ModalMenu';
import { HambCross } from '../HambCross/HambCross';

import logo from '../../../imgs/header/icons/image.png';
import phone from '../../../imgs/header/icons/phone-mob.svg';

export const Header = () => {
  const [ isMenuShown, setIsMenuShown ] = useState(false);

  const toggleMenu = () => {
    setIsMenuShown(!isMenuShown);
  }

  return (
    <header className="header" id="/">
      <div className="header__content">
        <div
          onClick={() => setIsMenuShown(false)}
          className="logoVrapper"
        >
          <a className="logo" href="#/">
            <img
              src={logo}
              alt="logo"
              className="logo__img"
            />
            <span className="logo__text">ERE</span>
          </a>
        </div>
        <div className="menu">
          <div className="nav">
            <HambCross
              toggleMenu={toggleMenu}
              isMenuShown={isMenuShown}
            />
          </div>
          <div className="call">
            <a
              href="tel: +01234567777"
              className="call__number"
            >
              + 012 34 567 777
            </a>
            <a href="tel: +01234567777">
              <img
                  src={phone}
                  alt="call us icon"
                  className="call__icon"
                />
              </a>
          </div>
        </div>
        <h1 className="title">Essex <br />Real Estate</h1>
        {
          isMenuShown && (
            <ModalMenu
              toggleMenu={toggleMenu}
            />
          )
        }
      </div>
      
    </header>
  )
}
