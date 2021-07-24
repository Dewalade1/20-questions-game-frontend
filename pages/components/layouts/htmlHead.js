import React from 'react';

import Head from 'next/head';

const HtmlHead = () => {
    return(
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="author" content="Ade-Onojobi Oluwadewalade" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=yes" />
                <meta name="description" content="20 Questions is a 2-player game where a player thinks of a word and the other player attempts to guess the correct word." />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="" />
                <meta property="og:url" content="" />
                <meta property="og:image" content="" />
                <meta property="og:description" content="20 Questions is a 2-player game where a player thinks of a word and the other player attempts to guess the correct word." />
                <meta property="og:site_name" content="20 Questions" />
                <meta name="twitter:image:alt" content="20 Questions" />

                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>

                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />

                <link rel="apple-touch-icon" sizes="180x180" href="https://res.cloudinary.com/hellodewa/image/upload/v1622723336/expeditemovers/images/sys/flavicons/apple-touch-icon_u5ydmw.png"/>
                <link rel="android-chrome-icon" type="image/png" sizes="512x512" href="https://res.cloudinary.com/hellodewa/image/upload/v1622723337/expeditemovers/images/sys/flavicons/android-chrome-512x512_eb6zdq.png"/>
                <link rel="android-chrome-icon" type="image/png" sizes="192x192" href="https://res.cloudinary.com/hellodewa/image/upload/v1622723336/expeditemovers/images/sys/flavicons/android-chrome-192x192_g6ljuu.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="https://res.cloudinary.com/hellodewa/image/upload/v1622723336/expeditemovers/images/sys/flavicons/favicon-32x32_bp6pr1.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="https://res.cloudinary.com/hellodewa/image/upload/v1622723336/expeditemovers/images/sys/flavicons/favicon-16x16_d6skmh.png"/>
                {/* <link rel="manifest" href="/site.webmanifest"/> */}
                <link rel="shortcut icon" type="image/png" href="https://res.cloudinary.com/hellodewa/image/upload/v1622723336/expeditemovers/images/sys/flavicons/android-chrome-192x192_g6ljuu.png" />
                <link rel="icon" type="image/png" href="https://res.cloudinary.com/hellodewa/image/upload/v1622723336/expeditemovers/images/sys/flavicons/android-chrome-192x192_g6ljuu.png" />

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&family=Otomanopee+One&family=Roboto+Condensed:wght@300;400&display=swap" rel="stylesheet" />
            </Head>
        </>
    )
}

export default HtmlHead