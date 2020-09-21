const path = require('path');
const sass = require('node-sass');
const cssesc = require('cssesc');
const postcss = require('postcss');
const cssnano = require('cssnano');
const purgecss = require('@fullhuman/postcss-purgecss');
const autoprefixer = require('autoprefixer');

const isProd = process.env.ELEVENTY_ENV === 'production';

// main entry point name
const ENTRY_FILE_NAME = 'main.scss';

// configs
const purgecssConfig = {
  content: ['./dist/**/*.html', './src/**/*.js', './src/**/*.njk'],
  safelist: {
    standard: [':before', ':after'],
    deep: [/focus-visible$/],
  },
};

const cssNanoConfig = {
  preset: ['default', { discardComments: { removeAll: true } }],
};

module.exports = class {
  /**
   * Configure css build here
   * @return {Promise<{permalink: string, eleventyExcludeFromCollections: boolean, entryPath: string}>}
   */
  async data() {
    const entryPath = path.join(__dirname, `/${ENTRY_FILE_NAME}`);
    return {
      permalink: `/assets/styles/main.css`,
      eleventyExcludeFromCollections: true,
      entryPath,
    };
  }

  /**
   * Compile Sass to CSS,
   * Embed Source Map in Development
   * @param {Object} config
   * @return {Promise<string>}
   */
  async compile(config) {
    return new Promise((resolve, reject) => {
      if (!isProd) {
        config.sourceMap = true;
        config.sourceMapEmbed = true;
        config.outputStyle = 'expanded';
        config.outFile = path.join(__dirname, `/${ENTRY_FILE_NAME}`);
        config.sourceMapContents = true;
      }
      return sass.render(config, (err, result) => {
        if (err) {
          return reject(err);
        }
        resolve(result.css.toString());
      });
    });
  }

  /**
   * Optimize css
   * @param {string} css
   * @return {Promise}
   */
  async optimize(css) {
    if (!isProd) {
      return css;
    }
    return await postcss([cssnano(cssNanoConfig), purgecss(purgecssConfig), autoprefixer])
      .process(css, { from: undefined })
      .then((result) => {
        return result.css;
      });
  }

  /**
   * display an error overlay when CSS build fails.
   * this brilliant idea is taken from Mike Riethmuller / Supermaya
   * @see https://github.com/MadeByMike/supermaya/blob/master/site/utils/compile-scss.js
   * @param {string} error
   * @return {string}
   */
  renderError(error) {
    return `
        /* Error compiling stylesheet */
        *,
        *::before,
        *::after {
            box-sizing: border-box;
        }
        html,
        body {
            margin: 0;
            padding: 0;
            min-height: 100vh;
            font-family: monospace;
            font-size: 1.25rem;
            line-height:1.5;
        } 
        body::before { 
            content: ''; 
            background: #000;
            top: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            opacity: 0.7;
            position: fixed;
        }
        body::after { 
            content: '${cssesc(error)}'; 
            white-space: pre-wrap;
            display: block;
            top: 0; 
            padding: 30px;
            margin: 50px;
            width: calc(100% - 100px);
            color:#721c24;
            background: #f8d7da;
            border: solid 2px red;
            position: fixed;
        }`;
  }

  /**
   * render the CSS file
   * @param {string} entryPath
   * @return {Promise}
   */
  async render({ entryPath }) {
    try {
      const css = await this.compile({ file: entryPath });
      return await this.optimize(css);
    } catch (err) {
      // if things go wrong
      if (isProd) {
        // throw and abort in production
        throw new Error(err);
      } else {
        // otherwise display the error overlay
        console.error(err);
        const msg = err.formatted || err.message;
        return this.renderError(msg);
      }
    }
  }
};
