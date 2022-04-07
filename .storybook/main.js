const path = require('path');

const fs = require('fs');

const {
  merge
} = require('webpack-merge');

function getPackageDir(filepath) {
  let currDir = path.dirname(require.resolve(filepath));

  while (true) {
    if (fs.existsSync(path.join(currDir, 'package.json'))) {
      return currDir;
    }

    const {
      dir,
      root
    } = path.parse(currDir);

    if (dir === root) {
      throw new Error(`Could not find package.json in the parent directories starting from ${filepath}.`);
    }

    currDir = dir;
  }
}

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/preset-create-react-app'],
  webpackFinal: async config => {
    // Add emotion plugin & preset before react loader
    // And disable babelrc to prevent confusion
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        babelrc: false,
        plugins: ['emotion'],
        presets: [['react-app', {
          flow: false,
          typescript: true
        }], require.resolve('@emotion/babel-preset-css-prop')]
      }
    });
    return merge(config, {
      resolve: {
        alias: {
          '@emotion/core': getPackageDir('@emotion/react'),
          '@emotion/styled': getPackageDir('@emotion/styled'),
          'emotion-theming': getPackageDir('@emotion/react')
        }
      }
    });
  },
  core: {
    builder: "webpack5"
  }
};