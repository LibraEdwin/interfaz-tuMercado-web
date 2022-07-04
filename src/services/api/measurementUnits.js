// @ts-check
import { endPoints } from './index';

/**
 * Obtener todas las unidades de medida
 * @param {{
 *  limit?: number,
 *  page?: number,
 * } | undefined} param0
 *
 * @example getUnitMeasurementList({}) // retorna la pagina 1 con un limite de 10 posts
 * getUnitMeasurementList({limit: 5, page: 2}) // retorna la pagina 2 con un liminte de 5 posts
 *
 * @returns
 */
export const getUnitMeasurementList = async ({ limit = 10, page = 1 }) => {
  const uriGetAll = `${endPoints.measurementUnits.getMeasurementUnits}?limit=${limit}&page=${page}`;
  const response = await fetch(uriGetAll);

  return await response.json();
};

/**
 * Obtener una unidad de medida por su ID
 * @param {string | number} id
 * @returns
 */
export const getUnitMeasurement = (id) => {
  return fetch(endPoints.measurementUnits.getUnitMeasurement(id));
};

/**
 * Crear una unidad de medida
 * @param {object} unitMeasurement
 * @returns
 */
export const createUnitMeasurement = (unitMeasurement) => {
  return fetch(endPoints.measurementUnits.postUnitMeasurement, {
    method: 'POST',
    body: JSON.stringify(unitMeasurement)
  });
};
