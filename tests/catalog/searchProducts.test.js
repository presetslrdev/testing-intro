const products = require('../../src/data/products');
const { searchProducts } = require('../../src/catalog');

describe('searchProducts', () => {
  test('Наушники возвращает товар с ID 1', () => {
    const query = 'Наушники';
    const result = searchProducts(products.filter((product) => [1, 2, 4].includes(product.id)), query);
    expect(result).toEqual(products.filter(p => p.id === 1));
  });
  test('Чистый код возвращает товар с ID 6', () => {
    const query = 'Чистый код';
    const result = searchProducts(products.filter((product) => [6, 2, 4].includes(product.id)), query);
    expect(result).toEqual(products.filter(p => p.id === 6));
  });
  test('Настольная лампа возвращает товар с ID 4', () => {
    const query = 'Настольная лампа';
    const result = searchProducts(products.filter((product) => [6, 2, 4].includes(product.id)), query);
    expect(result).toEqual(products.filter(p => p.id === 4));
  });
  test('javascript возвращает товар с ID 3', () => {
    const query = 'javascript';
    const result = searchProducts(products.filter((product) => [3, 1, 4].includes(product.id)), query);
    expect(result).toEqual(products.filter(p => p.id === 3));
  });
  test('ЧЕХОЛ возвращает товар с ID 5', () => {
    const query = 'ЧЕХОЛ';
    const result = searchProducts(products.filter((product) => [5, 2, 6].includes(product.id)), query);
    expect(result).toEqual(products.filter(p => p.id === 5));
  });
  test('наушники возвращает товар с ID 1', () => {
    const query = 'наушники';
    const result = searchProducts(products, query);
    expect(result).toEqual(products.filter(p => p.id === 1));
  });
  test('пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]', () => {
    const query = '';
    const result = searchProducts(products, query);
    expect(result).toEqual(products);
  });
  test('строка из пробелов возвращает товары с ID [1, 2, 3, 4, 5, 6]', () => {
    const query = '   ';
    const result = searchProducts(products, query);
    expect(result).toEqual(products);
  });
  test('\t\n возвращает товары с ID [1, 2, 3, 4, 5, 6]', () => {
    const query = '\t\n';
    const result = searchProducts(products, query);
    expect(result).toEqual(products);
  });
});
