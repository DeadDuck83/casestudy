import React from 'react'
import Head from 'next/head';
import Link from 'next/link';
import SplitContent from '../../components/SplitContent';


import PropTypes from 'prop-types'
import AvalonAnimation from '../../components/AvalonAnimation';
import CaseStudies from '../../components/CaseStudies/CaseStudies';

const work = props => {

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
  <AvalonAnimation />

 <CaseStudies />
  </section>
    </div>
  )
}

work.propTypes = {

}

export default work
