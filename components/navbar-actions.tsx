"use client"
import Button from '@/components/ui/button';
import useCart from '@/hooks/use-cart';
import { ShoppingBag } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { LogIn } from 'lucide-react';

const NavbarActions = () => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true);
    }, [])

    const cart = useCart();
    const router = useRouter();

    if(!isMounted) {
        return null;
    }

    return (
        <div className="flex items-center ml-auto gap-x-4">
            <Button className='flex items-center px-4 py-2 bg-black rounded-full'
                onClick={() => router.push("/cart")}>
                <ShoppingBag size={20} color='white' />
                <span className='ml-2 text-sm font-medium text-white'>
                    {cart?.items?.length}
                </span>
            </Button>
            <Button className='flex items-center px-4 py-2 bg-black rounded-full text-white'
                onClick={() => window.open("http://localhost:3000", "_blank")}>
                <LogIn size={20} color='white' />
                <span className='ml-2 text-sm font-medium text-white'>
                    Login
                </span>
            </Button>
        </div>
    )
}

export default NavbarActions;