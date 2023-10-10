import MinesContent from "../../src/components/mines";
import NavHeader from "../../src/components/headers/NavHeader";

import Head from "next/head";

export default function Mines() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/assets/styles/games/mines.css" />
      </Head>
      
      <NavHeader />
      <MinesContent />
    </>
  );
}
