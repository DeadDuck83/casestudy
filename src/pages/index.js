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
  const homepageContent = {
    caseStudy: {
      headline: 'Case Studies',
      body: 'Case studies are a great way to let people peak behind the curtain to learn more about projects… because some of the most important steps that are taken in any project are the ones that most people never see or hear about but are the most interesting and educational. Here I provide several examples of UX / UI and Development.',
      link: '/work',
      linkText:'See all my case studies',
      imageOn: 'right',
      imageUrl: '/images/UX-w.jpeg',
    }
  }

  return (
    <div>
      <Head>
        <title>You made it!</title>
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <main className='box-border'>
        <LargeBackgroundSection />
        <Intro />

        <Skills />

        {/* <GsapLineAnimation /> */}
        <SplitContent content={homepageContent} />
        <UiUx />
        <section>
          <div className="contact">
            <h3>Contact</h3>
            <p>do I need this?</p>
            <p>Social Media is needed</p>
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
