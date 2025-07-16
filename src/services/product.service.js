import {
  getAllProducts,
  getProductById,
  saveProduct,
  updateProduct,
  deleteProduct,
} from '../models/product.model.js';

const getAll = async () => {
  return await getAllProducts();
};

const getProduct = async (id) => {
  return await getProductById(id);
};

const createProduct = async (product) => {
  const productId = (await saveProduct(product)).id;
  return { ...product, id: productId };
};

const update = async (id, product) => {
  return await updateProduct(id, product);
};

const deleteById = async (id) => {
  return await deleteProduct(id);
};

export default { getAll, getProduct, createProduct, update, deleteById };
