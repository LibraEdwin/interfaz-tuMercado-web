// @ts-check
import { uriWithQuery } from '@libs/utils';
import { endPoints } from './index';

/**
 * Obtener todas las subcategorías
 * @param {{
 *  limit?: number,
 *  page?: number,
 * } | undefined} param0
 *
 * @example getPosts() // retorna la pagina 1 con un limite de 10 posts
 * getPosts({limit: 5, page: 2}) // retorna la pagina 2 con un liminte de 5 posts
 *
 * @returns
 */
export const getSubcategoryList = async ({ limit = 10, page = 1, ...query }) => {
  const uriGetAll = uriWithQuery(endPoints.subcategories.getSubcategories, { limit, page, ...query });
  const response = await fetch(uriGetAll);

  return await response.json();
};

/**
 * Obtener una subcategoría por su ID
 * @param {string | number} id
 * @returns
 */
export const getSubcategory = (id) => {
  return fetch(endPoints.subcategories.getSubcategory(id));
};

/**
 * Crear una subcategoría
 * @param {object} subcategory
 * @returns
 */
export const createSubcategory = (subcategory) => {
  return fetch(endPoints.subcategories.postSubcategory, {
    method: 'POST',
    body: JSON.stringify(subcategory)
  });
};
