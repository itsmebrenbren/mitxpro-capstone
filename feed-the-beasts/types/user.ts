export interface User {
    _id: string;
    username: string;
    email: string;
    hashedPassword: string;
    cart: CartItem[];
    createdAt: string;
    updatedAt: string;
}

export interface CartItem {
    restaurantId: string;
    items: Item[];
    name: string;
}

export interface Item {
    name: string;
    quantity: number;
    price: number;
}