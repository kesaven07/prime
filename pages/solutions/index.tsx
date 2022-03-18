import Head from 'next/head';
import Header from 'components/Header';
import services from 'data/solutions';
import Hero from 'components/Services/Hero';
import Footer from 'components/Footer';
import Intro from 'components/Services/Intro';
import Features from 'components/Services/Features';
import CTA from 'components/Sections/CTA';
import CustomerStory from 'components/Services/CustomerStory';

const Solutions = () => {
  const data = services.Managed;

  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Hero
        title='Managed Security Services'
        description={data.description}
        imagePath={data.imagePath}
      />
      <Intro
        benefits={services.Managed.benefits}
        text={data.intro}
        imagePath='/images/mss1.svg'
      />
      <Features
        title='We specialize in various aspects of Web Security'
        description='Primefort Managed Security Services may also help your business accomplish previously unachievable goals, such as:
'
        features={Object.values(data.features)}
      />
      <CustomerStory
        title={data.customerStory.title}
        text={data.customerStory.text}
        imagePath={data.customerStory.imagePath}
      />
      <br></br>
      <br></br>

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

export default Solutions;
