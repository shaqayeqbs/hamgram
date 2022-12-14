import Head from "next/head";
import Hamgram from "../components/hamgram";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Hamgram</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="lg:grid gap-5 grid-cols-2 ">
        <Hamgram />
        <Hamgram />
        <Hamgram />
        <Hamgram />
      </div>
      <Link href="/chart">
        <a className="block text-center w-44 mx-auto bg-sky-600 p-4 my-20 rounded-lg text-white text-xl hover:bg-cyan-400">صفحه دوم</a>
      </Link>
    </div>
  );
}
