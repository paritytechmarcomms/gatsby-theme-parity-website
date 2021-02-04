import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useIntl } from 'react-intl';
import { LocalizedLink } from 'gatsby-theme-i18n';
import TransparentButton from '../../TransparentButton';

export default function HeroAbout() {
  const intl = useIntl();
  const backgroundImg = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "bg-red-1.jpg" }) {
        id
        childImageSharp {
          fluid(quality: 90, toFormat: PNG) {
            src
          }
        }
      }
    }
  `);
  const bgStyles = {
    backgroundImage: `url(${backgroundImg.file.childImageSharp.fluid.src})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center`,
    backgroundSize: `cover`,
  };

  return (
    <section className="bg-fixed -mt-32 md:-mb-64" style={bgStyles}>
      <div className="md:h-screen text-white">
        <div className="container text-center pt-40 md:pt-52 md:pb-0 pb-16 px-2 md:flex md:flex-col md:justify-center md:w-3/4">
          <h3 className="md:text-5xl">{intl.formatMessage({ id: 'about-page-hero-title' })}</h3>
          <p className="leading-9 px-4 mb-8 md:text-2xl md:px-12">
            {intl.formatMessage({ id: 'about-page-hero-description' })}
          </p>
          <TransparentButton extraClass=" " link="/about/#about">
            {intl.formatMessage({ id: 'about-page-hero-cta' })}
          </TransparentButton>
          <p className="text-xs">
            {intl.formatMessage({ id: 'about-page-hero-sub-cta-1' })}&nbsp;
            <LocalizedLink className="font-bold" to="/contact/">
              {intl.formatMessage({ id: 'about-page-hero-sub-cta-2' })}
            </LocalizedLink>
            &nbsp;{intl.formatMessage({ id: 'about-page-hero-sub-cta-3' })}
          </p>
        </div>
      </div>
    </section>
  );
}