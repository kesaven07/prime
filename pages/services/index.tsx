import pages from 'data/pages';
import Router from 'next/router';
import { useEffect } from 'react';

const Services = () => {
  useEffect(() => {
    Router.push(pages.services.path);
  }, []);
  return <></>;
};

export default Services;
