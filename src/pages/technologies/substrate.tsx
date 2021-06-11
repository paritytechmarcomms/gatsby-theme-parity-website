import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/layouts/Layout';
import TransparentButton from '../../components/TransparentButton';
import FullScreenYouTube from '../../components/FullScreenYouTube';
import FullWidthYouTube from '../../components/FullWidthYouTube';
import Img from 'gatsby-image';
import { useIntl } from 'react-intl';
import substrateLogo from '../../images/substrate-logo-dark.svg';
import Social from '../../components/Social';
import FeaturedBlogs from '../../components/FeaturedBlogs';
import FooterCTA from '../../components/FooterCTA';
import SEO from '../../components/layouts/SEO';
import imageOne from '../../images/image-5.jpg';
import imageTwo from '../../images/image-6.jpg';
import imageThree from '../../images/image-7.jpg';

interface SubstratePageProps {
  data: any;
}

export default function SubstratePage({ data }: SubstratePageProps) {
  const intl = useIntl();

  return (
    <Layout theme="light">
      <SEO title="Parity Substrate: Build Your Own Blockchain" />
      <section className="bg-hero-substrate bg-cover bg-center -mt-24 xl:-mt-32 md:-mb-12">
        <div className="md:h-screen md:min-h-heroMinLg">
          <div className="container h-full max-w-4xl pt-40 md:pt-0 pb-16 px-2 flex flex-col justify-center items-center md:items-start md:w-2/3">
            <img className="mx-auto md:mx-0 w-64 h-auto py-4" src={substrateLogo} alt="Polkadot Logo" />
            <h3 className="font-light text-white text-center md:text-left md:text-5xl lg:text-6xl py-4 max-w-2xl">
              {intl.formatMessage({ id: 'substrate-page-hero-title' })}
            </h3>
            <div className="flex flex-col md:flex-row items-center">
              <TransparentButton extraClass=" " link="https://www.substrate.io/">
                {intl.formatMessage({ id: 'substrate-page-hero-cta-one' })}
              </TransparentButton>
              <p className="text-lg text-white font-title font-semibold tracking-normal py-6 md:pl-12 md:mb-0 transition-transform transform hover:-translate-y-0.5">
                <a className="no-underline" href="https://www.substrate.dev">
                  {intl.formatMessage({ id: 'substrate-page-hero-cta-two' })}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-parityBlack -mt-4 border-t border-gray-800 md:border-parityBlack">
        <div className="flex flex-wrap justify-center">
          <a href="https://techcrunch.com/2018/10/23/parity-founder-demos-substrate-live-launches-a-blockchain-in-minutes-instead-of-days-or-weeks/">
            <Img
              className="w-40 mx-4 lg:mx-6 my-2 opacity-50 h-auto"
              fluid={data.techCrunch.childImageSharp.fluid}
              alt={data.techCrunch.name}
            />
          </a>
          <a href="https://www.coindesk.com/gavin-wood-announces-impending-release-of-diy-blockchain-tool/">
            <Img
              className="w-40 mx-4 lg:mx-6 my-2 opacity-50 h-auto"
              fluid={data.coindesk.childImageSharp.fluid}
              alt={data.coindesk.name}
            />
          </a>
          <a href="https://www.zeroknowledge.fm/46">
            <Img
              className="w-40 mx-4 lg:mx-6 my-2 opacity-50 h-auto"
              fluid={data.zk.childImageSharp.fluid}
              alt={data.zk.name}
            />
          </a>
          <a href="https://cointelegraph.com/news/ethereum-parity-co-founder-announces-blockchain-framework-for-a-multi-chain-world">
            <Img
              className="w-40 mx-4 lg:mx-6 my-2 opacity-50 h-auto"
              fluid={data.cointelegraph.childImageSharp.fluid}
              alt={data.cointelegraph.name}
            />
          </a>
          <a href="https://epicenter.tv/episode/259/">
            <Img
              className="w-40 mx-4 lg:mx-6 my-2 opacity-50 h-auto"
              fluid={data.epicenter.childImageSharp.fluid}
              alt={data.epicenter.name}
            />
          </a>
        </div>
      </section>
      <section id="intro" className="bg-parityGray h-full">
        <div className="container flex  flex-col px-4 pt-12 pb-24">
          <div className="mt-12 md:flex md:justify-center">
            <div className="hidden md:inline-block md:w-1/2 md:mx-4 md:my-4 max-w-md">
              <img className="w-auto h-auto mx-auto " src={imageOne} alt="parity intro image" />
            </div>
            <div className="md:w-1/2 md:mx-4 md:flex md:flex-col md:justify-center">
              <h3 className="text-2xl md:text-3xl font-normal mb-4 md:mb-8">
                {intl.formatMessage({ id: 'substrate-page-intro-one-title' })}
              </h3>
              <p className="text-textDark text-base md:text-lg md:mb-0">
                {intl.formatMessage({ id: 'substrate-page-intro-one-description' })}
              </p>
              <hr className="border-1 border-parityPink w-12" />
              <ul className="list-none lsit-outside">
                <li className="text-textDark text-base md:text-lg md:mb-2">
                  <span>&mdash; </span>
                  {intl.formatMessage({ id: 'substrate-page-intro-one-bullet-one' })}
                </li>
                <li className="text-textDark text-base md:text-lg md:mb-2">
                  <span>&mdash; </span>
                  {intl.formatMessage({ id: 'substrate-page-intro-one-bullet-two' })}
                </li>
                <li className="text-textDark text-base md:text-lg md:mb-2">
                  <span>&mdash; </span>
                  {intl.formatMessage({ id: 'substrate-page-intro-one-bullet-three' })}
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 md:flex md:justify-center md:flex-row-reverse">
            <div className="md:w-1/2 md:mx-4 md:my-4 max-w-md">
              <img className="w-auto h-auto mx-auto my-12" src={imageTwo} alt="parity intro image" />
            </div>
            <div className="md:w-1/2 md:mx-4 md:flex md:flex-col md:justify-center">
              <h3 className="text-2xl md:text-3xl font-normal mb-4 md:mb-8">
                {intl.formatMessage({ id: 'substrate-page-intro-two-title' })}
              </h3>
              <p className="text-textDark text-base md:text-lg md:mb-0">
                {intl.formatMessage({ id: 'substrate-page-intro-two-description' })}
              </p>
              <hr className="border-1 border-parityPink w-12" />
              <ul className="list-none lsit-outside">
                <li className="text-textDark text-base md:text-lg md:mb-2">
                  <span>&mdash; </span>
                  {intl.formatMessage({ id: 'substrate-page-intro-two-bullet-one' })}
                </li>
                <li className="text-textDark text-base md:text-lg md:mb-2">
                  <span>&mdash; </span>
                  {intl.formatMessage({ id: 'substrate-page-intro-two-bullet-two' })}
                </li>
                <li className="text-textDark text-base md:text-lg md:mb-2">
                  <span>&mdash; </span>
                  {intl.formatMessage({ id: 'substrate-page-intro-two-bullet-three' })}
                </li>
                <li className="text-textDark text-base md:text-lg md:mb-2">
                  <span>&mdash; </span>
                  {intl.formatMessage({ id: 'substrate-page-intro-two-bullet-four' })}
                </li>
                <li className="text-textDark text-base md:text-lg md:mb-2">
                  <span>&mdash; </span>
                  {intl.formatMessage({ id: 'substrate-page-intro-two-bullet-five' })}
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 md:flex md:justify-center">
            <div className="md:w-1/2 md:mx-4 md:my-4 max-w-md">
              <img className="w-auto h-auto mx-auto " src={imageThree} alt="parity intro image" />
            </div>
            <div className="md:w-1/2 md:mx-4 md:flex md:flex-col md:justify-center">
              <h3 className="text-2xl md:text-3xl font-normal mb-4 md:mb-8">
                {intl.formatMessage({ id: 'substrate-page-intro-three-title' })}
              </h3>
              <p className="text-textDark text-base md:text-lg md:mb-0">
                {intl.formatMessage({ id: 'substrate-page-intro-three-description' })}
              </p>
              <hr className="border-1 border-parityPink w-12" />
              <ul className="list-none lsit-outside">
                <li className="text-textDark text-base md:text-lg md:mb-2">
                  <span>&mdash; </span>
                  {intl.formatMessage({ id: 'substrate-page-intro-three-bullet-one' })}
                </li>
                <li className="text-textDark text-base md:text-lg md:mb-2">
                  <span>&mdash; </span>
                  {intl.formatMessage({ id: 'substrate-page-intro-three-bullet-two' })}
                </li>
                <li className="text-textDark text-base md:text-lg md:mb-2">
                  <span>&mdash; </span>
                  {intl.formatMessage({ id: 'substrate-page-intro-three-bullet-three' })}
                </li>
                <li className="text-textDark text-base md:text-lg md:mb-2">
                  <span>&mdash; </span>
                  {intl.formatMessage({ id: 'substrate-page-intro-three-bullet-four' })}
                </li>
                <li className="text-textDark text-base md:text-lg md:mb-2">
                  <span>&mdash; </span>
                  {intl.formatMessage({ id: 'substrate-page-intro-three-bullet-five' })}
                </li>
                <li className="text-textDark text-base md:text-lg md:mb-2">
                  <span>&mdash; </span>
                  {intl.formatMessage({ id: 'substrate-page-intro-three-bullet-six' })}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-parityGray md:bg-hero-pattern-dark bg-cover bg-center border">
        <div className="container py-16 md:py-32  md:max-w-5xl">
          <div className="md:flex text-textDark mb-8">
            <div className="md:w-1/2">
              <p className="font-title font-medium mx-4 md:text-2xl">
                {intl.formatMessage({ id: 'substrate-page-table-one-title' })}
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex items-center bg-white mx-4 text-sm border-b">
                <div className="w-1/2 pl-4 py-4">
                  {intl.formatMessage({ id: 'substrate-page-table-one-heading-one' })}
                </div>
                <div className="w-1/2 pl-4 py-4">
                  {intl.formatMessage({ id: 'substrate-page-table-one-web-assembly' })}
                </div>
              </div>
              <div className="flex items-center bg-white mx-4 text-sm">
                <div className="w-1/2 pl-4 py-4">
                  {intl.formatMessage({ id: 'substrate-page-table-one-heading-two' })}
                </div>
                <div className="w-1/2 pl-4 py-4">{intl.formatMessage({ id: 'substrate-page-table-one-rust' })}</div>
              </div>
            </div>
          </div>
          <div className="pt-12 md:flex text-textDark">
            <div className="md:w-1/2">
              <p className="mx-4 md:text-2xl">{intl.formatMessage({ id: 'substrate-page-table-two-title' })}</p>
              <p className="mx-4 text-sm text-textDark md:text-base">
                {intl.formatMessage({ id: 'substrate-page-table-two-description' })}
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex items-center bg-white mx-4 text-sm border-b">
                <div className="w-1/2 pl-4 py-4">
                  {intl.formatMessage({ id: 'substrate-page-table-two-networking' })}
                </div>
                <div className="w-1/2 pl-4 py-4">{intl.formatMessage({ id: 'substrate-page-table-two-libp2p' })}</div>
              </div>
              <div className="flex items-center bg-white mx-4 text-sm border-b">
                <div className="w-1/2 pl-4 py-4">
                  {intl.formatMessage({ id: 'substrate-page-table-two-algorithm' })}
                </div>
                <div className="w-1/2 pl-4 py-4">{intl.formatMessage({ id: 'substrate-page-table-two-hybrid' })}</div>
              </div>
              <div className="flex items-center bg-white mx-4 text-sm border-b">
                <div className="w-1/2 pl-4 py-4">{intl.formatMessage({ id: 'substrate-page-table-two-beacon' })}</div>
                <div className="w-1/2 pl-4 py-4">
                  {intl.formatMessage({ id: 'substrate-page-table-two-coin-flipping' })}
                </div>
              </div>
              <div className="flex items-center bg-white mx-4 text-sm border-b">
                <div className="w-1/2 pl-4 py-4">
                  {intl.formatMessage({ id: 'substrate-page-table-two-authentication' })}
                </div>
                <div className="w-1/2 pl-4 py-4">{intl.formatMessage({ id: 'substrate-page-table-two-ed25519' })}</div>
              </div>
              <div className="flex items-center bg-white mx-4 text-sm border-b">
                <div className="w-1/2 pl-4 py-4">{intl.formatMessage({ id: 'substrate-page-table-two-hashing' })}</div>
                <div className="w-1/2 pl-4 py-4">{intl.formatMessage({ id: 'substrate-page-table-two-blake2b' })}</div>
              </div>
              <div className="flex items-center bg-white mx-4 text-sm">
                <div className="w-1/2 pl-4 py-4">{intl.formatMessage({ id: 'substrate-page-table-two-address' })}</div>
                <div className="w-1/2 pl-4 py-4">{intl.formatMessage({ id: 'substrate-page-table-two-base-58' })}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-parityGray">
        <div className="container flex flex-col justify-center py-12">
          <div className="text-textLight text-center">
            <p className="md:text-xl text-textDark">
              {intl.formatMessage({ id: 'substrate-page-teams-heading' })}{' '}
              <a
                className="no-underline text-parityPink hover:underline"
                href="https://www.substrate.io/substrate-users/"
              >
                {intl.formatMessage({ id: 'substrate-page-teams-cta' })}
              </a>
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            {data.substrateTeams.edges.map((edge: any) => (
              <div key={edge.node.id} className="flex flex-col justify-center mx-6 my-4">
                <span className="hidden text-center text-xs bg-textDark text-white capitalize py-1 px-2">
                  {edge.node.name}
                </span>
                <Img
                  className="h-auto w-16 my-3 opacity-60"
                  fluid={edge.node.childImageSharp.fluid}
                  alt={edge.node.name}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-textDark md:flex">
        <div className="md:w-1/2">
          <FullWidthYouTube image={data.gavinWeb3.childImageSharp.fluid.src} videoId="0IoUZdDi5Is" />
        </div>
        <div className="mx-4 py-10 md:w-1/2 md:py-0 md:flex md:flex-col md:justify-center xl:pl-20">
          <h4 className="text-parityWhite font-normal max-w-md text-2xl md:text-3xl mb-8">
            {intl.formatMessage({ id: 'substrate-page-launch-blockchain-title' })}
          </h4>
          <p className="text-parityWhite font-light text-base max-w-md md:text-lg md:mb-0">
            {intl.formatMessage({ id: 'substrate-page-launch-blockchain-description' })}
          </p>
        </div>
      </section>
      <section className="md:bg-hero-pattern-dark bg-cover bg-center bg-parityGray h-full py-6">
        <div className="container pb-16">
          <div className="flex flex-row justify-between items-center pt-20 mt-0 mx-4 md:mb-0">
            <h4 className="">{intl.formatMessage({ id: 'about-page-featured-video-title' })}</h4>
            <p className="text-parityPink font-bold text-sm">
              <a
                className="no-underline hover:underline"
                href="https://www.youtube.com/channel/UCSs5vZi0U7qHLkUjF3QnaWg"
                target="_blank"
                rel="noreferrer"
              >
                {intl.formatMessage({ id: 'about-page-featured-youtube-cta' })}
              </a>
            </p>
          </div>
          <div className="md:flex md:flex-wrap md:justify-evenly">
            <FullScreenYouTube
              image={data.videoSubstrateOne.childImageSharp.fluid.src}
              name={intl.formatMessage({ id: 'substrate-page-video-title' })}
              title={intl.formatMessage({ id: 'substrate-page-video-one' })}
              link="none"
              videoId="iUMZyL5kTwc"
            />
            <FullScreenYouTube
              image={data.videoSubstrateTwo.childImageSharp.fluid.src}
              name={intl.formatMessage({ id: 'substrate-page-video-title' })}
              title={intl.formatMessage({ id: 'substrate-page-video-two' })}
              link="none"
              videoId="q1zLHO7Lkuk"
            />
            <FullScreenYouTube
              image={data.videoSubstrateThree.childImageSharp.fluid.src}
              name={intl.formatMessage({ id: 'substrate-page-video-title' })}
              title={intl.formatMessage({ id: 'substrate-page-video-three' })}
              link="none"
              videoId="O363z8UQYLE"
            />
          </div>
        </div>
      </section>
      <section className="h-full bg-textDark">
        <div className="container">
          <div className="px-4 mx-auto md:px-0 py-16 max-w-4xl">
            <div className="text-center text-parityWhite">
              <blockquote className="tracking-wider">
                {`"${intl.formatMessage({ id: 'substrate-page-gave-quote' })}"`}
              </blockquote>
              <p className="text-base md:text-lg font-normal mb-0 mt-8">
                {intl.formatMessage({ id: 'homepage-team-gavin' })}
              </p>
              <p className="text-sm mt-0 font-normal">
                {intl.formatMessage({ id: 'substrate-page-gave-quote-title' })}
              </p>
            </div>
          </div>
        </div>
      </section>
      <FeaturedBlogs />
      <FooterCTA
        title={intl.formatMessage({ id: 'substate-page-bottom-title' })}
        buttonText={intl.formatMessage({ id: 'substate-page-bottom-cta' })}
        buttonLink="https://substrate.dev/"
        subCTATextOne={intl.formatMessage({ id: 'substate-page-bottom-sub-cta-one' })}
        subCTATextTwo={intl.formatMessage({ id: 'substate-page-bottom-sub-cta-three' })}
        subCTATextLink="/collaborate/"
      />
      <Social />
    </Layout>
  );
}

export const query = graphql`
  {
    techCrunch: file(relativePath: { eq: "news-logos/logo-techcrunch-light.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
      name
    }
    coindesk: file(relativePath: { eq: "news-logos/logo-coindesk-light.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
      name
    }
    zk: file(relativePath: { eq: "news-logos/logo-zero-knowledge-light.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
      name
    }
    cointelegraph: file(relativePath: { eq: "news-logos/logo-cointelegraph-light.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
      name
    }
    epicenter: file(relativePath: { eq: "news-logos/logo-epicenter-light.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
      name
    }
    gavinWeb3: file(relativePath: { eq: "gavin-wood-web3-summit.jpg" }) {
      childImageSharp {
        fluid(toFormat: PNG, quality: 100) {
          src
        }
      }
    }
    videoSubstrateOne: file(relativePath: { eq: "video-substrate-1.jpg" }) {
      childImageSharp {
        fluid(toFormat: PNG, quality: 100) {
          src
        }
      }
    }
    videoSubstrateTwo: file(relativePath: { eq: "video-substrate-2.jpg" }) {
      childImageSharp {
        fluid(toFormat: PNG, quality: 100) {
          src
        }
      }
    }
    videoSubstrateThree: file(relativePath: { eq: "video-substrate-3.jpg" }) {
      childImageSharp {
        fluid(toFormat: PNG, quality: 100) {
          src
        }
      }
    }
    substrateTeams: allFile(filter: { relativeDirectory: { eq: "substrate-teams" } }) {
      edges {
        node {
          id
          childImageSharp {
            fluid(maxWidth: 200, quality: 90, toFormat: PNG) {
              ...GatsbyImageSharpFluid
            }
          }
          name
        }
      }
    }
  }
`;
