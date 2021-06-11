import React from 'react';
import { useIntl } from 'react-intl';
import { LocalizedLink } from 'gatsby-theme-i18n';
import TransparentButton from '../../TransparentButton';

export default function HeroAbout() {
  const intl = useIntl();

  return (
    <section className="block h-hero min-h-heroMin">
      <div className="absolute h-hero min-h-heroMin -z-10 w-full top-0 left-0 bg-hero-about bg-cover bg-center"></div>
      <div className="container relative text-center text-white h-5/6 flex flex-col justify-center">
        <h3 className="text-white font-normal md:text-5xl md:mb-8">
          {intl.formatMessage({ id: 'about-page-hero-title' })}
        </h3>
        <h4 className="text-white font-normal leading-relaxed px-4 mb-8 text-lg md:text-2xl md:px-24">
          {intl.formatMessage({ id: 'about-page-hero-description' })}
        </h4>
        <TransparentButton extraClass="mb-10 md:mb-4" link="/about/#about">
          {intl.formatMessage({ id: 'about-page-hero-cta' })}
        </TransparentButton>
        <p className="font-normal text-xs">
          {intl.formatMessage({ id: 'about-page-hero-sub-cta-1' })}&nbsp;
          <LocalizedLink className="font-bold" to="/contact/">
            {intl.formatMessage({ id: 'about-page-hero-sub-cta-2' })}
          </LocalizedLink>
          &nbsp;{intl.formatMessage({ id: 'about-page-hero-sub-cta-3' })}
        </p>
      </div>
    </section>
  );
}
