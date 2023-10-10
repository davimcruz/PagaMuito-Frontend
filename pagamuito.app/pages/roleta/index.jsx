import NavHeader from "../../src/components/headers/NavHeader";
import RoletaContent from "../../src/components/roleta";

import Head from "next/head";

export default function Roleta() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/assets/styles/games/roleta.css" />
      </Head>

      <NavHeader />
      <RoletaContent />
    </>
  );
}
