import Head from 'next/head'
import Sidebar from '../components/Sidebar';


export default function Home() {
  return (
    <div >
      <Head>
        <title>Whatsapp 2.0</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/w2.ico" />
      </Head>
  <Sidebar/>
      <h1>hello whatsapp</h1>
    </div>
  );
}
