import React, { useEffect, useState } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { MdxLink } from 'gatsby-theme-i18n';
import { useLocation } from '@reach/router';
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies';

import Header from './Header';
import HeaderLight from './HeaderLight';
import Footer from './Footer';
import ScrollToTop from '../ScrollToTop';
import Banner from '../Banner';
import MDXButton from '../MDXButton';

interface LayoutProps {
  children: React.ReactNode;
  theme?: string;
}

const components = {
  a: MdxLink,
  MDXButton,
};

export default function Layout(props: LayoutProps) {
  const location = useLocation();
  const [cookieClicked, setCookieClicked] = useState(false);

  useEffect(() => {
    const learnMoreAnchor = document.querySelector('.cn-learn-more');
    learnMoreAnchor?.addEventListener('click', () => {
      setCookieClicked(!cookieClicked);
    });
    const acceptCookieButton = document.querySelector('.cm-btn-success');
    acceptCookieButton?.addEventListener('click', () => {
      initializeAndTrack(location);
    });
  }, [cookieClicked]);

  return (
    <>
      <Banner />
      {props.theme === 'light' ? <HeaderLight /> : <Header />}
      <main className="">
        <ScrollToTop />
        <MDXProvider components={components}>{props.children}</MDXProvider>
      </main>
      <Footer />
    </>
  );
}
