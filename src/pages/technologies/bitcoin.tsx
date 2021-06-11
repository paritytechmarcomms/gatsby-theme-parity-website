import React from 'react';
import { graphql } from 'gatsby';
import { useIntl } from 'react-intl';
import { LocalizedLink } from 'gatsby-theme-i18n';
import Layout from '../../components/layouts/Layout';
import SEO from '../../components/layouts/SEO';
import Button from '../../components/Button';
import CardNoLink from '../../components/CardNoLink';
import FooterCTA from '../../components/FooterCTA';
import Social from '../../components/Social';
import parityBitcoinLogo from '../../images/logo-parity-bitcoin.svg';
import introImageOne from '../../images/image-5.jpg';
import introImageTwo from '../../images/image-3.jpg';
import imageOne from '../../images/blog-parity-bitcoin.png';

interface BitcoinPageProps {
  data: any;
}

export default function BitcoinPage({ data }: BitcoinPageProps) {
  const intl = useIntl();
  const githubBitcoin = 'https://github.com/paritytech/parity-bitcoin';

  return (
    <Layout>
      <SEO title="Parity Bitcoin Client" />
      <section className="md:bg-hero-pattern bg-cover bg-center bg-fixed -mt-32 xl:-mt-36 md:-mb-32">
        <div className="md:h-screen md:min-h-heroMinLg">
          <div className="container h-full text-center max-w-4xl pt-48 md:pt-0 pb-16 px-2 md:flex md:flex-col md:justify-center md:items-center md:w-2/3">
            <img className="mx-auto w-64 h-auto py-4" src={parityBitcoinLogo} alt="Parity Bitcoin Client Logo" />
            <h4 className="font-normal text-2xl md:text-3xl mx-auto py-10 max-w-lg">
              {intl.formatMessage({ id: 'bitcoin-page-title' })}
            </h4>
            <Button link="/technologies/bitcoin/#download">
              {intl.formatMessage({ id: 'bitcoin-page-hero-cta' })}
            </Button>
            <p className="font-normal text-sm mt-4">
              {intl.formatMessage({ id: 'bitcoin-page-hero-sub-cta-one' })}{' '}
              <a href="/technologies/bitcoin/#intro" className="text-parityPink">
                {intl.formatMessage({ id: 'bitcoin-page-hero-sub-cta-two' })}
              </a>{' '}
              {intl.formatMessage({ id: 'bitcoin-page-hero-sub-cta-three' })}
            </p>
          </div>
        </div>
      </section>
      <section className="bg-textDark md:-mt-24">
        <div className="container">
          <div className="flex flex-col md:flex-row md:max-w-screen-md md:mx-auto py-4 md:py-7">
            <div className="flex flex-col items-center md:flex-row py-4">
              <a className="mb-4 md:mb-0" href={githubBitcoin} target="_blank" rel="noreferrer">
                <svg
                  className="w-auto h-12"
                  fill="white"
                  role="img"
                  xmlns="http://www.w3.org/1999/xlink"
                  viewBox="5 5 24 24"
                >
                  <path d="M18.944 26.128H13.743s.007-1.544 0-2.602c-3.56.766-4.553-1.951-4.553-1.951-.65-1.301-1.301-1.951-1.301-1.951-1.301-.773 0-.65 0-.65 1.301 0 1.951 1.301 1.951 1.301 1.142 1.938 3.173 1.626 3.903 1.301 0-.65.285-1.634.65-1.951-2.841-.32-5.207-1.951-5.207-5.204s.653-3.903 1.304-4.553c-.131-.321-.676-1.506.02-3.252 0 0 1.278 0 2.579 1.951.645-.645 2.602-.65 3.253-.65.649 0 2.607.006 3.251.65 1.301-1.951 2.582-1.951 2.582-1.951.695 1.747.152 2.932.02 3.252.65.65 1.301 1.301 1.301 4.553s-2.362 4.884-5.204 5.204c.366.317.65 1.437.65 1.951l.002 4.552z" />
                </svg>
              </a>
              <p className="font-normal text-sm text-parityGray text-center md:text-left mx-8 mb-0">
                {intl.formatMessage({ id: 'bitcoin-page-github-description' })}{' '}
                <a href={githubBitcoin} target="_blank" rel="noreferrer">
                  {intl.formatMessage({ id: 'bitcoin-page-github-cta' })}
                </a>
              </p>
            </div>
            <div className="flex flex-col items-center md:flex-row py-4 md:border-l md:pl-12">
              <a className="mb-4 md:mb-0" href={data.site.siteMetadata.element} target="_blank" rel="noreferrer">
                <svg className="h-12 w-auto" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M25.28 10.88C25.28 9.28942 26.5694 8 28.16 8C38.7639 8 47.36 16.5961 47.36 27.2C47.36 28.7906 46.0706 30.08 44.48 30.08C42.8894 30.08 41.6 28.7906 41.6 27.2C41.6 19.7773 35.5827 13.76 28.16 13.76C26.5694 13.76 25.28 12.4706 25.28 10.88Z"
                    fill="white"
                  />
                  <path
                    d="M38.72 53.12C38.72 54.7106 37.4306 56 35.84 56C25.2361 56 16.64 47.4039 16.64 36.8C16.64 35.2094 17.9294 33.92 19.52 33.92C21.1105 33.92 22.4 35.2094 22.4 36.8C22.4 44.2227 28.4173 50.24 35.84 50.24C37.4306 50.24 38.72 51.5294 38.72 53.12Z"
                    fill="white"
                  />
                  <path
                    d="M10.88 38.72C9.28942 38.72 8 37.4306 8 35.84C8 25.2361 16.5961 16.64 27.2 16.64C28.7906 16.64 30.08 17.9294 30.08 19.52C30.08 21.1105 28.7906 22.4 27.2 22.4C19.7773 22.4 13.76 28.4173 13.76 35.84C13.76 37.4306 12.4706 38.72 10.88 38.72Z"
                    fill="white"
                  />
                  <path
                    d="M53.12 25.28C54.7106 25.28 56 26.5694 56 28.16C56 38.7639 47.4039 47.36 36.8 47.36C35.2094 47.36 33.92 46.0706 33.92 44.48C33.92 42.8895 35.2094 41.6 36.8 41.6C44.2227 41.6 50.24 35.5827 50.24 28.16C50.24 26.5694 51.5294 25.28 53.12 25.28Z"
                    fill="white"
                  />
                </svg>
              </a>
              <p className="font-normal text-sm text-parityGray text-center md:text-left mx-8 mb-0">
                {intl.formatMessage({ id: 'bitcoin-page-element-description' })}{' '}
                <a href={data.site.siteMetadata.element} target="_blank" rel="noreferrer">
                  {intl.formatMessage({ id: 'bitcoin-page-element-cta' })}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="intro" className="bg-parityWhite h-full">
        <div className="container flex  flex-col px-4 text-textDark">
          <div className="mt-24 md:mt-12 md:flex md:justify-center">
            <div className="hidden md:inline-block md:w-1/2 md:mx-4 md:my-4 max-w-md">
              <img className="w-auto h-auto mx-auto " src={introImageOne} alt="parity intro image" />
            </div>
            <div className="md:w-1/2 md:mx-4 md:flex md:flex-col md:justify-center">
              <h3 className="font-normal">{intl.formatMessage({ id: 'bitcoin-page-intro-section-one-title' })}</h3>
              <p className="text-base md:text-lg mb-0">
                {intl.formatMessage({ id: 'bitcoin-page-intro-section-one-description' })}
              </p>
              <hr className="border-1 border-parityPink w-12" />
              <ul className="list-none">
                <li className="text-base md:text-lg font-light">
                  <span>&mdash; </span>
                  {intl.formatMessage({ id: 'bitcoin-page-intro-section-one-bullet-one' })}
                </li>
                <li className="text-base md:text-lg font-light">
                  <span>&mdash; </span>
                  {intl.formatMessage({ id: 'bitcoin-page-intro-section-one-bullet-two' })}
                </li>
                <li className="text-base md:text-lg font-light">
                  <span>&mdash; </span>
                  {intl.formatMessage({ id: 'bitcoin-page-intro-section-one-bullet-three' })}
                </li>
                <li className="text-base md:text-lg font-light">
                  <span>&mdash; </span>
                  {intl.formatMessage({ id: 'bitcoin-page-intro-section-one-bullet-four' })}
                </li>
                <li className="text-base md:text-lg font-light">
                  <span>&mdash; </span>
                  {intl.formatMessage({ id: 'bitcoin-page-intro-section-one-bullet-five' })}
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 md:flex md:justify-center md:flex-row-reverse">
            <div className="md:w-1/2 md:mx-4 md:my-4 max-w-md">
              <img className="w-auto h-auto mx-auto my-12" src={introImageTwo} alt="parity intro image" />
            </div>
            <div className="my-24 md:my-0 md:w-1/2 md:mx-4 md:flex md:flex-col md:justify-center">
              <h3 className="font-normal">{intl.formatMessage({ id: 'bitcoin-page-intro-section-two-title' })}</h3>
              <p className="text-base md:text-lg mb-0">
                {intl.formatMessage({ id: 'bitcoin-page-intro-section-two-description' })}
              </p>
              <hr className="border-1 border-parityPink w-12" />
              <ul className="list-none">
                <li className="text-base md:text-lg font-light">
                  <span>&mdash; </span>
                  {intl.formatMessage({ id: 'bitcoin-page-intro-section-two-bullet-one' })}
                </li>
                <li className="text-base md:text-lg font-light">
                  <span>&mdash; </span>
                  {intl.formatMessage({ id: 'bitcoin-page-intro-section-two-bullet-two' })}
                </li>
                <li className="text-base md:text-lg font-light">
                  <span>&mdash; </span>
                  {intl.formatMessage({ id: 'bitcoin-page-intro-section-two-bullet-three' })}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container md:flex">
          <div className="h-64 md:h-96 w-auto md:w-1/2">
            <img
              className="h-full w-full object-cover"
              src={imageOne}
              alt="World Food Programme build on Parity Technologie"
            />
          </div>
          <div className="text-textDark px-6 py-11 md:w-1/2 lg:flex lg:justify-center">
            <div className="lg:w-2/3">
              <h6 className="text-xs uppercase tracking-wide mb-8">
                {intl.formatMessage({ id: 'bitcoin-page-from-the-blog' })}
              </h6>
              <h4 className="text-2xl xl:text-3xl font-normal mb-4">
                {intl.formatMessage({ id: 'bitcoin-page-blog-section-title' })}
              </h4>
              <p className="text-base md:text-lg">
                {intl.formatMessage({ id: 'bitcoin-page-blog-section-description' })}
              </p>
              <span className="text-xs text-parityPink font-bold">
                <LocalizedLink
                  className="no-underline"
                  to="/blog/parity-bitcoin-is-now-supporting-segwit-segwit2x-and-bitcoin-cash/"
                >
                  {intl.formatMessage({ id: 'bitcoin-page-blog-section-read-more' })}
                </LocalizedLink>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="md:bg-hero-pattern-dark bg-cover bg-center bg-parityGray">
        <div className="container py-16 md:pt-16 md:pb-24 flex flex-col items-center text-center ">
          <div className="px-4 py-8 max-w-3xl">
            <h3 className="text-2xl xl:text-3xl font-normal">
              {intl.formatMessage({ id: 'bitcoin-page-why-parity-bitcoin' })}
            </h3>
          </div>
          <div className="md:flex">
            <CardNoLink
              title={intl.formatMessage({ id: 'bitcoin-page-block-one-title' })}
              description={intl.formatMessage({ id: 'bitcoin-page-block-one-description' })}
            />
            <CardNoLink
              title={intl.formatMessage({ id: 'bitcoin-page-block-two-title' })}
              description={intl.formatMessage({ id: 'bitcoin-page-block-two-description' })}
            />
            <CardNoLink
              title={intl.formatMessage({ id: 'bitcoin-page-block-three-title' })}
              description={intl.formatMessage({ id: 'bitcoin-page-block-three-description' })}
            />
          </div>
        </div>
      </section>
      <section id="download" className="bg-textDark h-full pb-24">
        <div className="flex flex-col justify-center">
          <div className="px-4 py-16 text-center text-gray-200">
            <h3 className="text-parityWhite text-2xl xl:text-3xl font-normal">
              {intl.formatMessage({ id: 'bitcoin-page-download-section-title' })}
            </h3>
          </div>
          <div className="mx-auto flex flex-col md:flex-row md:items-center">
            <div className="mx-4 md:mx-0 my-2 border-2 border-parityBorder h-52 md:h-56 flex flex-col justify-between rounded-md max-w-sm">
              <div className="text-parityWhite text-center pt-4 px-10">
                <p className="font-normal md:text-lg">
                  {intl.formatMessage({ id: 'bitcoin-page-download-block-one-title' })}
                </p>
                <p className="font-normal text-sm leading-loose">
                  {intl.formatMessage({ id: 'bitcoin-page-download-block-one-description' })}
                </p>
              </div>
              <a
                className="no-underline"
                href="https://github.com/paritytech/parity-bitcoin/tree/pruning"
                target="_blank"
                rel="noreferrer"
              >
                <div className="relative hover:opacity-90">
                  <div className="absolute top-2 left-2 opacity-90">
                    <svg
                      className="w-8 h-auto"
                      fill="white"
                      role="img"
                      xmlns="http://www.w3.org/1999/xlink"
                      viewBox="5 5 24 24"
                    >
                      <path d="M18.944 26.128H13.743s.007-1.544 0-2.602c-3.56.766-4.553-1.951-4.553-1.951-.65-1.301-1.301-1.951-1.301-1.951-1.301-.773 0-.65 0-.65 1.301 0 1.951 1.301 1.951 1.301 1.142 1.938 3.173 1.626 3.903 1.301 0-.65.285-1.634.65-1.951-2.841-.32-5.207-1.951-5.207-5.204s.653-3.903 1.304-4.553c-.131-.321-.676-1.506.02-3.252 0 0 1.278 0 2.579 1.951.645-.645 2.602-.65 3.253-.65.649 0 2.607.006 3.251.65 1.301-1.951 2.582-1.951 2.582-1.951.695 1.747.152 2.932.02 3.252.65.65 1.301 1.301 1.301 4.553s-2.362 4.884-5.204 5.204c.366.317.65 1.437.65 1.951l.002 4.552z" />
                    </svg>
                  </div>
                  <div className="bg-parityPink text-center capitalize text-gray-200 py-3 rounded-b-md">
                    {intl.formatMessage({ id: 'bitcoin-page-download-block-one-cta' })}
                  </div>
                </div>
              </a>
            </div>
            <div className="mx-4 md:-mx-2 z-10 my-2 border-2 bg-textDark border-parityBorder h-52 md:h-60 flex flex-col justify-between rounded-md max-w-sm">
              <div className="relative text-gray-200 text-center pt-4 px-12">
                <span className="absolute top-5 right-3 bg-parityPink text-xxs font-bold uppercase rounded-xl py-1 px-3 ml-2">
                  {intl.formatMessage({ id: 'bitcoin-page-download-block-two-popular' })}
                </span>
                <p className="font-normal md:text-lg">
                  {intl.formatMessage({ id: 'bitcoin-page-download-block-two-title' })}
                </p>
                <p className="font-normal text-sm leading-loose">
                  {intl.formatMessage({ id: 'bitcoin-page-download-block-two-description' })}
                </p>
              </div>
              <a className="no-underline" href={githubBitcoin} target="_blank" rel="noreferrer">
                <div className="relative hover:opacity-90">
                  <div className="absolute top-2 left-2 opacity-90">
                    <svg
                      className="w-8 h-auto"
                      fill="white"
                      role="img"
                      xmlns="http://www.w3.org/1999/xlink"
                      viewBox="5 5 24 24"
                    >
                      <path d="M18.944 26.128H13.743s.007-1.544 0-2.602c-3.56.766-4.553-1.951-4.553-1.951-.65-1.301-1.301-1.951-1.301-1.951-1.301-.773 0-.65 0-.65 1.301 0 1.951 1.301 1.951 1.301 1.142 1.938 3.173 1.626 3.903 1.301 0-.65.285-1.634.65-1.951-2.841-.32-5.207-1.951-5.207-5.204s.653-3.903 1.304-4.553c-.131-.321-.676-1.506.02-3.252 0 0 1.278 0 2.579 1.951.645-.645 2.602-.65 3.253-.65.649 0 2.607.006 3.251.65 1.301-1.951 2.582-1.951 2.582-1.951.695 1.747.152 2.932.02 3.252.65.65 1.301 1.301 1.301 4.553s-2.362 4.884-5.204 5.204c.366.317.65 1.437.65 1.951l.002 4.552z" />
                    </svg>
                  </div>
                  <div className="bg-parityPink text-center capitalize text-gray-200 py-3 rounded-b-md">
                    {intl.formatMessage({ id: 'bitcoin-page-download-block-two-cta' })}
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-parityGray py-12">
        <FooterCTA
          title={intl.formatMessage({ id: 'bitcoin-page-footer-cta-title' })}
          buttonText={intl.formatMessage({ id: 'bitcoin-page-footer-cta' })}
          buttonLink="/solutions"
          subCTATextOne={intl.formatMessage({ id: 'bitcoin-page-footer-sub-cta-one' })}
          subCTATextTwo={intl.formatMessage({ id: 'bitcoin-page-footer-sub-cta-two' })}
          subCTATextLink="/technologies/"
        />
      </section>
      <Social />
    </Layout>
  );
}

export const query = graphql`
  {
    site {
      siteMetadata {
        element
      }
    }
  }
`;
