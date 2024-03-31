import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Mercadinho Bit</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <div>Mercadinho bit</div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero quos commodi soluta perspiciatis, veritatis unde aliquid, exercitationem dignissimos omnis repellat minus sunt illo ullam deserunt, accusantium minima ex illum? Expedita?</p>
      </main>
    </>
  );
}
