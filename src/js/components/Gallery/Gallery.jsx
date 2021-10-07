import React, { useState } from 'react';

import { ShowAllPopup } from '../ShowAllPopup/ShowAllPopup';
import _11 from '../../../imgs/gallery/900x300/11.jpg';
import _12 from '../../../imgs/gallery/900x300/12.png';
import _21 from '../../../imgs/gallery/900x300/21.jpg';
import _22 from '../../../imgs/gallery/900x300/22.jpg';
import _31 from '../../../imgs/gallery/900x300/31.jpg';
import _32 from '../../../imgs/gallery/900x300/32.jpg';

export const Gallery = ({
  setName, setEmail, setPhone, setMessage
}) => {

  const [ tempName, setTempName ] = useState('');
  const [ tempEmail, setTempEmail ] = useState('');
  const [ tempPhone, setTempPhone ] = useState('');
  const [ tempMessage, setTempMessage ] = useState('');

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



  const [ isViewAllShown, setIsViewAllShown ] = useState(false);

  const handleViewAllClick = () => {
    setIsViewAllShown(!isViewAllShown);
  }

  return (
    <div className="gallerySection" id="gallery">
      <div className="gallerySection__content">
        <h2 className="gallerySection__title">Gallery of Essex Luxury Estates New York</h2>
        <div className="gallerySection__gallery">
          <div className="photoLine">
            <div className="photoLine__pict">
              <img className="estate left" src={_11} alt="Estate" />
              <img className="estate" src={_12} alt="Estate" />
            </div>
            <p className="photoLine__address">
              <span className="photoLine__address--blue">
                Marina Bay 17
              </span> 
              / North Hammilton East, NYC 33162
            </p>
          </div>
          <div className="photoLine">
            <div className="photoLine__pict">
              <img className="estate left" src={_21} alt="Estate" />
              <img className="estate" src={_22} alt="Estate" />
            </div>
            <p className="photoLine__address">
              <span className="photoLine__address--blue">
                Jamesburies Residens
              </span> 
              / Greenwich Village, NYC 33139
            </p>
          </div>
          <div className="photoLine">
            <div className="photoLine__pict">
              <img className="estate left" src={_31} alt="Estate" />
              <img className="estate" src={_32} alt="Estate" />
            </div>
            <p className="photoLine__address">
              <span className="photoLine__address--blue">
                Madisson Gardens Apartments
              </span> 
              / East River Roosevelt Side 154, NYC 87721
            </p>
          </div>

        </div>
        <button
          onClick={handleViewAllClick}
          className="gallerySection__btn"
        >
          View All
        </button>
      </div>

      {
        isViewAllShown && (
          <ShowAllPopup
            tempName={tempName}
            tempEmail={tempEmail}
            tempPhone={tempPhone}
            tempMessage={tempMessage}
            handleChange={handleChange}
            onSubmitForm={onSubmitForm}

            isViewAllShown={isViewAllShown}
            setIsViewAllShown={setIsViewAllShown}
          />
        )
      }
    </div>
  )
}