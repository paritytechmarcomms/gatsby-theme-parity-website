import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layouts/Layout';
import HeroPattern from '../components/sections/Homepage/HeroPattern';
import HomeInto from '../components/sections/Homepage/HomeIntro';
import BuildOnParity from '../components/sections/Homepage/BuildOnParity';
import ParityTech from '../components/sections/Homepage/ParityTech';
import CompaniesUsingOurTech from '../components/sections/Homepage/CompaniesUsingOurTech';
import ParityTeam from '../components/sections/Homepage/ParityTeam';
import NewsFeatures from '../components/sections/Homepage/NewsFeatures';
import FeaturedBlog from '../components/FeaturedBlogs';
import FooterCTA from '../components/FooterCTA';
import Social from '../components/Social';
import SEO from '../components/layouts/SEO';
import { useIntl } from 'react-intl';

export default function Index() {
  const intl = useIntl();

  return (
    <Layout theme="">
      <SEO title={intl.formatMessage({ id: 'homepage-hero-title' })} />
      <HeroPattern />
      <HomeInto />
      <BuildOnParity />
      <ParityTech />
      <CompaniesUsingOurTech />
      <ParityTeam />
      <NewsFeatures />
      <FeaturedBlog />
      <FooterCTA
        title={intl.formatMessage({ id: 'homepage-featured-blog-title' })}
        buttonText={intl.formatMessage({ id: 'homepage-featured-blog-cta' })}
        buttonLink="/technologies/"
        subCTATextOne={intl.formatMessage({ id: 'homepage-featured-blog-subtext' })}
        subCTATextTwo={intl.formatMessage({ id: 'homepage-featured-blog-subtext-link' })}
        subCTATextLink="/solutions/"
      />
      <Social />
    </Layout>
  );
}

// TODO add graphql types
export const query = graphql`
  query($locale: String!) {
    allFile(filter: { sourceInstanceName: { eq: "blog" }, childMdx: { fields: { locale: { eq: $locale } } } }) {
      nodes {
        childMdx {
          frontmatter {
            slug
            title
          }
        }
      }
    }
  }
`;
