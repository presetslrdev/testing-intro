function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

function addToCart(cart, product, quantity) {
  if (!Array.isArray(cart) || typeof product !== 'object' || typeof quantity !== 'number') {
    throw new RangeError('Неверный тип аргументов');
  }

  if (!quantity || quantity <= 0) {
    throw new RangeError('Неверное количество');
  }

  if (!product || quantity > product.stock) {
    throw new RangeError('Неверное количество');
  }

  if (cart.find(item => item.id === product.id)) {
    cart.find(item => item.id === product.id).quantity += quantity;
  } else {
    cart.push({ ...product, quantity });
  }

  return cart;
}
function changeQuantity(cart, productId, quantity) {
  if (!Array.isArray(cart) || typeof productId !== 'number' || typeof quantity !== 'number') {
    throw new RangeError('Неверный тип аргументов');
  }

  if (!quantity || quantity <= 0) {
    throw new RangeError('Неверное количество');
  }

  const item = cart.find(item => item.id === productId);
  if (!item) {
    return cart;
  }

  if (quantity > item.stock) {
    throw new RangeError('Неверное количество');
  }

  item.quantity = quantity;
  return cart;
}
function removeFromCart(cart, productId) {
  if (!Array.isArray(cart) || typeof productId !== 'number') {
    throw new RangeError('Неверный тип аргументов');
  }

  return cart.filter(item => item.id !== productId);
}
function calculateCartSubtotal(cart) {
  if (!Array.isArray(cart)) {
    throw new RangeError('Неверный тип аргументов');
  }

  if (cart.length === 0) {
    return 0;
  }

  return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
}
function calculateOrderTotal(cart, promoCode = '') {
  if (!Array.isArray(cart)) {
    throw new RangeError('Неверный тип аргументов');
  }

  let subtotal = calculateCartSubtotal(cart);
  let discount = 0;
  let delivery = 30000;

  if (subtotal >= 50000) {
    delivery = 0;
  }

  if (promoCode === 'SAVE10' && subtotal >= 20000) {
    discount = Math.floor(subtotal * 0.1);
  }

  return { subtotal, discount, delivery, total: subtotal - discount + delivery };
}

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
