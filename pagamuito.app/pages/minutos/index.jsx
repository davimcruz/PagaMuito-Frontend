import AppHeader from "../../src/components/headers/AppHeader";
import Menu from "../../src/components/home/menu";
import MinutosContent from "../../src/components/minutos";

import Head from "next/head";

export default function Minutos() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/assets/styles/app.css" />
        <link rel="stylesheet" href="/assets/styles/splide.min.css" />
        <link rel="stylesheet" href="/assets/styles/style.css" />
        <link rel="stylesheet" href="/assets/styles/cssm.css" />
      </Head>
      
      <AppHeader />

      <div style={{maxWidth: 700, marginLeft: "auto", marginRight: "auto"}}>
        <div id="appCapsule">
          <MinutosContent />
          <Menu />
        </div>
      </div>
    </>
  );
}
