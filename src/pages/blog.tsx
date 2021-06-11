import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { useIntl } from 'react-intl';
import Layout from '../components/layouts/Layout';
import BlogExcerpt from '../components/BlogExcerpt';
import SEO from '../components/layouts/SEO';
import Social from '../components/Social';
import StaticButton from '../components/StaticButton';

interface BlogPageProps {
  data: any;
  pageContext: any;
}

export default function BlogPage(props: BlogPageProps) {
  const intl = useIntl();
  const { data } = props;
  const [visibleBlogs, setVisibleBlogs] = useState(10);

  return (
    <Layout theme="light">
      <SEO title={intl.formatMessage({ id: 'blog-page-seo' })} />
      <section className="block h-hero min-h-heroMin">
        <div className="absolute h-hero min-h-heroMin z-0 w-full top-0 left-0 bg-hero-blogPage bg-cover bg-center"></div>
        <div className="container relative text-center text-white h-5/6 flex flex-col justify-center">
          <h3 className="text-white font-normal md:text-5xl md:mb-8">
            {intl.formatMessage({ id: 'blog-page-title' })}
          </h3>
          <h4 className="text-white font-normal leading-relaxed px-4 mb-8 text-lg md:text-2xl md:px-24">
            {intl.formatMessage({ id: 'blog-page-description' })}
          </h4>
        </div>
      </section>
      <section className="mx-4 -mt-16">
        {data.allMdx.edges.slice(0, visibleBlogs).map((edge: any, index: any) => {
          return (
            <article key={index}>
              <BlogExcerpt
                title={edge.node.frontmatter.blogTitle}
                link={edge.node.frontmatter.slug}
                date={edge.node.frontmatter.date_published}
                mdTags={edge.node.frontmatter.tags}
                image={edge.node.frontmatter.image}
                excerpt={edge.node.excerpt}
                timeToRead={edge.node.timeToRead}
              />
            </article>
          );
        })}
        <div className="flex justify-center my-10">
          {visibleBlogs < data.allMdx.edges.length ? (
            <div onClick={() => setVisibleBlogs(visibleBlogs + 10)}>
              <StaticButton>Load more</StaticButton>
            </div>
          ) : null}
        </div>
      </section>
      <Social />
    </Layout>
  );
}

export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date_published, order: DESC }) {
      edges {
        node {
          frontmatter {
            blogTitle
            date_published(formatString: "MMMM DD, YYYY")
            tags
            image
            slug
          }
          excerpt(pruneLength: 220)
          timeToRead
        }
      }
    }
  }
`;
