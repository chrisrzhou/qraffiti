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
      },
    },
    'gatsby-plugin-offline',
  ],
};
