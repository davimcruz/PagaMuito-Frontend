import AppHeader from "../src/components/headers/AppHeader";
import HomeContent from "../src/components/home";
import Menu from "../src/components/home/menu";

import Head from "next/head";

export default function Index() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/assets/styles/app.css" />
        <link rel="stylesheet" href="/assets/styles/splide.min.css" />
        <link rel="stylesheet" href="/assets/styles/style.css" />
        <link rel="stylesheet" href="/assets/styles/cssm.css" />
      </Head>
      
      <AppHeader />

      <div style="max-width: 700px;margin-left: auto; margin-right: auto;">
        <div id="appCapsule">
          <HomeContent />
          <Menu />
        </div>
      </div>
    </>
  );
}
