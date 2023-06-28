import Head from "next/head";
import FrontPage from "~/components/frontPage";
import HomePage from "~/components/homePage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Indeed Clone</title>
        <meta name="description" content="Software engineer jobs in dhaka bangladesh" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomePage />
      </main>
    </>
  );
}
