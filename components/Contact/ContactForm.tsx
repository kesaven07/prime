import { styled } from 'stitches.config';
import Layout from 'elements/Layout';
import SectionContainer from 'elements/SectionContainer';
import { Text } from 'elements/Text';
import ParagraphText from 'elements/ParagraphText';
import ResponsiveFlex from 'elements/ResponsiveFlex';
import Form from 'components/Form';
import CommonIcon from 'public/images/icons/common_icon.svg';
import contact from 'data/contact';
import Flex from 'elements/Flex';
import social from 'data/social';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Contact from 'public/images/icons/contact.svg';
import location from 'public/images/icons/location.svg';

const Container = styled(SectionContainer, {
  paddingBottom: '$10',
});

const InnerContainer = styled(ResponsiveFlex, {
  display: 'flex',
  backgroundColor: '$primary900_85',
  marginBottom: '$10',

  '@bp1': {
    padding: '$8 $6',
  },

  '@supports (backdrop-filter: blur(1px))': {
    backdropFilter: 'blur($blurs$5)',
    backgroundColor: '$primary900_35',
  },
});

const LeftContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

const RightContainer = styled('div');

const ContactContainer = styled('div', {
  maxWidth: '300px',
  marginTop: '$9',
});

const socialIcons = social.map(({ name, url, icon }) => {
  const Icon = styled(icon, {
    width: '32px',
    height: '32px',
    fill: '$secondary200',
  });

  return (
    <li key={url}>
      <a href={url}>
        <Icon alt={name} />
      </a>
    </li>
  );
});

const ContactInfo = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '$4',
});

const contactInfo = [
  { icon: Contact, info: contact.emails.info, link: `mailto:${contact.emails.info}` },
  {
    icon: location,
    info: contact.location.chennai.address,
    link: contact.location.chennai.locationLink,
  },
];

const ContactForm = ({ title, description, backgroundImagePath }) => {
  return (
    <Container
      css={{
        backgroundImage: `linear-gradient(90deg, $primary900_85, $primary900_85), url(${backgroundImagePath})`,
        backgroundSize: 'cover',
      }}
      aria-labelledby='contact_form_title'
    >
      <Layout type={{ '@bp6': 'fullWidth' }}>
        <InnerContainer equalWidth>
          <LeftContainer css={{ padding: '$5 $5' }}>
            <Text id='contact_form_title' as='h1' type='h6'>
              {title}
            </Text>
            <ParagraphText
              type='b4'
              css={{ marginTop: '$3', color: '$secondary200' }}
            >
              {description}
            </ParagraphText>
            <ContactContainer>
              {contactInfo.map((contact) => {
                const Icon = styled(contact.icon, {
                  width: '20px',
                  height: '20px',
                  flexShrink: '0',
                  fill: 'white',
                  transform: 'translateY(5px)',
                });
                return (
                  <ContactInfo key={contact.info} css={{ marginTop: '$4' }}>
                    <Icon />
                    <Text
                      as='a'
                      href={contact.link}
                      type='b4'
                      css={{ color: '$secondary100' }}
                    >
                      {contact.info}
                    </Text>
                  </ContactInfo>
                );
              })}
            </ContactContainer>
            <Flex
              as='ul'
              spaceBetweenCenter
              css={{
                maxWidth: '180px',
                marginTop: '$12',
                '@bp3': { marginTop: 'auto' },
              }}
            >
              {socialIcons}
            </Flex>
          </LeftContainer>
          <RightContainer>
            <Form />
          </RightContainer>
        </InnerContainer>
      </Layout>
    </Container>
  );
};

export default ContactForm;
