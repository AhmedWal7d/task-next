"use client"
import  { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { IoArrowUpCircleOutline } from 'react-icons/io5';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <Button
          variant=""
          onClick={scrollToTop}
          className='scrollbtn'
          style={{
            background:"#00aaff",
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            zIndex: 9999,
            borderRadius: '50%',
            width: '45px',
            height: '45px',
            padding: 0,
            color:"white"
          }}
        >
          <IoArrowUpCircleOutline size={30} />
        </Button>
      )}
    </>
  );
};

export default ScrollToTopButton;
