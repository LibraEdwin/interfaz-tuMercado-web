/**
 * Agregar query a una uri
 * @param {string} uri - url del endpoint
 * @param {object} query - queries
 *
 * @example
 * uriWithQuery('http://localhost:3000/api/v1/resourse', {
 * limit: 10, page: 2, name: 'example'
 * }) // result 'http://localhost:3000/api/v1/resourse?limit=10&page=2&name=example'
 *
 * @returns {string}
 */
export function uriWithQuery(uri, query) {
  let str = '';
  for (const property in query) {
    if (query[property] !== '' && query[property] !== undefined) {
      if (str === '') {
        str += '?';
      } else {
        str += '&';
      }

      let value = query[property];

      if (typeof value === 'string') {
        value = query[property].replace(/ /g, '%20');
      }

      str += `${property}=${value}`;
    }
  }

  return uri + str;
}

/**
 * Obtener el formato de moneda Local
 * @param {number} decimal
 * @returns
 */
export function formatCurrency(decimal, locale = 'es-PE') {
  const symbols = {
    'es-PE': 'PEN',
    'es-ES': 'EUR'
  };

  return new Intl.NumberFormat(locale, { style: 'currency', currency: symbols[locale] }).format(decimal);
}
