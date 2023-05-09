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
    <header className='sticky top-0 z-50 bg-black'>
      <div className='layout flex h-14 items-center'>
        <nav className='min-w-full'>
          <ul className='space-between flex min-w-full max-w-7xl justify-between text-white'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnderlineLink href={href} className='flex-1 font-bold'>
                  <h5>{label}</h5>
                </UnderlineLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
