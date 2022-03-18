import { globalStyles } from 'stitches.config';
import { createContext, useEffect, useState } from 'react';
import Sidebar from 'components/Sidebar';
import pages from 'data/pages';
import { PageTransitionAnimation } from 'components/PageTransitionAnimation';

export const SidebarContext = createContext(null);
export const RouteChangeContext = createContext(null);

function MyApp({ Component, pageProps }) {
  const [visible, setVisibility] = useState(false);
  globalStyles();

  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = visible ? 'hidden' : 'auto';
  }, [visible]);

  const toggle = () => setVisibility((state) => !state);
  const hide = () => setVisibility(false);

  return (
    <>
      <SidebarContext.Provider value={{ visible, toggle, hide }}>
        <Component {...pageProps} />
        <PageTransitionAnimation />
        <Sidebar open={visible} navItems={pages} />
      </SidebarContext.Provider>
    </>
  );
}

export default MyApp;
