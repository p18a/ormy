module.exports = {
    siteMetadata: {
        title: `ÖRMY ry`,
        description: `Oulun yliopiston raskaan musiikin ystävät ry.`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: `7d6366zmkfaz`,
                accessToken: `6ALZIo6us1Iae8KkFisN6D0Tpy2mwKBleFNCYVYPWJM`,
                host: `cdn.contentful.com`,
            },
        },
        {
            resolve: `gatsby-plugin-postcss`,
            options: {
                postCssPlugins: [
                    require(`postcss-preset-env`)({ stage: 0 }),
                    require("tailwindcss"),
                ],
            },
        },
        {
            resolve: `gatsby-plugin-purgecss`,
            options: {
                // printRejected: true, // Print removed selectors and processed file names
                // develop: true, // Enable while using `gatsby develop`
                tailwind: true, // Enable tailwindcss support
                // whitelist: ['whitelist'], // Don't remove this selector
                // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
                // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
            },
            whitelist: ["h-6", "w-6", "h-8", "w-8", "fill-current"],
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Oulun yliopiston raskaan musiikin ystävät ry`,
                short_name: `ÖRMY ry`,
                start_url: `/`,
                background_color: `#121212`,
                theme_color: `#121212`,
                display: `minimal-ui`,
                icon: `src/images/icon512.jpg`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
