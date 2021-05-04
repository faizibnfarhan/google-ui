import Head from 'next/head'
import Body from '../components/Body'
import Footer from '../components/Footer'
import Header from '../components/Header'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Google | Pakistan</title>
        <meta name="description" content="google pakistan clone was created using NextJS and Tailwind CSS by Muhammad Faiz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="header">
          <Header/>
      </div>
      <div className="body">
          <Body/>
      </div>
      <div className="footer">
          <Footer/>
      </div>
    </div>
  )
}
