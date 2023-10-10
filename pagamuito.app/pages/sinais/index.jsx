import NavHeader from "../../src/components/headers/NavHeader";
import SinaisContent from "../../src/components/sinais";

import Head from "next/head";

export default function Sinais() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/assets/styles/games/sinais.css" />
      </Head>

      <NavHeader />
      <SinaisContent />
    </>
  );
}
