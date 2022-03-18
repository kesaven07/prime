import about from './about';
import services from './services';

export default {
  services: {
    name: 'Services',
    path: services.webAppPentesting.path,
    navVisible: true,
    children: [...Object.values(services)],
  },
  solutions: {
    name: 'Managed Security Services',
    path: '/solutions',
    navVisible: true,
  },
  initiatives: {
    name: 'Initiatives',
    path: '/initiatives',
    navVisible: true,
    children: [
      {
        title: 'Primepilot',
        path: '/initiatives/#primepilot',
        description: 'Empowering the Next Generation of Cyber Heroes',
      },
      {
        title: 'DigiSafe Nations',
        path: '/initiatives/#digisafenations',
        description: 'Committed to the safety of our community.',
      },
    ],
  },
  about: {
    name: 'About Us',
    path: '/about',
    navVisible: true,
    children: [...Object.values(about)],
  },
  blog: {
    name: 'Blog',
    path: 'https://medium.com/primefort',
    navVisible: true,
    isExternal: true,
  },
  contact: {
    name: 'Contact Us',
    path: '/contact',
    navVisible: false,
  },
  media: {
    name: 'Media',
    path: '/media',
    navVisible: false,
  },
};
