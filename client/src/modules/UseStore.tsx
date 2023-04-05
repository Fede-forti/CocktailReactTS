import React from 'react'
import {create } from 'zustand'

export interface ICartDrink {
    name: string;
    price: number;
    quantity: number;
    image: string;
}

interface IStore {
    cart: ICartDrink[];
    add: (drink: ICartDrink) => void;
    remove: (index: number) => void;
    quantity: number;
    clear: () => void;
}



const useStore = create<IStore>((set) => ({
    cart: [],
    add: (drink:ICartDrink) => set((state) => ({ cart: [...state.cart, drink], quantity: state.quantity + 1 })),
    remove: (index:number) => set((state) => ({ cart: state.cart.filter((d, i) => i !==index), quantity: state.quantity - 1 })),
    quantity: 0,
    clear: () => set(() => ({ cart: [] })),
    }))


export default useStore