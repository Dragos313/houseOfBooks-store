"use client"

import { Edition } from "@/types";
import Currency from "./ui/currency";
import Button from "./ui/button";
import { ShoppingCart } from "lucide-react";
import useCart from "@/hooks/use-cart";
import { MouseEventHandler } from "react";

interface InfoProps {
    data: Edition;
}

const Info: React.FC<InfoProps> = ({
    data
}) => {
    const cart = useCart();
    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();
        cart.addItem(data);
    }
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
            <div className="mt-3 flex items-end justify-between">
                <p className="texr-2xl text-gray-900">
                    <Currency value={data?.price}/>
                </p>
            </div>
            <hr className="my-4"/>
            <div className="flex flex-col gap-y-4">
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">Book:</h3>
                    <div>
                        {data?.book?.name}
                    </div>
                </div>
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">Publishing House:</h3>
                    <div>
                        {data?.publishingHouse?.name}
                    </div>
                </div>
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">Language:</h3>
                    <div>
                        {data?.language?.name}
                    </div>
                </div>
                {data?.isAntiquarian && (
                    <div className="flex items-center gap-x-4">
                        <h3 className="font-semibold text-black">Old Book</h3>
                    </div>
                )}
                <div className="mt-10 flex items-center gap-x-3">
                    <Button onClick={onAddToCart} className="flex items-center gap-x-2">
                        Add To Cart
                        <ShoppingCart/>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Info;