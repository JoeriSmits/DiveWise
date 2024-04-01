import { Html, Head, Main, NextScript } from 'next/document';
import { JSX } from 'react/jsx-runtime';

const Document = (): JSX.Element => {
    return (
        <Html lang='nl'>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
                <meta name="robots" content="noindex,nofollow" />
            </Head>
            <body className='text-neutral-700'>
                <Main />
                <NextScript />
            </body>
        </Html >
    )
}

export default Document;