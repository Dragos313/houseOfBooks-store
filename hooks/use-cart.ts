import { create } from "zustand";
import { Edition } from "@/types";
import { persist, createJSONStorage } from 'zustand/middleware'
import { toast } from "react-hot-toast";

interface CartStore {
    items: Edition[];
    addItem: (data: Edition) => void;
    removeItem: (id: string) => void;
    removeAll: () => void;
}

const useCart = create(persist<CartStore>((set, get) =>({
    items: [],
    addItem: (data: Edition) => {
        const currentItems = get().items;
        const existingItem = currentItems.find(item => item.id === data.id);

        if(existingItem) {
            return toast("Item already in cart.");
        }

        set({ items: [...get().items, data] })
        toast.success("Item added to cart.")
    },
    removeItem: (id: string) => {
        set({ items: [...get().items.filter(item => item.id !== id)] });
    },
    removeAll: () => set({ items: [] }),
}), {
    name: "cart-storage",
    storage: createJSONStorage(() => localStorage)
}))

export default useCart;