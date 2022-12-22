import React from 'react';
import Covragepart from './Covragepart';
import Footer from '../footer/Footer';
import Slpart from './Slpart';
import Sectionthree from './Sectionthree';
import Section1 from './Section1';
import Navbar from '../../components/Navbar';
import Unlimited from './Unlimited';
import Nationwide from './Nationwide';
import Howitworks from './howitworks';
import Comma from './Comma';
function Home() {
  return (
    <>
    <Navbar/>
      <Section1/>
      <Unlimited/>
      <Nationwide/>
      <Covragepart/>
      <Howitworks/>
      <Comma/>
      <Slpart/>
      <Footer/>
    </>
  );
}

export default Home;
