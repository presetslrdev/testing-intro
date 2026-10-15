const products = require('../../src/data/products');
const { filterByCategory } = require('../../src/catalog');

describe('filterByCategory', () => {
  test('all возвращает товары с ID [1, 2, 3, 4, 5, 6]', () => {
    const filteredProducts = filterByCategory(products, 'all');
    const resultIds = filteredProducts.map((product) => product.id);

    expect(resultIds).toEqual([1, 2, 3, 4, 5, 6]);
  });
  test("undefined возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const filteredProducts = filterByCategory(products, undefined);
    const resultIds = filteredProducts.map((product) => product.id);

    expect(resultIds).toEqual([1, 2, 3, 4, 5, 6]);
  });
  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const filteredProducts = filterByCategory(products, '');
    const resultIds = filteredProducts.map((product) => product.id);

    expect(resultIds).toEqual([1, 2, 3, 4, 5, 6]);
  });
  test("electronics возвращает товары с ID [1, 2]", () => {
    const category = 'electronics';
    const filteredProducts = filterByCategory(products, category);
    const resultIds = filteredProducts.map((product) => product.id);

    expect(resultIds).toEqual([1, 2]);
  });
  test("books возвращает товары с ID [3, 6]", () => {
    const category = 'books';
    const filteredProducts = filterByCategory(products, category);
    const resultIds = filteredProducts.map((product) => product.id);

    expect(resultIds).toEqual([3, 6]);
  });
  test("home возвращает товары с ID [4, 5]", () => {
    const category = 'home';
    const filteredProducts = filterByCategory(products, category);
    const resultIds = filteredProducts.map((product) => product.id);

    expect(resultIds).toEqual([4, 5]);
  });
  test("clothes возвращает пустой массив", () => {
    const category = 'clothes';
    const filteredProducts = filterByCategory(products, category);
    const resultIds = filteredProducts.map((product) => product.id);

    expect(resultIds).toEqual([]);
  });
  test("toys возвращает пустой массив", () => {
    const category = 'toys';
    const filteredProducts = filterByCategory(products, category);
    const resultIds = filteredProducts.map((product) => product.id);

    expect(resultIds).toEqual([]);
  });
  test("sports возвращает пустой массив", () => {
    const category = 'sports';
    const filteredProducts = filterByCategory(products, category);
    const resultIds = filteredProducts.map((product) => product.id);

    expect(resultIds).toEqual([]);
  });
});
