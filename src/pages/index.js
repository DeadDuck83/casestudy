import Head from 'next/head'
import AvalonAnimation from '../components/AvalonAnimation';
import GsapLineAnimation from '../components/GsapLineAnimation/GsapLineAnimation';
import ImageBgFull from '../components/ImageBgFull';
import LargeBackgroundSection from '../components/LargeBackgroundSection';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Derek Moore | Stuff</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='box-border'>
      <LargeBackgroundSection />
              <h1>
          Page title
        </h1>
        <ImageBgFull />
        <GsapLineAnimation />


        
      </main>

    </div>
  )
}
