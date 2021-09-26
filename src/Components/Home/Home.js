import React from 'react';
import Head from '../../Helper/Head/Head';
import Feed from '../Feed/Feed';

const Home = () => {
  return (
    <section className="container mainContainer">
      <Head title="Fotos" description="Homepage, with feed photos." />
      <Feed />
    </section>
  );
};

export default Home;
