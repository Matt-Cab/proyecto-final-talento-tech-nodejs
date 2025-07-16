import productService from '../services/product.service.js';
const getProducts = async (req, res) => {
  try {
    const products = await productService.getAll();
    res.status(200).json({ message: 'Lista de productos', payload: products });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error interno del servidor', error: error.message });
  }
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) return res.status(400).json({ message: 'Debe ingresar un id.' });

    const product = await productService.getProduct(id);
    res.status(200).json({ message: 'Producto obtenido:', payload: product });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error interno del servidor', error: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const { nombre, precio, disponible } = req.body;

    if (!nombre || !precio)
      return res
        .status(400)
        .json({ message: 'Debe completar todos los campos nombre y precio.' });

    const newProduct = await productService.createProduct({
      nombre,
      precio: +precio,
      disponible: disponible || false,
    });
    res.status(201).json({ message: 'Producto creado', payload: newProduct });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error interno del servidor', error: error.message });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { nombre, precio, disponible } = req.body;
  try {
    if (!id) return res.status(400).json({ message: 'Debe ingresar un id.' });
    else if (!nombre || !precio)
      return res
        .status(400)
        .json({ message: 'Debe completar los campos nombre y precio.' });

    const updatedProduct = await productService.update(id, {
      nombre,
      precio: +precio,
      disponible: disponible || false,
    });
    res.status(200).json({
      message: 'Producto actualizado:',
      payload: updatedProduct,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error interno del servidor', error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) return res.status(400).json({ message: 'Debe ingresar un id.' });

    const product = await productService.deleteById(id);
    res.status(200).json({ message: 'Producto ELIMINADO:', payload: product });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error interno del servidor', error: error.message });
  }
};

export default {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
