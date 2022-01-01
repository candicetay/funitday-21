import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import '../App.css';

const ScrollTopArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return function cleanup() {
      window.removeEventListener('scroll', checkScrollTop);
    };
  });

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
        <FaArrowUp onClick={scrollTop} style={{ height: 40, display: showScroll ? 'flex' : 'none' }} />
        // <FaArrowUp className="scrollTop" onClick={scrollTop} style={{height: 40, display: showScroll ? 'flex' : 'none'}}/>
  );
};

export default ScrollTopArrow;
