import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Faust.js Speed Run!</title>
      </Head>
      <main>{children}</main>
    </>
  );
}
