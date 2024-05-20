import Link from 'next/link';
import React from "react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white p-6 mt-20 rounded-lg shadow-lg text-orange-500">
            <div
                className="container mx-auto flex flex-col items-center md:flex-row md:justify-between text-center md:text-left">
                <p className="text-sm">©{currentYear} Ossara. All rights reserved.</p>
                <div
                    className="mt-4 md:mt-0 flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
                    <Link href="#" className="hover:text-gray-600">Datenschutz</Link>
                    <Link href="#" className="hover:text-gray-600">Impressum</Link>
                    <Link href="#" className="hover:text-gray-600">Instagram</Link>
                    <Link href="#" className="hover:text-gray-600">Facebook</Link>
                    <Link href="#" className="hover:text-gray-600">YouTube</Link>
                </div>
            </div>
        </footer>
    );
}
