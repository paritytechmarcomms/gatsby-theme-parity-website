import React from 'react';
import FeaturedBlogs from '../../components/FeaturedBlogs';
import FooterCTA from '../../components/FooterCTA';
import Button from '../../components/Button';
import Social from '../../components/Social';
import { useIntl } from 'react-intl';
import Layout from '../../components/layouts/Layout';
import SEO from '../../components/layouts/SEO';

export default function EthereumPage() {
  const intl = useIntl();

  return (
    <Layout>
      <SEO title="Parity Ethereum Client - OpenEthereum" />
      <section className="md:bg-hero-pattern bg-cover bg-center bg-fixed -mt-24 xl:-mt-36 md:-mb-16">
        <div className="md:h-screen md:min-h-heroMinLg">
          <div className="container h-full text-center max-w-3xl pt-40 md:pt-0 md:pb-0 pb-16 px-2 md:flex md:flex-col md:justify-center md:w-2/3">
            <h3 className="font-light md:text-5xl lg:text-6xl py-4">
              {intl.formatMessage({ id: 'ethereum-page-hero-title' })}
            </h3>
            <p className="font-light leading-9 mb-8 text-textDark md:text-2xl md:px-12">
              {intl.formatMessage({ id: 'ethereum-page-hero-description' })}
            </p>
            <Button extraClass="mb-4" link="https://github.com/OpenEthereum/open-ethereum">
              {intl.formatMessage({ id: 'ethereum-page-hero-cta' })}
            </Button>
            <p className="text-xs md:text-sm pt-1 font-normal">
              {intl.formatMessage({ id: 'ethereum-page-hero-subcta-one' })}{' '}
              <a className="text-parityPink" href="/blog/parity-ethereum-openethereum-dao/">
                {intl.formatMessage({ id: 'ethereum-page-hero-subcta-two' })}
              </a>{' '}
              {intl.formatMessage({ id: 'ethereum-page-hero-subcta-three' })}
            </p>
          </div>
        </div>
      </section>
      <FeaturedBlogs />
      <FooterCTA
        title={intl.formatMessage({ id: 'ethereum-page-footer-title' })}
        buttonText={intl.formatMessage({ id: 'ethereum-page-footer-cta' })}
        buttonLink="/solutions/"
        subCTATextOne={intl.formatMessage({ id: 'ethereum-page-footer-sub-cta-one' })}
        subCTATextTwo={intl.formatMessage({ id: 'ethereum-page-footer-sub-cta-two' })}
        subCTATextLink="/technologies/"
      />
      <Social />
    </Layout>
  );
}
