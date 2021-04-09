import React from 'react'
import Head from 'next/head';
import Link from 'next/link';
import SplitContent from '../components/SplitContent';


import PropTypes from 'prop-types'

const work = props => {
  const project1 = {
    caseStudy: {
      headline: 'Case Studies',
      body: 'Case studies are a great way to let people peak behind the curtain to learn more about projects… because some of the most important steps that are taken in any project are the ones that most people never see or hear about but are the most interesting and educational. Here I provide several examples of UX / UI and Development.',
      link: '/work',
      linkText:'See all my case studies',
      imageOn: 'right',
      imageUrl: 'https://source.unsplash.com/1000x800/?computer,programming',
    }
  }
  const project2 = {
    caseStudy: {
      headline: 'Case Studies',
      body: 'Case studies are a great way to let people peak behind the curtain to learn more about projects… because some of the most important steps that are taken in any project are the ones that most people never see or hear about but are the most interesting and educational. Here I provide several examples of UX / UI and Development.',
      link: '/work',
      linkText:'See all my case studies',
      imageOn: 'left',
      imageUrl: 'https://source.unsplash.com/1000x800/?nature,teamwork',
    }
  }
  const project3 = {
    caseStudy: {
      headline: 'Case Studies',
      body: 'Case studies are a great way to let people peak behind the curtain to learn more about projects… because some of the most important steps that are taken in any project are the ones that most people never see or hear about but are the most interesting and educational. Here I provide several examples of UX / UI and Development.',
      link: '/work',
      linkText:'See all my case studies',
      imageOn: 'right',
      imageUrl: 'https://source.unsplash.com/1000x800/?design,open',
    }
  }
  const project4 = {
    caseStudy: {
      headline: 'Case Studies',
      body: 'Case studies are a great way to let people peak behind the curtain to learn more about projects… because some of the most important steps that are taken in any project are the ones that most people never see or hear about but are the most interesting and educational. Here I provide several examples of UX / UI and Development.',
      link: '/work',
      linkText:'See all my case studies',
      imageOn: 'left',
      imageUrl: 'https://source.unsplash.com/random',
    }
  }
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
  <SplitContent content={project1} />
  <SplitContent content={project2} />
  <SplitContent content={project3} />
  <SplitContent content={project4} />
  </section>
    </div>
  )
}

work.propTypes = {

}

export default work
