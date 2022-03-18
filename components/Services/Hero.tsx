import ServiceHero from 'components/ServiceHero';

const Hero = ({ title, description, imagePath }) => {
  return (
    <ServiceHero
      title={title}
      description={description}
      imagePath={imagePath}
    />
  );
};

export default Hero;
