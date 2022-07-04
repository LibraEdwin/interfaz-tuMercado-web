// @ts-check
import { uriWithQuery } from '@libs/utils';
import { endPoints } from './index';

/**
 * Obtener todas las categorías
 * @param {{
 *  limit?: number,
 *  page?: number,
 * } | undefined} query
 *
 * @example getCategoryList({}) // retorna la pagina 1 con un limite de 10 posts
 * getCategoryList({limit: 5, page: 2}) // retorna la pagina 2 con un liminte de 5 posts
 *
 * @returns
 */
export const getCategoryList = async ({ limit = 10, page = 1, ...query }) => {
  const uriGetAll = uriWithQuery(endPoints.categories.getCategories, { limit, page, ...query });

  const response = await fetch(uriGetAll);

  return await response.json();
};

/**
 * Obtener una categoría por su ID
 * @param {string | number} id
 * @returns
 */
export const getCategory = async (id) => {
  const response = await fetch(endPoints.categories.getCategory(id));

  return await response.json();
};

/**
 * Crear una categoría
 * @param {string} name
 * @returns
 */
export const createCategory = async (name) => {
  const response = await fetch(endPoints.categories.postCategory, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({ name })
  });

  return await response.json();
};

/**
 * Actualizar una categoría
 * @param {number} id
 * @param {string} name
 * @returns
 */
export const updateCategory = async (id, name) => {
  const response = await fetch(endPoints.categories.patchCategory(id), {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'PATCH',
    body: JSON.stringify({ name })
  });

  return await response.json();
};
