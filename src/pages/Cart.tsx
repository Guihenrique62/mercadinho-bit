import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Cart() {    
  return (
    <>
      <Head>
        <title>Mercadinho Bit</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>Mercadinho bit</div>
        <p>Carrinho:</p>
      </main>
    </>
  );
}
