const htmlmin = require('html-minifier');
const critical = require('critical');
const buildDir = 'dist';

const shouldTransformHTML = (outputPath) => outputPath && outputPath.endsWith('.html');

const isHomePage = (outputPath) => outputPath === `${buildDir}/index.html`;

process.setMaxListeners(Infinity);
module.exports = {
  /**
   * Minify html
   * @param {string} content
   * @param {string} outputPath
   * @return {string}
   */
  htmlmin: function (content, outputPath) {
    if (shouldTransformHTML(outputPath)) {
      return htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
    }
    return content;
  },

  /**
   * Inline critial css
   * @param {string} content
   * @param {string} outputPath
   * @return {Promise<Object.html|*>}
   */
  critical: async function (content, outputPath) {
    if (shouldTransformHTML(outputPath) && isHomePage(outputPath)) {
      try {
        const config = {
          base: `${buildDir}/`,
          html: content,
          inline: true,
          width: 1280,
          height: 800,
          penthouse: {
            forceInclude: ['/^.offcanvas/'],
          },
        };
        const { html } = await critical.generate(config);
        return html;
      } catch (err) {
        console.error(err);
      }
    }
    return content;
  },
};
