import React, { useState, useEffect } from 'react';
import { Button } from '@chakra-ui/react';
import { ChevronUpIcon } from '@chakra-ui/icons';

const GoToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    const scrollStep = -window.scrollY / (500 / 15); // Adjust the scroll speed here (500 is the duration in milliseconds)

    const scrollAnimation = () => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
        requestAnimationFrame(scrollAnimation);
      }
    };

    requestAnimationFrame(scrollAnimation);
  };

  return (
    <Button
      className={`go-to-top-button ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      position="fixed"
      bottom="6"
      right="6"
      zIndex="999"
      bgColor="gray.800"
      color="white"
      borderRadius="md"
      boxShadow="md"
      opacity={isVisible ? 1 : 0}
      transition="opacity 0.3s"
      _hover={{ opacity: 0.8 }}
    >
      <ChevronUpIcon boxSize={6} />
    </Button>
  );
};

export default GoToTopButton;
