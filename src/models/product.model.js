import { db } from '../config/db.js';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';

const COLLECTION_NAME = 'productos';

const productCollection = collection(db, COLLECTION_NAME);

export const getAllProducts = async () => {
  try {
    const productList = await getDocs(productCollection);
    const products = productList.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return products;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getProductById = async (id) => {
  try {
    const productRef = doc(db, COLLECTION_NAME, id);
    const product = await getDoc(productRef);

    return product.data();
  } catch (error) {
    throw new Error(error.message);
  }
};

export const saveProduct = async (product) => {
  try {
    const newProduct = await addDoc(productCollection, product);
    return newProduct;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateProduct = async (id, product) => {
  try {
    const productRef = doc(db, COLLECTION_NAME, id);
    await updateDoc(productRef, product);
    return { id, ...product };
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteProduct = async (id) => {
  try {
    const productRef = doc(db, COLLECTION_NAME, id);
    return await deleteDoc(productRef);
  } catch (error) {
    throw new Error(error.message);
  }
};
