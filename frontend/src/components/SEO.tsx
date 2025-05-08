import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

interface SEOProps {
  title?: string;
  description?: string;
  pathname?: string;
  image?: string;
  article?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  pathname,
  image,
  article = false,
}) => {
  const { site } = useStaticQuery(graphql`
    query SEO {
      site {
        siteMetadata {
          title
          description
          siteUrl
          author
          twitter
        }
      }
    }
  `);

  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
    author,
    twitter,
  } = site.siteMetadata;

  const seo = {
    title: title ? `${title} | ${defaultTitle}` : defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ''}`,
    image: image ? `${siteUrl}${image}` : null,
  };

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="author" content={author} />

      {/* Open Graph */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:url" content={seo.url} />
      {seo.image && <meta property="og:image" content={seo.image} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitter} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      {seo.image && <meta name="twitter:image" content={seo.image} />}

      {/* Canonical URL */}
      <link rel="canonical" href={seo.url} />
    </Helmet>
  );
};

export default SEO; 