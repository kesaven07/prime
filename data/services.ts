import WebAppPenTestingIcon from 'public/images/icons/web_app_pentesting.svg';
import MobileAppPenTestingIcon from 'public/images/icons/mobile_pentesting.svg';
import CommonIcon from 'public/images/icons/common_icon.svg';
import icon1 from 'public/images/icons/icon-1.svg';
import icon2 from 'public/images/icons/icon-2.svg';
import Evaluate from 'public/images/icons/Evaluate.svg';
import Suggest from 'public/images/icons/Suggest.svg';
import Enforce from 'public/images/icons/Enforce.svg';
import Evaluate2 from 'public/images/icons/Evaluate2.svg';
import Suggest2 from 'public/images/icons/Suggest2.svg';
import Enforce2 from 'public/images/icons/Enforce2.svg';
import Monitor from 'public/images/icons/Monitor.svg';
import Analy from 'public/images/icons/Analy.svg';
import testing from 'public/images/icons/testing.svg';
import testing2 from 'public/images/icons/testing2.svg';
import penetration from 'public/images/icons/penetration.svg';
import advanced from 'public/images/icons/advanced.svg';
import automated from 'public/images/icons/automated.svg';
import manual from 'public/images/icons/manual.svg';
import analysis from 'public/images/icons/analysis.svg';
import Methodology from 'public/images/icons/Methodology.svg';
import Vuln from 'public/images/icons/Vuln.svg';
import Security from 'public/images/icons/Security.svg';
import Eval from 'public/images/icons/Eval.svg';
import Compre from 'public/images/icons/Compre.svg';
import executive from 'public/images/icons/executive.svg';
import extended from 'public/images/icons/extended.svg';
import Finance from 'public/images/icons/Financial.svg';
import GDPR from 'public/images/icons/GDPR.svg';
import PCI from 'public/images/icons/PCI.svg';
import Acknowledge from 'public/images/icons/Acknowledge.svg';
import Threat1 from 'public/images/icons/Threat1.svg';
import Protection from 'public/images/icons/Protection.svg';
import Cloud from 'public/images/icons/Cloud.svg';
import Compi from 'public/images/icons/Compi.svg';
import SOC from 'public/images/icons/SOC.svg';
import Network from 'public/images/icons/Network.svg';
import ISO from 'public/images/icons/ISO.svg';

export default {
  webAppPentesting: {
    title: 'Web Application Penetration Testing',
    path: '/services/web-app-penetration-testing',
    description:
      'Track the latest vulnerabilities and cyber threats to your Web Applications',
    icon: WebAppPenTestingIcon,
    color: '$secondary500',
    imagePath: '/images/services/large/web_app_penetration_testing_bg.jpg',
    smallImagePath: '/images/services/small/web_app_penetration_testing_bg.jpg',
    intro:
      'Web Application Penetration testing is initiated by an expert trying to attack your application to preserve your software security.',
    benefits: [
      {
        title: 'Discover vulnerabilities',
        description:
          'Identifying vulnerabilities takes more than just scanning the IT environment to be able to deal with current techniques of user attacks',
        icon: icon1,
      },
      {
        title: 'Exploit vulnerabilities',
        description:
          ' To be able to exploit that vulnerability requires advanced techniques, which would also help one see how far it is possible to break in and penetrate the network.',
        icon: icon2,
      },
      {
        title: 'Using advanced strategies',
        description:
          'To firmly protect your space, it is equally important to figure out probable adversaries that are more likely to discover and target your application.',
        icon: advanced,
      },
    ],
    features: {
      injectionFlaws: {
        title: 'Automated testing',
        description:
          'Automated vulnerability scans to identify some common issues in the web application.',
        icon: automated,
      },
      securityMisconfigurations: {
        title: 'Manual testing',
        description:
          ' Highly skilled testers perform manual attack simulations to detect probable security flaws',
        icon: manual,
      },
      authenticationWeakness: {
        title: 'Analysis ',
        description:
          'Offer detailed and easy-to-understand results from automated and manual tests, in addition to mitigation strategies',
        icon: analysis,
      },
    },
    values: [
      {
        title: ' Accurate and Economical assessment',
        text: ' It is important to note that web applications are prone to compliance and security risks, and need to be constantly monitored for security flaws and loopholes in network setups while designing the application, however, it becomes even more important to identify and mitigate security flaws and vulnerabilities once the application is out in the market',
      },
      {
        title: 'Information Security ',
        text: ' If compromised, the web application may lead to data theft, stolen account details, stolen session IDs, and unethical insertion of malicious codes in the websites. Primefort’s Web App Pentestiing Services ensure a high level of information security for your web applicatio ',
      },
      {
        title: 'Modern approach ',
        text: 'Monitoring and testing the multiple components of your application to prevent a malicious attack often requires understanding the modern, up-to-date attack techniques as well as testing and evaluating the possible defense mechanism against those types of attacks. ',
      },
      {
        title: 'Automated and Manual Testing',
        text: 'The majority of the platforms consider automated penetration testing as a good place to start, but it cannot be overlooked that it is unable to detect every flaw. There’s a critical need to integrate the expert knowledge and pragmatic skills of a skilled manual tester who is adept at dealing with current attacks and vulnerabilities to run manual tests.',
      },
      {
        title: 'Accurate Results, Reduced Costs',
        text: 'Our combined approach of using standard testing strategies and expert testers ensures high accuracy and consistent checks by deploying automated testing procedures and then incorporating manual testing methods to reveal the flaws that automated assessment missed. Our proven testing process helps us achieve consistently high results and reduce customer costs. ',
      },
    ],
    customerStory: {
      title: 'Who Can Benefit from Our Web Application Penetration Testing ? ',
      text: 'Since there’s an increase in demand for web application penetration testing, it is becoming more and more complex for organizations to find expert, reliable testers that can quickly identify and fix security flaws and secure the web application from the attack of malicious individuals. Primefort’s Web Application penetration Testing is the perfect solution for organizations seeking an accurate and economical assessment for their web application. Be it in-house or third-party attacks, it allows organizations to test the security state of their applications and prevent data leaks.  ',
      imagePath: '/images/web2.svg',
    },
    testimonial: {
      text: 'PrimeFort has been an integral part of our internet security strategy -providing us with continuous support and advisory services to improve our platforms.',
      author: 'Lionel Charles',
      designation: 'Founder and CEO of IndiaFilings.com',
      imagePath: '/images/testi/1.jpg',
    },
  },
  mobileAppPentesting: {
    title: 'Mobile Application Penetration Testing',
    path: '/services/mobile-app-penetration-testing',
    description: 'All-in-one network security for your mobile applications ',
    icon: MobileAppPenTestingIcon,
    color: '$secondary500',
    imagePath: '/images/services/large/mobile_app_pentesting_bg.jpg',
    smallImagePath: '/images/services/small/mobile_app_pentesting_bg.jpg',
    intro:
      'Because mobile apps are designed without most of the security features inherent in conventional IT applications and systems, they are particularly susceptible.',
    benefits: [
      {
        title: 'Our Methodology',
        description:
          'For application penetration testing, we use a hybrid model wherein we implement the OWASP methodology .',
        icon: Methodology,
      },
      {
        title: 'Target Common Vulnerabilities',
        description:
          'Poor Code Obfuscation, Excessive Information Leakage, Insecure Communication',
        icon: Vuln,
      },
      {
        title: 'End to End Security ',
        description:
          'Our methodology for penetration testing allows us to assure complete end-to-end security and integrity.',
        icon: Security,
      },
    ],
    features: {
      injectionFlaws: {
        title: 'End-to-end evaluation',
        description:
          'In-depth mobile penetration testing of both client and server-side security measures',
        icon: Eval,
      },
      securityMisconfigurations: {
        title: 'Comprehensive Report',
        description:
          'A developer-friendly report contains a complete overview of the weaknesses.',
        icon: Compre,
      },
      authenticationWeakness: {
        title: 'Executive Report ',
        description:
          'A high-standard review of how well the application performs when faced with real-time cyberattacks.',
        icon: executive,
      },
      databaseInteractionErrors: {
        title: 'Extended Support',
        description:
          'Support from our team in order to resolve the issues and implement coding practices in order to avoid vulnerabilities from emerging in the future.',
        icon: extended,
      },
      poorSessionManagement: {
        title: 'Estimation of financial outcomes',
        description:
          'We ensure that your security investments are consistent and predictable',
        icon: Finance,
      },
    },
    customerStory: {
      title: ' Why Mobile Application Penetration Testing ? ',
      text: 'As a security testing method, the Mobile Application Penetration Testing Methodology examines security perimeters in a mobile context. Its major focus is client-side security, and it extensively places the end-user in charge. It is derived from the classic notion of the application security technique. Companies can acquire an early understanding of the source codes vulnerabilities, bottlenecks, and attack routes by undertaking penetration testing. Once all flaws have been identified, developers may implement adjustments to bridge the gaps and update the design to fix the issue.',
      imagePath: '/images/icons/mobile_1.svg',
    },
    testimonial: {
      text: 'PrimeFort has been an integral part of our internet security strategy -providing us with continuous support and advisory services to improve our platforms.',
      author: 'Lionel Charles',
      designation: 'Founder and CEO of IndiaFilings.com',
      imagePath: '/images/testi/2.png',
    },
  },
  networkPentesting: {
    title: 'Network Penetration Testing',
    path: '/services/network-penetration-testing',
    description:
      'Automated, Secure, and Comprehensive Network Penetration Testing',
    icon: Network,
    color: '$secondary500',
    imagePath: '/images/services/large/network_pentesting_bg.jpg',
    smallImagePath: '/images/services/small/network_pentesting_bg.jpg',
    intro:
      ' Conventional ways to network pen testing frequently overlook significant vulnerabilities and might take weeks to deliver results—time you probably cant afford.',
    benefits: [
      {
        title: 'Reconnaissance',
        description:
          'Identifying vulnerabilities takes more than just scanning the IT environment to be able to deal with current techniques of user attacks',
        icon: CommonIcon,
      },
      {
        title: 'Build Test cases',
        description:
          'The process doesn’t get over with just detecting a vulnerability in the system. To be able to exploit that vulnerability requires advanced techniques, which would also help one see how far it is possible to break in and penetrate the network.',
        icon: CommonIcon,
      },
      {
        title: 'Using advanced strategies',
        description:
          'To firmly protect your space, it is equally important to figure out probable adversaries that are more likely to discover and target your application and then mimic their latest tactics to monitor and manage your defense system.',
        icon: CommonIcon,
      },
    ],
    features: {
      injectionFlaws: {
        title: 'Analysis and Visibility of Network',
        description:
          'Gain the network visibility required to detect and evaluate attacks, as well as to allow threat hunting.',
        icon: Analy,
      },
      securityMisconfigurations: {
        title: 'Testing for Network Penetration',
        description:
          'Cybercriminals are always searching the internet for weak servers or network devices. If an internet-facing asset is exposed to a publicly known vulnerability, the attacker can acquire access to the servers, network devices, or system.',
        icon: testing,
      },
      authenticationWeakness: {
        title: 'Testing for Internal Penetration ',
        description:
          'Internal assets are almost certainly subject to major flaws. We conduct pen tests to find such vulnerabilities, prepare to exploit the discovered hole and provide effective remediation.',
        icon: testing2,
      },
      databaseInteractionErrors: {
        title: 'Penetration Testing Of Network Devices',
        description:
          'Manual penetration testing is performed by certified penetration testers with years of expertise to look for security holes in network devices',
        icon: penetration,
      },
      //   poorSessionManagement: {
      //     title: 'Estimation of financial outcomes',
      //     description:
      //       'We ensure that your security investments are consistent and predictable',
      //     icon: CommonIcon,
      //   },
    },
    values: [
      {
        title: 'Expertise & Experience',
        text: 'Based on our extensive experience in assessing some of the most complex cyber-attacks by the nation-state and criminal parties, our team of experts and analysts sifts across network data and introduces new threat detection methodologies.',
      },
      {
        title: 'Completeness',
        text: 'Primefort’s Network Penetration testing delivers visibility and security for both networks and endpoints. It delivers overall network visibility, analysis, and malware detection, which is then supplemented by the security architecture.',
      },
      {
        title: 'Incorporation',
        text: 'Primefort’sNetwork Pen Testing fits well inside your organizations existing IT infrastructure. It is simple to install, improving efficiency, effort, and resources, and it can be installed on a companys current hypervisors',
      },
    ],
    customerStory: {
      title: ' Why Choose Our Network Penetration Testing? ',
      text: 'In order to protect your internal and Web infrastructure, resources, and information, Primeforts Network Pen Testing provides you with the advantage you seek. With our, dynamic security professionals with extensive network penetration experience are matched to your institutions objectives and expectations based on their expertise in network pen-testing. It assists your corporation in strengthening the cybersecurity posture of network servers.',
      imagePath: '/images/net.svg',
    },
    testimonial: {
      text: 'PrimeFort has been an integral part of our internet security strategy -providing us with continuous support and advisory services to improve our platforms.',
      author: 'Lionel Charles',
      designation: 'Founder and CEO of IndiaFilings.com',
      imagePath: '/images/testi/3.png',
    },
  },
  cloudPentesting: {
    title: 'Cloud Security',
    path: '/services/cloud-security',
    description: 'The dynamic approach to comply with your corporate goals.',
    icon: Cloud,
    color: '$secondary500',
    imagePath: '/images/services/large/cloud_security_bg.jpg',
    smallImagePath: '/images/services/small/cloud_security_bg.jpg',
    intro:
      ' Cloud security management is, without a question, a challenging area that needs early integration into the overall corporate design. ',
    benefits: [
      {
        title: 'We Evaluate ',
        description:
          'A Cloud Security Assessment gives you information about your present or projected cloud computing adoption.',
        icon: Evaluate,
      },
      {
        title: 'We Suggest ',
        description:
          'Our Cloud Security Advisory services are based on over a decade of experience assisting clients with cloud security adoption.',
        icon: Suggest,
      },
      {
        title: 'We Enforce',
        description:
          'Identify and access management, data protection, application security, and infrastructure security are all covered by our Cloud Protection Services.',
        icon: Enforce,
      },
    ],
    features: {
      injectionFlaws: {
        title: 'Evaluate ',
        description:
          ' A Cloud Security Assessment gives you information about your present or projected cloud computing adoption.',
        icon: Evaluate2,
      },
      securityMisconfigurations: {
        title: 'Suggest',
        description:
          'Our Cloud Security Advisory services are based on over a decade of experience assisting clients with cloud security adoption.',
        icon: Suggest2,
      },
      authenticationWeakness: {
        title: 'Enforce',
        description:
          'Identity and access management, data protection, application security, and infrastructure security are all covered by our Cloud Protection Services.',
        icon: Enforce2,
      },
      databaseInteractionErrors: {
        title: 'Monitor ',
        description:
          'Our Cloud Security Monitoring solution makes security monitoring a crucial cornerstone of your cloud architecture to secure the integrity of your cloud-based activities. Our Cloud Security Services are provided by a worldwide network of ISO27001-certified security operations centers (SOCs) and may be obtained through our cloud platform (CP) or as stand-alone offerings.',
        icon: Monitor,
      },
      //   poorSessionManagement: {
      //     title: 'Estimation of financial outcomes',
      //     description:
      //       'We ensure that your security investments are consistent and predictable',
      //     icon: CommonIcon,
      //   },
    },
    customerStory: {
      title: ' Why Choose our Cloud Security Services ? ',
      text: 'Cloud security is a complicated discipline that must be integrated into the enterprise architecture from the beginning. We can assist you with your cloud migration, whether youre just getting started, re-evaluating your cloud architecture, or have already achieved a mature, agile posture.Primeforts Cloud Security Monitoring solution makes security monitoring a crucial cornerstone of your cloud architecture to secure the integrity of your cloud-based activities. Our Cloud Security Services are provided by a worldwide network of ISO27001-certified security operations centers (SOCs) and may be obtained through our cloud platform (CP) or as stand-alone offerings.',
      imagePath: '/images/CS2.svg',
    },
    testimonial: {
      text: 'IZAPY engaged Primefort for cybersecurity vulnerability assessment and penetration testing services. We amazed work done by Sriram and team with technological and process capability. Sriram and team has demonstrated advanced penetration testing process based on threat level and business need.',
      author: 'IZAPY',
      designation: 'Leading Cybersecurity Firm , Singapore',
      imagePath: '/images/testi/4.jpg',
    },
  },
  compliance: {
    title: 'Compliance',
    path: '/services/compliance',
    description:
      'Uncomplicated risk management for your privacy and data security',
    intro:
      'Primefort has an interdisciplinary team of risk management experts that have expertise in building, implementing, administering, continuously developing, and evaluating management systems',
    icon: Compi,
    color: '$secondary500',
    imagePath: '/images/services/large/compliance_bg.jpg',
    smallImagePath: '/images/services/small/compliance_bg.jpg',
    benefits: [
      {
        title: 'PCI DSS',
        description:
          'PCI DSS is a worldwide data security standard that payment card companies have embraced for any businesses that receive, store, or transport cardholder data.',
        icon: PCI,
      },
      {
        title: 'General Data Protection Regulation (GDPR)',
        description:
          'GDPR goes to considerable efforts to explain what constitutes personal data and what does not. If any business collects, uses, or maintains the personal data of EU residents, they must adhere to the GDPRs privacy and security rules.',
        icon: GDPR,
      },
      {
        title: 'ISO 27001',
        description:
          'ISO/IEC 27001 is a globally recognized information security management standard. It establishes, maintains, and improves the requirements for an information security management system (ISMS). ',
        icon: ISO,
      },
    ],
    features: {
      injectionFlaws: {
        title: 'Analysis and Visibility of Network',
        description:
          'Gain the network visibility required to detect and evaluate attacks, as well as to allow threat hunting.',
        icon: CommonIcon,
      },
      securityMisconfigurations: {
        title: 'Testing for Network Penetration',
        description:
          'Cybercriminals are always searching the internet for weak servers or network devices. If an internet-facing asset is exposed to a publicly known vulnerability, the attacker can acquire access to the servers, network devices, or system.',
        icon: CommonIcon,
      },
      authenticationWeakness: {
        title: 'Testing for Internal Penetration ',
        description:
          'Internal assets are almost certainly subject to major flaws. We conduct pen tests to find such vulnerabilities, prepare to exploit the discovered hole and provide effective remediation.',
        icon: CommonIcon,
      },
      databaseInteractionErrors: {
        title: 'Penetration Testing Of Network Devices',
        description:
          'Manual penetration testing is performed by certified penetration testers with years of expertise to look for security holes in network devices',
        icon: CommonIcon,
      },
      //   poorSessionManagement: {
      //     title: 'Estimation of financial outcomes',
      //     description:
      //       'We ensure that your security investments are consistent and predictable',
      //     icon: CommonIcon,
      //   },
    },
    values: [
      {
        title: 'PCI DSS',
        text: 'To be PCI compliant, the company must adhere to 12 high-level standards outlined in the PCI standard. The PCI SSCs 12 standards are both operational and technological, with the primary goal of protecting cardholder data at all times.',
      },
      {
        title: 'General Data Protection Regulation (GDPR)',
        text: 'The EUs General Data Protection Regulation (GDPR) aims to strike a balance between being robust enough to provide individuals with clear and realistic protection and being able to accommodate enterprises and the publics best rights. Additionally, those that break the GDPRs privacy and security regulations face stiff fines in the tens of millions of euros range.',
      },
      {
        title: 'ISO 27001',
        text: 'It offers reference control goals and guidelines for implementing information security controls that are tailored to the organizations specific needs.',
      },
    ],
    customerStory: {
      title: ' Why Choose Us ? ',
      text: 'The future of corporations is being shaped by the digitization of business operations. We are there for you at every stage of your journey, just as we are and have been for many other enterprises. Regardless of whether you wish to seek certification in the near future or not, our modular strategy guarantees that each foundational element is consistent with ISO standards and that when the time comes, you can address the auditors with certainty.',
      imagePath: '/images/comp2.svg',
    },
    testimonial: {
      text: 'IZAPY engaged Primefort for cybersecurity vulnerability assessment and penetration testing services. We amazed work done by Sriram and team with technological and process capability. Sriram and team has demonstrated advanced penetration testing process based on threat level and business need.',
      author: 'IZAPY',
      designation: 'Leading Cybersecurity Firm , Singapore',
      imagePath: '/images/testi/4.jpg',
    },
  },
  soc: {
    title: 'SOC',
    path: '/services/soc',
    description:
      'The highest level of information security to handle your sensitive data',
    intro:
      'Information privacy and data security have become critical components of todays security frameworks: data feeds commercial success. We maintain a high level of information technology by taking the following measures - ',
    icon: SOC,
    color: '$secondary500',
    imagePath: '/images/services/large/soc_bg.jpg',
    smallImagePath: '/images/services/small/soc_bg.jpg',
    benefits: [
      {
        title: 'Acknowledging and evaluating your vulnerabilities ',
        description:
          'We usually start by assisting our customers in understanding and quantifying their risk models, identifying essential data assets, and evaluating their existing security policies and stages of protection',
        icon: Acknowledge,
      },
      {
        title: ' Your protection; your pick of delivery method',
        description:
          'We deliver our expertise through various modes of delivery - a Dedicated SOC, a Managed SOC, or our Hybrid model.  Our worldwide CDC network spans the globe - including India and some other countries',
        icon: Protection,
      },
      {
        title: 'Threat and regulatory compliance',
        description:
          'We utilize data to transform our clients from being the ones hunted to risk hunters. In an intelligence-driven strategy, we integrate SIEM, network surveillance, endpoint tracking, payload assessment, and offline big data analytics.',
        icon: Threat1,
      },
    ],
    features: {
      injectionFlaws: {
        title: 'Analysis and Visibility of Network',
        description:
          'Gain the network visibility required to detect and evaluate attacks, as well as to allow threat hunting.',
        icon: CommonIcon,
      },
      securityMisconfigurations: {
        title: 'Testing for Network Penetration',
        description:
          'Cybercriminals are always searching the internet for weak servers or network devices. If an internet-facing asset is exposed to a publicly known vulnerability, the attacker can acquire access to the servers, network devices, or system.',
        icon: CommonIcon,
      },
      authenticationWeakness: {
        title: 'Testing for Internal Penetration ',
        description:
          'Internal assets are almost certainly subject to major flaws. We conduct pen tests to find such vulnerabilities, prepare to exploit the discovered hole and provide effective remediation.',
        icon: CommonIcon,
      },
      databaseInteractionErrors: {
        title: 'Penetration Testing Of Network Devices',
        description:
          'Manual penetration testing is performed by certified penetration testers with years of expertise to look for security holes in network devices',
        icon: CommonIcon,
      },
      //   poorSessionManagement: {
      //     title: 'Estimation of financial outcomes',
      //     description:
      //       'We ensure that your security investments are consistent and predictable',
      //     icon: CommonIcon,
      //   },
    },
    customerStory: {
      title: ' The New Era of Cybersecurity',
      text: 'A malicious intrusion takes approximately three months to be discovered. Even if you have the necessary processes and tools in effect, you are still susceptible to attack when youre not monitoring systems, identifying possible security issues, and implementing changes to your systems promptly when risk is discovered. It is obvious that a new generation of cybersecurity techniques is required to safeguard your sensitive information assets.',
      imagePath: '/images/soc2.svg',
    },
    testimonial: {
      text: 'IZAPY engaged Primefort for cybersecurity vulnerability assessment and penetration testing services. We amazed work done by Sriram and team with technological and process capability. Sriram and team has demonstrated advanced penetration testing process based on threat level and business need.',
      author: 'IZAPY',
      designation: 'Leading Cybersecurity Firm , Singapore',
      imagePath: '/images/testi/5.jpg',
    },
  },
};
