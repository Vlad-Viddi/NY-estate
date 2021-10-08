import React, { useState, useEffect } from 'react';

import topArrow from '../../../imgs/scrollToTop/topArr.svg';

export const ScrollToTop = () => {
  const [ isScrollToTopVisible, setIsScrollToTopVisible ] = useState(false);
  const threshold = -200;

  useEffect(() => {
    document.addEventListener('scroll', () => {
      if(document.documentElement.getBoundingClientRect().top <= threshold) {
        setIsScrollToTopVisible(true);
      } else {
        setIsScrollToTopVisible(false);
      }
    })
  });

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  return (
    <div
      className={isScrollToTopVisible === true ? "scrollToTop" : "scrollToTop scrollToTop--hidden"}
      onClick={goToTop}
    >
      <img src={topArrow} alt="arrow to top"/>
    </div>
  )
}
