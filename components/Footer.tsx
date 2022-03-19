import Link from 'next/link';
import Layout from 'elements/Layout';
import { CSS, styled } from 'stitches.config';
import LogoFull from 'public/images/logos/logo_full.svg';
import Flex from 'elements/Flex';
import { Text } from 'elements/Text';
import services from 'data/services';
import about from 'data/about';
import { Button } from './Button';
import social from 'data/social';
import RightArrow from 'public/images/icons/right_arrow.svg';
import pages from 'data/pages';
import contact from 'data/contact';

const Container = styled('div', {
  marginTop: '$17',
  padding: '$7 0 $3',

  '@bp2': {
    padding: '$10 0 $4',
  },
});

const FooterHeading = ({
  children,
  as,
  className,
  css,
}: {
  children: any;
  as?: any;
  className?: string;
  css?: CSS;
}) => (
  <Text
    as={as}
    type='b4'
    weight='bold'
    css={{ color: '$secondary400', ...css }}
    className={className}
  >
    {children}
  </Text>
);

const FooterLinkList = styled('ul', {
  'li + li': {
    margin: '$2 0',
  },
});

const ContactDetailList = styled('dl', {
  'dt, dl, dd': {
    margin: 0,
  },

  div: {
    maxWidth: '380px',
  },
  '[data-vertical]': {
    flexDirection: 'column',
    gap: '$1',
    marginBottom: '$4',
  },
  '[data-horizontal]': {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    gap: '$4',
    marginBottom: '$3',
  },
});

const ServicesContainer = styled('div', {
  display: 'none',
  '@bp3': {
    display: 'block',
  },
});

const AboutContainer = styled('div', {
  display: 'none',
  '@bp3': {
    display: 'block',
  },
});

const StyledLink = styled('a', {
  position: 'relative',
  cursor: 'pointer',

  '&:after': {
    position: 'absolute',
    content: '',
    display: 'block',
    width: '100%',
    height: '1px',
    marginTop: '.25rem',
    background: 'currentColor',
    transform: 'scaleX(0)',
    transformOrigin: 'left',
    transition: 'transform .2s cubic-bezier(.4,.6,.6,1)',
  },
  '&:hover': {
    '&:after': {
      transform: 'scaleX(1)',
    },
  },
});

const Footer = () => {
  const StyledLogoFull = styled(LogoFull, {
    fill: '$white',
    width: '163px',
    height: '41px',

    '@bp2': {
      width: '163px',
      height: '41px',
    },
  });

  const socialIcons = social.map(({ name, url, icon }) => {
    const Icon = styled(icon, {
      width: '32px',
      height: '32px',
      fill: '$white',
    });

    return (
      <li key={url}>
        <a href={url}>
          <Icon alt={name} />
        </a>
      </li>
    );
  });

  return (
    <Layout css={{}}>
      <Container>
        <Link href='/'>
          <a>
            <StyledLogoFull css={{ marginBottom: '$3' }} />
          </a>
        </Link>
        <Flex
          gap='$12'
          jc='space-between'
          css={{ '@bp6': { flexDirection: 'column' } }}
        >
          <div>
            <ContactDetailList>
              <div data-vertical className='group'>
                <dd>
                  <Text type='b6'>
                    Deloitte is a leading global provider of audit and
                    assurance, consulting, financial advisory, risk advisory,
                    tax, and related services. With more than 150 years of hard
                    work and commitment to making a real difference, our
                    organization has grown in scale and diversity—approximately
                    286,000 people in 150 countries and territories, providing
                    these services—yet our shared culture remains the same.
                  </Text>
                </dd>
              </div>
            </ContactDetailList>
          </div>
          <ServicesContainer css={{ marginTop: -70, width: '33rem' }}>
            <FooterHeading
              as='h3'
              css={{ marginBottom: '$space$4', fontSize: '14px' }}
            >
              Services
            </FooterHeading>
            <FooterLinkList>
              {Object.values(services).map(({ title, path }) => (
                <li key={path}>
                  <Link href={path}>
                    <StyledLink href={path}>
                      <Text type='b6'>{title}</Text>
                    </StyledLink>
                  </Link>
                </li>
              ))}
            </FooterLinkList>
          </ServicesContainer>
          <AboutContainer css={{ marginTop: -70, width: '13rem' }}>
            <FooterHeading
              as='h3'
              css={{ marginBottom: '$space$4', fontSize: '14px' }}
            >
              About Us
            </FooterHeading>
            <FooterLinkList>
              {Object.values(about).map(({ title, path }) => (
                <li key={title}>
                  <Link href={path}>
                    <StyledLink href={path}>
                      <Text type='b6'>{title}</Text>
                    </StyledLink>
                  </Link>
                </li>
              ))}
            </FooterLinkList>
          </AboutContainer>
          <div style={{ marginTop: '-70px' }}>
            <Button
              href={pages.contact.path}
              small
              border
              text='Contact Us'
              icon={RightArrow}
              css={{ marginBottom: '$5' }}
            />
            <Flex as='ul' spaceBetweenCenter css={{ maxWidth: '180px' }}>
              {socialIcons}
            </Flex>
            <ContactDetailList>
              <div data-vertical className='group'>
                <FooterHeading
                  className='address'
                  as='dt'
                  css={{ marginBottom: '$space$4', fontSize: '14px' }}
                >
                  Headquarters
                </FooterHeading>
                <dd>
                  <Text
                    as='a'
                    href={contact.location.chennai.locationLink}
                    type='b6'
                  >
                    {contact.location.chennai.address}
                  </Text>
                </dd>
              </div>
              <div data-horizontal className='group'>
                <FooterHeading
                  as='dt'
                  css={{ marginBottom: '$space$4', fontSize: '14px' }}
                >
                  Email
                </FooterHeading>
                <dd>
                  <Text as='a' type='b6' href={`mailto:${contact.emails.info}`}>
                    {contact.emails.info}
                  </Text>
                </dd>
              </div>
            </ContactDetailList>
          </div>
        </Flex>
        <div style={{ whiteSpace: 'nowrap' }}>
          <Text as='p' type='b6' css={{ marginTop: '$3', textAlign: 'center' }}>
            <Link href='#'>
              <a> Privacy Policy | Website Privacy Policy</a>
            </Link>
          </Text>
        </div>
        <Text as='p' type='b6' css={{ marginTop: '$3', textAlign: 'center' }}>
          © Copyright - Primefort
        </Text>
      </Container>
    </Layout>
  );
};

export default Footer;
