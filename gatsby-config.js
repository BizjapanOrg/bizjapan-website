module.exports = {
  siteMetadata: {
    title: `Bizjapan`,
    description: `Bizjapan is a non-profit organization run by university students, which aims to promote student’s entrepreneurship in Japan. We run a lot of innovative projects. Our projects include space medicine, supporting international students coming to Japan, African startups and so on.`,
    author: `NPO Bizjapan`,
    url: "https://bizjapan.org",
    image: "home.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@BizjapanOrg"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/icon.png` // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        include: /images/
      }
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`en`, `ja`],
        defaultLanguage: `en`,
        redirect: true
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-124275761-1",
        head: false,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 0
      }
    }
  ],
  pathPrefix: "/bizjapan-new-website"
};
