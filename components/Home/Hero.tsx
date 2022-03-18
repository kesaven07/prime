import Typewriter from 'typewriter-effect';
import { Button } from 'components/Button';
import HomeHero from 'components/HomeHero';
import pages from 'data/pages';
import { Text } from 'elements/Text';
import RightArrow from 'public/images/icons/right_arrow.svg';

const Hero = () => {
  return (
    <HomeHero
      title={() => (
        <>
          We Secure Your{' '}
          <Text type='h1' weight='bold'>
            <Typewriter 
              options={{
                strings: ['Enterprises', 'Startups', 'Organizations'],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
                cursor: '',
              }}
            />
          </Text>
        </>
      )}
      description='Making the Digital World a Safer Place!'
      button={
        <Button
          href={pages.contact.path}
          border
          color='$secondary100'
          text='Get in touch'
          icon={RightArrow}
        />
      }
    />
  );
};

export default Hero;
