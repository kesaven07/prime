import Head from 'next/head';
import Header from 'components/Header';
import Hero from 'components/Careers/Hero';
import Footer from 'components/Footer';
import CTA from 'components/Sections/CTA';
import Intro from 'components/Careers/Intro';
import Value from 'components/Careers/Value';
import Perks from 'components/Careers/Perks';
import careerPerks from 'data/careerPerks';
import contact from 'data/contact';
import { Text } from 'elements/Text';

const Careers = () => {
  return (
    <>
      <Head>
        <title>Careers</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Hero
        title='Hack With Us!'
        description='If you are not afraid of a challenge, and are ready to further your career while working with people who are the best at what they do, look no further.'
      />
      <Intro
        title='Generally, a job means a boring 9-5 job and frankly most people hate it.'
        text='At Primefort we challenge ourselves every day and set new targets higher than yesterday. Cyber Security is a very dynamic field where continuous learning is very important. It excites us to learn something new everyday and secure organizations and their innovations on a daily basis.'
        imagePath='/images/careers_intro.jpg'
      />
      <Value
        title='Our Name, Our Value'
        text='The name Primefort stands for itself, Prime is something of importance and Fort is a place which is for guarding. Meaning “we take important decisions in guarding your business perimeters.”'
        imagePath='/images/careers_name.png'
      />
      <Perks
        title='Perks of joining PrimeFort'
        text='At Primefort there is no hegemony and boring cultures like daily standoffs. We believe in collaborative working for the greater good. '
        perks={careerPerks}
      />
      <CTA
        imagePath='/images/new_home.svg'
        text={
          <>
            <Text
              className='text'
              as='p'
              type='b1'
              css={{
                marginBottom: '42px',
                maxWidth: '500px',
                width: '100%',
                a: {
                  textDecoration: 'underline',
                },
              }}
            >
              Are you someone who loves working individually contributing to the
              team? We think you’re at the perfect place. Apply now at:{' '}
              <a href={`mailto:${contact.emails.careers}`}>
                {contact.emails.careers}
              </a>
            </Text>
          </>
        }
      />
      <Footer />
    </>
  );
};

export default Careers;
