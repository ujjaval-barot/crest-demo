export const checkInventoryStock = (productId, inventoryData) =>
  inventoryData.find((inventoryitem) => inventoryitem.productId === productId)
    .quantity > 0;

export const checkPurchaseLimit = (varientId, cartData) => {
  let exhistingProduct = cartData.find(
    (cartItem) => varientId === cartItem.varientId
  );
  if (!exhistingProduct) return true;
  else if (exhistingProduct.purchaseLimit <= exhistingProduct.orderQuantity)
    return false;
  else return true;
};
