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
            '@utils': './src/utils',
            '@styles': './src/styles' 
          }
        }
      ],
      '@babel/plugin-proposal-class-properties'
    ]
  };
};