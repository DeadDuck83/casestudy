import React from 'react'
import Head from 'next/head';
import Link from 'next/link';
import SplitContent from '../../components/SplitContent';
import Intro from '../../components/Intro';


import PropTypes from 'prop-types'
import AvalonAnimation from '../../components/AvalonAnimation';
import CaseStudies from '../../components/CaseStudies/CaseStudies';

const work = () => {
  const caseStudyIntro = {headline: "Why are case studies important?", body: "The process of a project can be infinitely more complicated than the solution portrays. There are a lot of problems that needed to be solved and new ones that arise during that process. I have always found that more interesting than the final presentation. Sometimes design can suffer from decisions made or scope creeps or whatever. The abiility to adapt and solve the problems in front of you give a much better presentation of how someone works and what their process looks like.", color: "var(--sea-foam)"};

  return (
    <div>
    <Head>
        <title>My Case Studies!</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      Case Studies
      <Link href="/">
  back
  </Link>
  <section>
  <Intro content={caseStudyIntro} />

 <CaseStudies />
  </section>
    </div>
  )
}

work.propTypes = {

}

export default work
