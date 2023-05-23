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
        <section className='flex h-screen w-screen bg-black text-white'>
          <div className='flex h-screen w-screen flex-col items-center justify-center gap-10'>
            <h1 className='text-6xl font-bold'>CyberIA LABS</h1>
            <h2 className='text-2xl font-bold'>We are prompt engineering</h2>
          </div>
        </section>
      </main>
    </Layout>
  );
}
