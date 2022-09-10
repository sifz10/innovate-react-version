import React from 'react';
import ReactDOM from 'react-dom/client';
import Banner from './components/banner/Banner';
import Card from './components/card/Card';
import Experience from './components/experience/Experience';
import Navbar from './components/navbar/Navbar';
import Work from './components/work/Work';
import Count from './components/count/Count';
import Sponsors from './components/sponsors/Sponsors';
import Customers from './components/customers/Customers';
import Talk from './components/talk/Talk';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <Navbar />
    <Banner />
    <Card />
    <Experience />
    <Work />
    <Count />
    <Sponsors />
    <Customers />
    <Talk />
    </>
);

