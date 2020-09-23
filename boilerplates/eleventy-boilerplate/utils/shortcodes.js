module.exports = {
  /**
   * SCG icon shortcode
   * @param {string} name
   * @return {string}
   */
  icon: (
    name
  ) => `<svg class="icon icon--${name}" role="img" aria-hidden="true" width="24" height="24">
          <use xlink:href="#icon-${name}"></use>
        </svg>`,

  /**
   *
   * @param {string} instance
   * @param {string} message
   * @param {boolean} hasCta
   * @param {string} ctaLabel
   * @param {boolean} hasDismiss
   * @param {string} dismissLabel
   * @return {string}
   */
  snackbar: (
    instance,
    message,
    hasCta = false,
    ctaLabel = 'snackbar cta',
    hasDismiss = false,
    dismissLabel = 'snackbar cta'
  ) => {
    const cta = !hasCta
      ? ''
      : `<button class="snackbar__cta" id="${instance}-cta">
        ${ctaLabel}
      </button>`;
    const dismiss = !hasDismiss
      ? ''
      : `<button
            aria-label="${dismissLabel}"
            class="snackbar__dismiss"
            id="${instance}-dismiss"
        >
          <svg class="snackbar__dismiss-icon" aria-hidden="true" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"
            />
          </svg>
        </button>`;
    return `
      <div class="${instance} snackbar" role="alert">
        ${cta}
        <div class="snackbar__text">${message}</div>
        ${dismiss}
      </div>`;
  },
};
