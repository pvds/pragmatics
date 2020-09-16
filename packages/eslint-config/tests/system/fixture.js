const tired = true;
const cookieCount = 1;
monster(cookieCount);

/**
 * Cookiemonster
 * @param cookies
 * @param {boolean} tired
 * @returns {*}
 */
function monster(cookies, tired = false) {
  const more = `nomnom x ${cookies}, need more cookies!`;
  const full = `my tummy hurts`;

  return !tired ? more : full;
}
