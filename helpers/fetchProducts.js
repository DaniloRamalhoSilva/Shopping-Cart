const getListProductsUrl = (QUERY) => `https://api.mercadolibre.com/sites/MLB/search?q=${QUERY}`;

const fetchProducts = async (product) => {
  // seu código aqui
  try {
    const url = getListProductsUrl(product);
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
