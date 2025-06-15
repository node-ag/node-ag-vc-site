import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Node.ag | Blockchain VC</title>
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
        <h1 className="text-5xl font-bold">Node.ag</h1>
        <p className="mt-4 text-xl">Empowering Early Blockchain Frontiers</p>
      </main>
    </>
  );
}
