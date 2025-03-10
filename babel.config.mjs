module.exports = function(api) {
    api.cache(true);
    return {
      presets: [
        '@babel/preset-env', 
        '@babel/preset-react' 
      ],
      plugins: [
        [
          'module-resolver',
          {
            root: ['./src'],
            alias: {
              '@assets': './src/assets',
              '@components': './src/components',
              '@routes': './src/routes',
              '@pages': './src/pages',
              '@context': './src/context',
              '@server': './src/server',
              '@layouts': './src/layouts',
              '@utils': './src/utils',
            }
          }
        ],
        '@babel/plugin-proposal-class-properties' 
      ]
    };
  };
  