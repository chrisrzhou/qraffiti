module.exports = {
  siteMetadata: {
    title: 'qraffiti',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'qraffiti',
        short_name: 'qraffiti',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png',
      },
    },
    'gatsby-plugin-offline',
  ],
};
