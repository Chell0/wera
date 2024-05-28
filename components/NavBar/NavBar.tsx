"use client"
import { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);


    return (
        <nav className="md:bg-transparent">
            <div className={`flex justify-between items-center ${isOpen ? 'bg-orange-500 p-4' : ''}`}>
                <div className={`${isOpen ? 'text-white' : 'text-orange-500'}`}>
                    <Link href="/" className="uppercase text-2xl sm:text-md md:text-lg lg:text-xl xl:text-4xl font-extrabold drop-shadow-lg">MachtBewusst<br />Hamburg</Link>
                </div>
                <div className="hidden text-sm md:flex bg-orange-500 rounded-lg px-3 py-2 space-x-4 text-white">
                    <Link href="/" className="hover:text-gray-500">Home</Link>
                    <Link href="/material" className=" hover:text-gray-500">Material</Link>
                    <Link href="/themen" className=" hover:text-gray-500">Themen</Link>
                    <Link href="/datenbank" className=" hover:text-gray-500">Datenbank</Link>
                    <Link href="/kalender" className=" hover:text-gray-500">Kalender</Link>
                </div>
                <div className="hidden md:block">
                    <Link href={`https://www.ossara.de`} target="_blank" rel="noopener noreferrer">
                        <Image src="/ossara-logo.png" alt="Ossara Logo" width={200} height={200} className="object-contain" />
                    </Link>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className={`${isOpen ? 'text-white' : 'text-orange-500'}`}>
                        {isOpen ? <XIcon className="h-8 w-8" /> : <MenuIcon className="h-8 w-8" />}
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-orange-500 p-4 space-y-2">
                    <Link href="/" className="block no-underline text-white hover:text-gray-300">Home</Link>
                    <Link href="/material" className="block no-underline text-white hover:text-gray-300">Material</Link>
                    <Link href="/themen" className="block no-underline text-white hover:text-gray-300">Themen</Link>
                    <Link href="/datenbank" className="block no-underline text-white hover:text-gray-300">Datenbank</Link>
                    <Link href="/kalender" className="block no-underline text-white hover:text-gray-300">Kalender</Link>
                </div>
            )}
        </nav>
    );
}
