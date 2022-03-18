import WebAppPenTestingIcon from 'public/images/icons/web_app_pentesting.svg';
import icon2 from 'public/images/icons/icon-2.svg';
import access from 'public/images/icons/Access.svg';
import broad from 'public/images/icons/broad.svg';
import risk from 'public/images/icons/risk.svg';
import expertise from 'public/images/icons/expertise.svg';
import safeguard from 'public/images/icons/safeguard.svg';
import Compliance from 'public/images/icons/Compliance.svg';
import Estimation from 'public/images/icons/Estimation.svg';
import coverage from 'public/images/icons/coverage.svg';

export default {
  Managed: {
    title: 'Web Application Penetration Testing',
    path: '/services/managed-security-services',
    description: 'Catch all the threats you’re missing!',
    icon: WebAppPenTestingIcon,
    color: '$secondary500',
    imagePath: '/images/services/large/web_app_penetration_testing_bg.jpg',
    intro:
      'Primefort Managed Security Services provide you with remarkably effective responses to your five urgent demands, which include: ',
    benefits: [
      {
        title: 'On-Demand Access',
        description:
          'On-demand access to competent cybersecurity specialists in any location',
        icon: access,
      },
      {
        title: 'Mutiple Options',
        description:
          ' Capabilities that are broad and include sector-specific skills and experience',
        icon: icon2,
      },
      {
        title: 'Broad Scale',
        description:
          'Global-scale, with local and worldwide response capabilities available 24 hours a day, seven days a week',
        icon: broad,
      },
    ],

    features: {
      injectionFlaws: {
        title: 'Risk reduction',
        description:
          ' Connect the appropriate data to the appropriate procedures to forecast and avoid attacks',
        icon: risk,
      },
      securityMisconfigurations: {
        title: 'Enhanced expertise',
        description:
          ' Enhance your internal teams capabilities by bringing in individuals with sector-specific expertise in security operations, administration, regulation, and innovations such as security automation, data analytics, artificial intelligence, and deep learning',
        icon: expertise,
      },
      authenticationWeakness: {
        title: 'Safeguarding the supply network ',
        description:
          ' Increase corporate security by encompassing your whole environment and distribution network.',
        icon: safeguard,
      },
      something: {
        title: 'Compliance on an ongoing basis ',
        description:
          ' Accelerate security systems to ensure that you fulfill compliance standards on a regular basis.',
        icon: Compliance,
      },
      something2: {
        title: 'Estimation of financial outcomes',
        description:
          '  We ensure that your security investments are consistent and predictable.',
        icon: Estimation,
      },
      something3: {
        title: '360° coverage',
        description:
          'Visualize a comprehensive, accurate representation of your existing security position',
        icon: coverage,
      },
    },
    customerStory: {
      title: 'Why PrimeForts Managed Security Services ? ',
      text: 'Maintaining a strong security posture is critical in todays business. Primefort Managed Security Services can help you fortify your environment rapidly and grow more robust over the period, whether youre dealing with labor shortages, possible threats, or just want to be even more efficient. We offer real-time defense and assist enterprises in consolidating their security mechanisms in order to successfully combat increasing threats.',
      imagePath: '/images/mss2.svg',
    },
    testimonial: {
      text: 'We’ve been using the services provided by PrimeFort for almost a year now & can’t imagine our websites without it. PrimeFort not only protects you but helps you keep your website secure by their regular malware scans & security audits. The excellent combination of real-time protection and regular security audits has strengthened our security many fold.',
      author: 'Mike Larson',
      designation: 'Chief Product Officer, Xy Co',
      imagePath: '/images/people/profile_picture.jpg',
    },
  },
};
