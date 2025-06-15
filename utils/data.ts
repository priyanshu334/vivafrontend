// data.ts

export interface Product {
  title: string
  price: number
  image: string
  label: string
  originalPrice?: number
  discount?: string
}

export interface CartItem extends Product {
  quantity: number
}

// All products list
export const products: Product[] = [
  {
    title: "Black Blossom Threadwork Cotton Suit",
    price: 1490,
    image: "/img3.png",
    label: "BEST PICK",
  },
  {
    title: "Blue Blossom Threadwork Cotton Suit",
    price: 1490,
    image: "/img3.png",
    label: "BEST PICK",
  },
  {
    title: "Red Blossom Threadwork Cotton Suit",
    price: 1490,
    image: "/img3.png",
    label: "ADD TO CART",
  },
  {
    title: "Pink Blossom Threadwork Cotton Kurti",
    price: 1430,
    originalPrice: 2380,
    discount: "40% OFF",
    image: "/img3.png",
    label: "ADD TO CART",
  },
  {
    title: "Blue Blossom Threadwork Cotton Kurti",
    price: 1430,
    originalPrice: 2380,
    discount: "40% OFF",
    image: "/img3.png",
    label: "ADD TO CART",
  },
  {
    title: "Black Blossom Threadwork Cotton Kurti",
    price: 1430,
    originalPrice: 2380,
    discount: "40% OFF",
    image: "/img3.png",
    label: "ADD TO CART",
  },
]

// Empty wishlist and cart to start with
export let wishlist: Product[] = [
    
]

export let cart: CartItem[] = []
