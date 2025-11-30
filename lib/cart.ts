/**
 * Shopping cart functionality
 */

export interface CartItem {
  productId: string
  productName: string
  productImage: string
  price: number
  quantity: number
}

export interface Cart {
  items: CartItem[]
  total: number
}

/**
 * Calculates total price of cart items
 */
export function calculateCartTotal(items: CartItem[]): number {
  return items.reduce((total, item) => total + item.price * item.quantity, 0)
}

/**
 * Adds item to cart or increases quantity if already exists
 */
export function addToCart(cart: Cart, item: Omit<CartItem, 'quantity'>): Cart {
  const existingItemIndex = cart.items.findIndex(
    (i) => i.productId === item.productId
  )

  let newItems: CartItem[]

  if (existingItemIndex >= 0) {
    newItems = [...cart.items]
    newItems[existingItemIndex] = {
      ...newItems[existingItemIndex],
      quantity: newItems[existingItemIndex].quantity + 1,
    }
  } else {
    newItems = [...cart.items, { ...item, quantity: 1 }]
  }

  return {
    items: newItems,
    total: calculateCartTotal(newItems),
  }
}

/**
 * Removes item from cart
 */
export function removeFromCart(cart: Cart, productId: string): Cart {
  const newItems = cart.items.filter((item) => item.productId !== productId)

  return {
    items: newItems,
    total: calculateCartTotal(newItems),
  }
}

/**
 * Updates item quantity in cart
 */
export function updateCartItemQuantity(
  cart: Cart,
  productId: string,
  quantity: number
): Cart {
  if (quantity <= 0) {
    return removeFromCart(cart, productId)
  }

  const newItems = cart.items.map((item) =>
    item.productId === productId ? { ...item, quantity } : item
  )

  return {
    items: newItems,
    total: calculateCartTotal(newItems),
  }
}

/**
 * Clears all items from cart
 */
export function clearCart(): Cart {
  return {
    items: [],
    total: 0,
  }
}
