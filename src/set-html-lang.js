/**
 * Utility to set the `lang` attribute's value of the `html` element. Used in
 * projects built with Next.js as the `html` element is rendered on the server
 * and is not mutable in the client.
 *
 * The function can be invoked server-side without errors but has no effect.
 *
 * @param {string} lang - ie. `en`
 */
const setHtmlLang = lang => {
  // Get the html element
  const htmlElm = document && document.querySelector('html')
  // Set the lang attribute
  htmlElm && htmlElm.setAttribute('lang', lang)
}

module.exports = setHtmlLang
