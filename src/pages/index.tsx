import * as React from 'react';

import AboutUs from '@/components/layout/AboutUs';
import GetInTouch from '@/components/layout/GetInTouch';
import Header from '@/components/layout/Header';
import Hero from '@/components/layout/Hero';
import Layout from '@/components/layout/Layout';
import Products from '@/components/layout/Products';
import Services from '@/components/layout/Services';
import Seo from '@/components/Seo';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main id='page-wrap'>
        <Header />
        <Hero />
        <Services />
        <Products />
        <AboutUs />
        <GetInTouch />
      </main>
    </Layout>
  );
}
