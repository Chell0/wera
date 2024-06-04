"use client"
import { useState } from 'react';
import Category from "@/components/Category/Category";
import Image from "next/image";
import Link from "next/link";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import Pagination from '@/components/Pagination/Pagination';



export default function BlogPage() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);

    const handleCategorySelect = (category: string | null) => {
        setSelectedCategory(category);
    };

    const allBlogs = [
        { id: 1, title: 'Blog Post 1', category: 'Category 1', image: '/banner.png', tags: ['tag1', 'tag2'] },
        { id: 2, title: 'Blog Post 2', category: 'Category 2', image: '/banner.png', tags: ['tag2', 'tag3'] },
        { id: 3, title: 'Blog Post 3', category: 'Category 3', image: '/banner.png', tags: ['tag1', 'tag3'] },
        { id: 4, title: 'Blog Post 4', category: 'Category 4', image: '/banner.png', tags: ['tag1', 'tag4'] },
        { id: 5, title: 'Blog Post 5', category: 'Category 1', image: '/banner.png', tags: ['tag1', 'tag2'] },
        { id: 6, title: 'Blog Post 6', category: 'Category 2', image: '/banner.png', tags: ['tag2', 'tag3'] },
        { id: 7, title: 'Blog Post 7', category: 'Category 3', image: '/banner.png', tags: ['tag1', 'tag3'] },
        { id: 8, title: 'Blog Post 8', category: 'Category 4', image: '/banner.png', tags: ['tag1', 'tag4'] },
        { id: 9, title: 'Blog Post 9', category: 'Category 1', image: '/banner.png', tags: ['tag1', 'tag2'] },
        { id: 10, title: 'Blog Post 10', category: 'Category 2', image: '/banner.png', tags: ['tag2', 'tag3'] },
        { id: 11, title: 'Blog Post 11', category: 'Category 3', image: '/banner.png', tags: ['tag1', 'tag3'] },
        { id: 12, title: 'Blog Post 12', category: 'Category 4', image: '/banner.png', tags: ['tag1', 'tag4'] },
        { id: 13, title: 'Blog Post 13', category: 'Category 1', image: '/banner.png', tags: ['tag1', 'tag2'] },
        { id: 14, title: 'Blog Post 14', category: 'Category 2', image: '/banner.png', tags: ['tag2', 'tag3'] },
        { id: 15, title: 'Blog Post 15', category: 'Category 3', image: '/banner.png', tags: ['tag1', 'tag3'] },
        { id: 16, title: 'Blog Post 16', category: 'Category 4', image: '/banner.png', tags: ['tag1', 'tag4'] },
        { id: 17, title: 'Blog Post 17', category: 'Category 1', image: '/banner.png', tags: ['tag1', 'tag2'] },
        { id: 18, title: 'Blog Post 18', category: 'Category 2', image: '/banner.png', tags: ['tag2', 'tag3'] },
        { id: 19, title: 'Blog Post 19', category: 'Category 3', image: '/banner.png', tags: ['tag1', 'tag3'] },
        { id: 20, title: 'Blog Post 20', category: 'Category 4', image: '/banner.png', tags: ['tag1', 'tag4'] },
        { id: 21, title: 'Blog Post 21', category: 'Category 1', image: '/banner.png', tags: ['tag1', 'tag2'] },
        { id: 22, title: 'Blog Post 22', category: 'Category 2', image: '/banner.png', tags: ['tag2', 'tag3'] },
        { id: 23, title: 'Blog Post 23', category: 'Category 3', image: '/banner.png', tags: ['tag1', 'tag3'] },
        { id: 24, title: 'Blog Post 24', category: 'Category 4', image: '/banner.png', tags: ['tag1', 'tag4'] },
        // Add more blog posts here...
    ];

    const filteredBlogs = selectedCategory
        ? allBlogs.filter(blog => blog.category === selectedCategory)
        : allBlogs;

    const ITEMS_PER_PAGE = 9;

    const totalPages = Math.ceil(allBlogs.length / ITEMS_PER_PAGE);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentBlogs = allBlogs.slice(startIndex, startIndex + ITEMS_PER_PAGE);


    return (
        <>
            <div className={`relative bg-cover bg-no-repeat bg-local`}
                style={{ backgroundImage: `url("/themen-bg.png")` }}>
                <main className={`p-6`}>
                    <NavBar />
                    <div className="container mx-auto p-4">
                        <Category onCategorySelect={handleCategorySelect} />
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                            {filteredBlogs.map(blog => (
                                <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                    <Image src={blog.image} alt={blog.title} width={2000} height={870} className={`object-contain`} />
                                    <div className="p-3">
                                        <h2 className="text-md font-semibold mb-2">
                                            <Link href={`/blog/slug`} className="text-orange-500 font-semibold hover:underline">
                                                {blog.title}
                                            </Link>
                                        </h2>
                                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <div className="flex flex-wrap gap-2">
                                            {blog.tags.map((tag, index) => (
                                                <span key={index} className="bg-gray-100 text-orange-500 text-xs font-semibold mr-2 px-2.5 py-1 rounded">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
                    <Footer />
                </main >
            </div >
        </>
    );
};
