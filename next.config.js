const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = withNextra({
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/documentation',  // Replace 'REPO_NAME' with your GitHub repository name
  assetPrefix: '/documentation/',  // Replace 'REPO_NAME' with your GitHub repository name
})
