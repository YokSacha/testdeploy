import API from "./axios";

function getErrorMessage(error, fallback) {
  return error?.response?.data?.error || error?.response?.data?.message || fallback;
}

export async function getAllProducts() {
  try {
    const response = await API.get("/api/products");
    return response.data;
  } catch (error) {
    throw new Error(getErrorMessage(error, "Unable to fetch all products."), { cause: error });
  }
}

export async function getShoeById(id) {
  try {
    const response = await API.get(`/${encodeURIComponent(id)}`);
    return response.data;
  } catch (error) {
    throw new Error(getErrorMessage(error, "Unable to fetch shoe by ID."), { cause: error });
  }
}

export async function getShoesByBrand(brand) {
  try {
    const response = await API.get(`/brand/${encodeURIComponent(brand)}`);
    return response.data;
  } catch (error) {
    throw new Error(getErrorMessage(error, "Unable to fetch shoes by brand."), { cause: error });
  }
}

export async function getAllBrands() {
  try {
    const response = await API.get("/brand");
    return response.data;
  } catch (error) {
    throw new Error(getErrorMessage(error, "Unable to fetch brands."), { cause: error });
  }
}

export async function getShoesByCategory(category) {
  try {
    const response = await API.get(`/category/${encodeURIComponent(category)}`);
    return response.data;
  } catch (error) {
    throw new Error(getErrorMessage(error, "Unable to fetch shoes by category."), { cause: error });
  }
}

export async function createBrand(brandData) {
  try {
    const response = await API.post("/newBrand", brandData);
    return response.data;
  } catch (error) {
    throw new Error(getErrorMessage(error, "Unable to create brand."), { cause: error });
  }
}

export async function createProduct(productData) {
  try {
    const response = await API.post("/createProduct", productData);
    return response.data;
  } catch (error) {
    throw new Error(getErrorMessage(error, "Unable to create product."), { cause: error });
  }
}

export async function updateProduct(id, productData) {
  try {
    const response = await API.patch(`/${encodeURIComponent(id)}`, productData);
    return response.data;
  } catch (error) {
    throw new Error(getErrorMessage(error, "Unable to update product."), { cause: error });
  }
}

export async function deleteProduct(id) {
  try {
    const response = await API.delete(`/${encodeURIComponent(id)}`);
    return response.data;
  } catch (error) {
    throw new Error(getErrorMessage(error, "Unable to delete product."), { cause: error });
  }
}
