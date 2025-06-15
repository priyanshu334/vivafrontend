import { create } from "zustand";
import { Product } from "@/utils/data";

interface WishlistState {
  wishlist: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (title: string) => void;
}

export const useWishlistStore = create<WishlistState>((set) => ({
  wishlist: [],
  addToWishlist: (product) =>
    set((state) => ({
      wishlist: [...state.wishlist, product],
    })),
  removeFromWishlist: (title) =>
    set((state) => ({
      wishlist: state.wishlist.filter((item) => item.title !== title),
    })),
}));
