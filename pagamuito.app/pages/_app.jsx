import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="PagaMuito.App > Saiba a melhor hora para JOGAR e aumente suas chances de GANHAR AGORA! Totalmente GRÁTIS!"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>PagaMuito.App</title>
          <link rel="shortcut icon" href="assets/img/pm.png" type="image/png" />
          {/* Fonts */}
          <link rel="dns-prefetch" href="//fonts.bunny.net" />
          <link
            href="https://fonts.bunny.net/css?family=Nunito"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
            integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
          {/* Scripts */}
          <link
            rel="icon"
            type="image/png"
            href="/assets/pm.png"
            sizes="32x32"
          />
          <link rel="apple-touch-icon" sizes="180x180" href="/assets/pm.png" />
          <link rel="stylesheet" href="assets/app.css" />
          <link rel="stylesheet" href="assets/splide.min.css" />
          <link rel="stylesheet" href="assets/style.css" />
          <link rel="stylesheet" href="assets/cssm.css" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#282834FF" />
          {/* App via widget no android */}
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="slotsbet" />
          <link rel="icon" sizes="512x512" href="/assets/pm.png" />
          {/* App homescreen no ios */}
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          <meta name="apple-mobile-web-app-title" content="slotsbet" />
          <link rel="apple-touch-icon" href="/assets/img/pm.png" />
          <link
            href="/assets/img/pm.png"
            media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link
            href="/assets/img/pm.png"
            media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link
            href="/assets/img/pm.png"
            media="(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)"
            rel="apple-touch-startup-image"
          />
          <link
            href="/assets/img/pm.png"
            media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)"
            rel="apple-touch-startup-image"
          />
          <link
            href="/assets/img/pm.png"
            media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link
            href="/assets/img/pm.png"
            media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)"
            rel="apple-touch-startup-image"
          />
          <link
            href="/assets/img/pm.png"
            media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link
            href="/assets/img/pm.png"
            media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link
            href="/assets/img/pm.png"
            media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link
            href="/assets/img/pm.png"
            media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link rel="stylesheet" href="assets/cssm.css" />
        </>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
