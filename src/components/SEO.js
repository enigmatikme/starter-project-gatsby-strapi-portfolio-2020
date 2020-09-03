import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"


const SEO = ({title, description}) => {
  const { site } = useStaticQuery(query);
  const { 
    twitterUsername, 
    siteTitle, 
    siteDesc, 
    siteUrl, 
    image, 
    author
  } = site.siteMetadata;
  return (
    <Helmet htmlAttributes={{lang:"en"}} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={description || siteDesc} />
      <meta name="image" content={image} />
      {/* twitter cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDesc} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
      
      {/* google/search */}
      <meta itemprop="name" content="Home | WebDev Portfolio" />
      <meta itemprop="description" content="A Software Engineer looking to bring your business ideas to life" />
      <meta itemprop="image" content="https://karins-portfolio.netlify.app//karin-twitter-img.png" />

      {/* fb meta tag */}
      <meta property="og:url" content="https://karins-portfolio.netlify.app" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Home | WebDev Portfolio" />
      <meta property="og:description" content="Karin's Portfolio" />
      <meta property="og:image" content="https://karins-portfolio.netlify.app//karin-twitter-img.png" />


    </Helmet>
  )
}

export default SEO

export const query = graphql `{
    site {
      siteMetadata {
        twitterUsername
        siteTitle:title
        siteUrl
        image
        author
        siteDesc:description
      }
    }
  }
`;