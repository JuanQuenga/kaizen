import { writable } from "svelte/store";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

const CART_STORAGE_KEY = "shopping_cart";

function createCart() {
  // Load initial cart data from localStorage
  const storedCart =
    typeof localStorage !== "undefined"
      ? localStorage.getItem(CART_STORAGE_KEY)
      : null;
  const initialCart: CartItem[] = storedCart ? JSON.parse(storedCart) : [];

  const { subscribe, set, update } = writable<CartItem[]>(initialCart);

  // Save cart to localStorage whenever it changes
  subscribe((cart) => {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    }
  });

  return {
    subscribe,
    addItem: (item: CartItem) =>
      update((items) => {
        const existingItem = items.find((i) => i.id === item.id);
        if (existingItem) {
          return items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          );
        }
        return [...items, { ...item, quantity: 1 }];
      }),
    removeItem: (id: string) =>
      update((items) => items.filter((i) => i.id !== id)),
    updateQuantity: (id: string, quantity: number) =>
      update((items) =>
        items.map((i) => (i.id === id ? { ...i, quantity } : i))
      ),
    clearCart: () => {
      set([]);
      if (typeof localStorage !== "undefined") {
        localStorage.removeItem(CART_STORAGE_KEY);
      }
    },
  };
}

export const cart = createCart();
