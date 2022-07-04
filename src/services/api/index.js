export * from './categories';
export * from './subcategories';
export * from './measurementUnits';

const API = process.env.NEXT_PUBLIC_URI_API;
const VERSION = process.env.NEXT_PUBLIC_VERSION_API;

export const endPoints = {
  categories: {
    getCategories: `${API}/api/${VERSION}/categories`,
    getCategory: (id) => `${API}/api/${VERSION}/categories/${id}`,
    postCategory: `${API}/api/${VERSION}/categories`,
    patchCategory: (id) => `${API}/api/${VERSION}/categories/${id}`,
    deleteCategory: (id) => `${API}/api/${VERSION}/categories/${id}`
  },
  subcategories: {
    getSubcategories: `${API}/api/${VERSION}/subcategories`,
    getSubcategory: (id) => `${API}/api/${VERSION}/subcategories/${id}`,
    postSubcategory: `${API}/api/${VERSION}/subcategories`,
    patchSubcategory: (id) => `${API}/api/${VERSION}/subcategories/${id}`,
    deleteSubcategory: (id) => `${API}/api/${VERSION}/subcategories/${id}`
  },
  products: {
    getProducts: `${API}/api/${VERSION}/products`,
    getProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
    postProduct: `${API}/api/${VERSION}/products`,
    patchProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
    deleteProduct: (id) => `${API}/api/${VERSION}/products/${id}`
  },
  measurementUnits: {
    getMeasurementUnits: `${API}/api/${VERSION}/measurement-units`,
    getUnitMeasurement: (id) => `${API}/api/${VERSION}/measurement-units/${id}`,
    postUnitMeasurement: `${API}/api/${VERSION}/measurement-units`,
    patchUnitMeasurement: (id) => `${API}/api/${VERSION}/measurement-units/${id}`,
    deleteUnitMeasurement: (id) => `${API}/api/${VERSION}/measurement-units/${id}`
  }
  // regsistrar enpoints
};
