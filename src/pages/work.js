import React from 'react'
import Head from 'next/head';
import Link from 'next/link';
import SplitContent from '../components/SplitContent';


import PropTypes from 'prop-types'

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
  <SplitContent imageOn='right' />
  <SplitContent imageOn='left' />
  <SplitContent imageOn='right' />
  <SplitContent imageOn='left' />
  </section>
    </div>
  )
}

work.propTypes = {

}

export default work
