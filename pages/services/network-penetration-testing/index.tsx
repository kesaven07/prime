import Head from 'next/head';
import Header from 'components/Header';
import services from 'data/services';
import Hero from 'components/Services/Hero';
import Footer from 'components/Footer';
import Features from 'components/Services/Features';
import Values from 'components/Services/Values';
import CTA from 'components/Sections/CTA';
import CustomerStory from 'components/Services/CustomerStory';
import Testimonial from 'components/Services/Testimonial';

const NetworkPenetrationTesting = () => {
  const data = services.networkPentesting;

  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Hero
        title={data.title}
        description={data.description}
        imagePath={data.imagePath}
      />
      <Features
        title='What We Offer ?'
        description='The most efficient and successful ways for doing security assessments are defined by global standards and guidelines. Based on the business needs and system design, they also differentiate and recommend evaluation approaches and procedures.'
        features={Object.values(data.features)}
      />
      <Values
        title='Learn why Primefort is the right choice for you'
        values={data.values}
      />
      <CustomerStory
        title={data.customerStory.title}
        text={data.customerStory.text}
        imagePath={data.customerStory.imagePath}
      />
      <Testimonial
        text={data.testimonial.text}
        author={data.testimonial.author}
        designation={data.testimonial.designation}
        imagePath={data.testimonial.imagePath}
      />
      <CTA
        text='We believe great things can start with a conversation. We would love to hear from you.'
        showButton
        imagePath='/images/new_home.svg'
        css={{
          '@bp7': {
            paddingTop: 0,
          },
        }}
      />
      <Footer />
    </>
  );
};

export default NetworkPenetrationTesting;
