import * as React from 'react';

import Header from '@/components/layout/Header';
import Hero from '@/components/layout/Hero';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <Header />
        <Hero />
        <section className='h-screen'></section>
      </main>
    </Layout>
  );
}
