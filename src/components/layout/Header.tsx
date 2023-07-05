import Image from 'next/image';
import * as React from 'react';
import { slide as Menu } from 'react-burger-menu';

import UnderlineLink from '@/components/links/UnderlineLink';

const links = [
  { href: '/#services', label: 'Services' },
  { href: '/#products', label: 'Products' },
  { href: '/#about-us', label: 'About us' },
  { href: '/#get-in-touch', label: 'Get in touch' },
];

export default function Header() {
  const [isSmallScreen, setIsSmallScreen] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Adjust the breakpoint as per your needs
    };

    // Attach the resize event listener
    window.addEventListener('resize', handleResize);

    // Call handleResize initially to set the initial screen size
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className='righteous fixed top-0 z-50 w-screen border-b border-dashed border-white bg-black'>
      <div className='layout flex h-14 items-center justify-between'>
        <Image src='/images/logo.png' alt='Logo' width={30} height={30} />
        {isSmallScreen ? (
          <Menu pageWrapId='page-wrap' width='280px' right>
            {links.map(({ href, label }) => (
              <UnderlineLink
                href={href}
                className='flex-1'
                key={`${href}${label}`}
              >
                <h4>{label}</h4>
              </UnderlineLink>
            ))}
          </Menu>
        ) : (
          /* Render the non-burger menu here */
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
        )}
      </div>
    </header>
  );
}
