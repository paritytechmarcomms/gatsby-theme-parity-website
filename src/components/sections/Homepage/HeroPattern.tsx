import React from 'react';
import Button from '../../Button';
import { useIntl } from 'react-intl';

export default function HeroPattern() {
  const intl = useIntl();

  return (
    <section className="md:bg-hero-pattern bg-cover bg-center bg-fixed -mt-32 md:-mb-32">
      <div className="md:h-screen md:min-h-heroMinLg">
        <div className="container h-full text-center pt-40 md:pt-0 md:pb-0 pb-10 px-4 md:flex md:flex-col md:justify-center">
          <h1 className="font-normal pt-12 pb-4 md:p-0 md:mb-10">
            {intl.formatMessage({ id: 'homepage-hero-title' })}
          </h1>
          <h3 className="text-lg md:text-2xl font-normal leading-9 mb-8 md:mb-10 text-textDark md:px-12">
            {intl.formatMessage({ id: 'homepage-hero-description' })}
          </h3>
          <Button link="/#intro">{intl.formatMessage({ id: 'homepage-hero-cta' })}</Button>
        </div>
      </div>
    </section>
  );
}
