import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { styled } from 'stitches.config';

const TransitionOverlay = styled(motion.div, {
  position: 'fixed',
  inset: 0,
  width: '100%',
  height: '100vh',
  background: '#000',
  zIndex: 99999,
});

const StyledDiv = styled(motion.div, {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100px',
  height: '100vh',
  backgroundColor: '$accenta600',
  zIndex: 99999,
});

export const PageTransitionAnimation = () => {
  const [isVisible, setVisibility] = useState(false);
  const router = useRouter();

  const handleRouteChangeComplete = (url) => {
    setVisibility(true);
    setTimeout(() => setVisibility(false), 700);
  };

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router.events]);

  return (
    <AnimatePresence>
      {isVisible && (
        <TransitionOverlay
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
        >
          <StyledDiv
            className='test'
            initial={{ x: 0 }}
            animate={{ x: '100vw', scaleX: [1, 10, 4, 0.5] }}
            transition={{ duration: 0.7 }}
          ></StyledDiv>
        </TransitionOverlay>
      )}
    </AnimatePresence>
  );
};
