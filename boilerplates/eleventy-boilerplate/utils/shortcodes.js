module.exports = {
  /**
   * SCG icon shortcode
   * @param {string} name
   * @return {string}
   */
  icon: function (name) {
    return `<svg class="icon icon--${name}" role="img" aria-hidden="true" width="24" height="24">
              <use xlink:href="#icon-${name}"></use>
            </svg>`;
  },
};
