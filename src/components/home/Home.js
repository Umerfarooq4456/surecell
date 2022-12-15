import React from 'react';
import Covragepart from './Covragepart';
import Footer from '../footer/Footer';
import Slpart from './Slpart';
import Sectionthree from './Sectionthree';
import Section1 from './Section1';
import Navbar from '../../components/Navbar';

function Home() {
  return (
    <>
    <Navbar/>
      <Section1/>
      <Covragepart/>
      <Sectionthree/>
      <Slpart/>
      <Footer/>
    </>
  );
}

export default Home;
