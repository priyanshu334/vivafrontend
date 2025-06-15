import { create } from "zustand";
import { CartItem, Product } from "@/utils/data";

interface CartState {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (title: string) => void;
  updateQuantity: (title: string, quantity: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  cart: [],

  addToCart: (product) =>
    set((state) => {
      const existing = state.cart.find((item) => item.title === product.title);
      if (existing) {
        return {
          cart: state.cart.map((item) =>
            item.title === product.title
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        cart: [...state.cart, { ...product, quantity: 1 }],
      };
    }),

  removeFromCart: (title) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.title !== title),
    })),

  updateQuantity: (title, quantity) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.title === title ? { ...item, quantity } : item
      ),
    })),

  clearCart: () => set({ cart: [] }),
}));
