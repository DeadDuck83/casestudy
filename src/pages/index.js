import Head from 'next/head';
import AvalonAnimation from '../components/AvalonAnimation';
import GsapLineAnimation from '../components/GsapLineAnimation/GsapLineAnimation';
import ImageBgFull from '../components/ImageBgFull';
import LargeBackgroundSection from '../components/LargeBackgroundSection';
import SplitContent from '../components/SplitContent';
import UiUx from '../components/UiUx/UiUx';
import Intro from '../components/Intro';
import Skills from '../components/Skills';

export default function Home() {
  return (
    <div>
      <Head>
        <title>You made it!</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='box-border'>
        <LargeBackgroundSection />
        <Intro />

        <Skills />

        {/* <GsapLineAnimation /> */}
        <SplitContent imageOn='right' />
        <UiUx />
        <section>
          <div className="contact">
          <h3>Contact</h3>
            <p>do I need this?</p>
          </div>
        </section>
        <section>
          <div className="blog">
            <h3>Blog</h3>
            <p>Do I need this either?</p>
          </div>
        </section>
      </main>
    </div>
  );
}
