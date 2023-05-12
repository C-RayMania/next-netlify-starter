import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Broveer's Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          This website is under construction. Please come back in a few days.
    <br>Please go to my <a href="https://www.youtube.com/@Broveer">YouTube Channel</a> till this website is complete.
    <br>Thank You
        </p>
      </main>

      <Footer />
    </div>
  )
}
