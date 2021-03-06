module.exports = {
  siteMetadata: {
    title: 'qraffiti',
  },
  plugins: [
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'qraffiti',
        short_name: 'qraffiti',
        start_url: '/',
        background_color: 'black',
        theme_color: 'white',
        display: 'minimal-ui',
        icon: 'src/assets/logo.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'backgrounds',
        path: `${__dirname}/src/assets/backgrounds`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'logos',
        path: `${__dirname}/src/assets/logos`,
      },
    },
    'gatsby-plugin-offline',
  ],
};
