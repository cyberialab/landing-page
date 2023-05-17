import Image from 'next/image';
import * as React from 'react';

import UnderlineLink from '@/components/links/UnderlineLink';

const links = [
  { href: '/', label: 'WORK' },
  { href: '/', label: 'OUR STACK' },
  { href: '/', label: 'PRODUCTS' },
  { href: '/', label: 'SERVICES' },
  { href: '/', label: 'ABOUT US' },
  { href: '/', label: 'CONTACT US' },
];

export default function Header() {
  return (
    <header className='sticky top-0 z-50 border-b border-dashed border-white bg-black'>
      <div className='layout flex h-14 items-center justify-between'>
        <Image src='/images/logo.png' alt='Logo' width={30} height={30} />
        <nav className=''>
          <ul className='space-between flex min-w-full max-w-7xl justify-between gap-10 text-white'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnderlineLink href={href} className='flex-1'>
                  <h4>{label}</h4>
                </UnderlineLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
