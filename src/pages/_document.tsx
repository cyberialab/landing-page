import { Head, Html, Main, NextScript } from 'next/document';

import { withBase } from '@/lib/helper';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link
          rel='preload'
          href={withBase('/fonts/inter-var-latin.woff2')}
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
