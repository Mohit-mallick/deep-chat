import React, { useEffect, useState } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import StartPanel from './startPanel/startPanel';
import Features from './features/features';
import ExploreButton from './exploreButton/exploreButton';
import FadeInNav from './utils/fadeInNav';
import './index.css';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  
  useEffect(() => {
    // Force content to be visible after page load
    const contentElement = document.querySelector('.homepage-content');
    if (contentElement) {
      // First ensure it's visible
      contentElement.style.opacity = '1';
      contentElement.style.display = 'block';
      
      // Then add animation class
      setTimeout(() => {
        contentElement.classList.add('fade-in');
      }, 100);
    }
  }, []);
  
  return (
    <Layout title={siteConfig.title} description="A fully customizable AI chat component">
      <Head>
        <html className="homepage" />
      </Head>
      <FadeInNav></FadeInNav>
      <div className="homepage-content" style={{opacity: 0}}>
        <StartPanel></StartPanel>
        <Features></Features>
        <ExploreButton></ExploreButton>
      </div>
    </Layout>
  );
}
