import React from 'react';
import Button from '../../Button';
import { useIntl } from 'react-intl';

export default function HeroPattern() {
  const intl = useIntl();

  return (
    <section className="md:bg-hero-pattern bg-cover bg-center bg-fixed -mt-24 xl:-mt-36 md:-mb-32">
      <div className="md:h-screen md:min-h-heroMinLg">
        <div className="container h-full text-center max-w-3xl pt-52 md:pt-0 md:pb-0 pb-16 px-2 md:flex md:flex-col md:justify-center md:w-2/3">
          <h3 className="font-normal md:font-light md:text-5xl lg:text-6xl">
            {intl.formatMessage({ id: 'solutions-page-hero-title' })}
          </h3>
          <h4 className="font-normal leading-8 mb-8 text-textDark md:text-2xl md:px-12">
            {intl.formatMessage({ id: 'solutions-page-hero-description' })}
          </h4>
          <Button extraClass=" " link="/collaborate/">
            {intl.formatMessage({ id: 'solutions-page-hero-cta' })}
          </Button>
        </div>
      </div>
    </section>
  );
}
