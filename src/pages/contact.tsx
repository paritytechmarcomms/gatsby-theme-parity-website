import React from 'react';
import { graphql } from 'gatsby';
import { useIntl } from 'react-intl';
import { LocalizedLink } from 'gatsby-theme-i18n';
import Layout from '../components/layouts/Layout';
import SEO from '../components/layouts/SEO';
import Social from '../components/Social';
import NewsletterModal from '../components/NewsletterModal';
import gitterLogo from '../images/logo-gitter-dark.svg';
import elementLogo from '../images/logo-element-dark.svg';

interface ContactPageProps {
  data: any;
}

export default function ContactPage({ data }: ContactPageProps) {
  const intl = useIntl();

  return (
    <Layout>
      <SEO title="Contact" />
      <section className="md:bg-parityGray bg-parityGray bg-hero-pattern-dark bg-cover bg-center -mt-32">
        <div className="container">
          <div className="flex flex-col">
            <div className="pt-56">
              <h3 className="text-textDark text-center md:text-5xl">
                {intl.formatMessage({ id: 'contact-page-title' })}
              </h3>
              <div className="pt-12 pb-4 md:flex md:place-content-center">
                <div className="bg-white m-4 py-4 flex flex-col md:flex-grow md:flex md:flex-row md:justify-center md:items-center md:max-w-xs">
                  <a
                    className="text-parityPink no-underline hover:underline"
                    href={data.site.siteMetadata.gitter}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img className="h-12 w-12 mx-auto" src={gitterLogo} />
                  </a>
                  <div className="text-center md:text-left md:px-4 text-sm">
                    <p className="mb-0 md:mb-2">
                      {intl.formatMessage({ id: 'contact-page-gitter-title' })}
                      <br />
                      <span className="text-textLight">
                        {intl.formatMessage({ id: 'contact-page-gitter-description' })}
                        {` `}
                        <a
                          className="text-parityPink no-underline hover:underline"
                          href={data.site.siteMetadata.gitter}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {intl.formatMessage({ id: 'contact-page-gitter-cta' })}
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="bg-white m-4 py-4 flex flex-col md:flex-grow md:flex md:flex-row md:justify-center md:items-center md:max-w-xs">
                  <a
                    className="text-parityPink no-underline hover:underline"
                    href={data.site.siteMetadata.element}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img className="h-12 w-12 mx-auto" src={elementLogo} />
                  </a>
                  <div className="text-center md:text-left md:px-4 text-sm">
                    <p className="mb-0 md:mb-2">
                      {intl.formatMessage({ id: 'contact-page-element-title' })}
                      <br />
                      <span className="text-textLight">
                        {intl.formatMessage({ id: 'contact-page-element-description' })}
                        {` `}
                        <a
                          className="text-parityPink no-underline hover:underline"
                          href={data.site.siteMetadata.element}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {intl.formatMessage({ id: 'contact-page-element-cta' })}
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white mx-4 md:max-w-screen-md md:mx-auto">
                <div className="md:flex md:justify-center md:place-content-center py-4">
                  <div className="text-lg text-center md:px-8 md:border-r">
                    <p className="mb-0">{intl.formatMessage({ id: 'contact-page-press-title' })}</p>
                    <a
                      className="text-parityPink no-underline hover:underline"
                      href={`mailto:${data.site.siteMetadata.pressEmail}`}
                    >
                      <p className="mt-0">{data.site.siteMetadata.pressEmail}</p>
                    </a>
                  </div>
                  <div className="text-lg text-center md:px-12 md:border-r">
                    <p className="mb-0">{intl.formatMessage({ id: 'contact-page-organization-title' })}</p>
                    <LocalizedLink className="text-parityPink no-underline hover:underline" to="/collaborate">
                      <p className="mt-0">{intl.formatMessage({ id: 'contact-page-organization-cta' })}</p>
                    </LocalizedLink>
                  </div>
                  <div className="text-lg text-center md:mx-8">
                    <p className="mb-0">{intl.formatMessage({ id: 'contact-page-other-inquiries-title' })}</p>
                    <a
                      className="text-parityPink no-underline hover:underline mt-0"
                      href={`mailto:${data.site.siteMetadata.email}`}
                    >
                      <p className="mt-0">{data.site.siteMetadata.email}</p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="py-4">
                <p className="text-center text-sm text-textLight">
                  {intl.formatMessage({ id: 'contact-page-job-title' })}{' '}
                  <LocalizedLink className="text-parityPink no-underline hover:underline" to="/jobs">
                    {intl.formatMessage({ id: 'contact-page-job-cta' })}
                  </LocalizedLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-parityGray">
        <div className="container">
          <div className="flex flex-col justify-center text-center py-24">
            <h3 className="mb-0 md:text-4xl">{intl.formatMessage({ id: 'contact-page-footer-title' })}</h3>
            <div>
              <NewsletterModal />
            </div>
            <p className="text-sm text-textLight">
              {intl.formatMessage({ id: 'contact-page-footer-subcta-one' })}{' '}
              <LocalizedLink className="text-parityPink no-underline hover:underline" to="/blog">
                {intl.formatMessage({ id: 'contact-page-footer-subcta-two' })}
              </LocalizedLink>
            </p>
          </div>
        </div>
      </section>
      <Social />
    </Layout>
  );
}

export const query = graphql`
  {
    site {
      siteMetadata {
        email
        gitter
        element
        pressEmail
      }
    }
  }
`;