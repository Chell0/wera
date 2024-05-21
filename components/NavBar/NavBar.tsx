"use client"
import { useEffect, useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    // const [scroll, setScroll] = useState(false);


    const toggleMenu = () => setIsOpen(!isOpen);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         setScroll(window.scrollY > 0);
    //     };

    //     window.addEventListener("scroll", handleScroll);
    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, []);

    return (
        <nav className="p-6 md:bg-transparent">
            <div className={`flex justify-between items-center ${isOpen ? 'bg-orange-400 p-4' : ''}`}>
                <div className={`text-3xl font-bold ${isOpen ? 'text-white' : 'text-orange-500'}`}>
                    <Link href="/">Titel</Link>
                </div>
                <div className="hidden md:flex bg-orange-400 rounded-lg px-4 py-2 space-x-4 text-white">
                    <Link href="/" className="hover:text-gray-500">Home</Link>
                    <Link href="/material" className=" hover:text-gray-500">Material</Link>
                    <Link href="/blog" className=" hover:text-gray-500">Blog</Link>
                    <Link href="/databank" className=" hover:text-gray-500">Databank</Link>
                    <Link href="/kalendar" className=" hover:text-gray-500">Kalendar</Link>
                </div>
                <div className="hidden md:block">
                    <Image src="/ossara-logo.png" alt="Ossara Logo" width={150} height={100} className="object-contain" />
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className={`${isOpen ? 'text-white' : 'text-orange-600'}`}>
                        {isOpen ? <XIcon className="h-8 w-8" /> : <MenuIcon className="h-8 w-8" />}
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-orange-400 p-4 space-y-2">
                    <Link href="/" className="block no-underline text-white hover:text-gray-300">Home</Link>
                    <Link href="/material" className="block no-underline text-white hover:text-gray-300">Material</Link>
                    <Link href="/blog" className="block no-underline text-white hover:text-gray-300">Blog</Link>
                    <Link href="/databank" className="block no-underline text-white hover:text-gray-300">Databank</Link>
                    <Link href="/kalendar" className="block no-underline text-white hover:text-gray-300">Kalendar</Link>
                    <div className="flex justify-center mt-4">
                        <Image src="/ossara-logo.png" alt="Ossara Logo" width={200} height={100} className="object-contain" />
                    </div>
                </div>
            )}
        </nav>
    );
}
