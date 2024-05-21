// import NavBar from "@/components/NavBar/NavBar";
// import BlogCard from "@/components/BlogCard/BlogCard";
// import React from "react";
// import Footer from "@/components/Footer/Footer";
// import Category from "@/components/Category/Category";
//
// export default function Page() {
//     return (
//         <>
//             <div className="relative bg-fixed bg-cover bg-center min-h-screen"
//                  style={{backgroundImage: `url("/homepage-bg.jpeg")`}}>
//                 <main className="p-6">
//                     <NavBar/>
//                     <Category/>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-4">
//                         <BlogCard imageUrl={"/banner.png"} title={"Discover Our Latest Blogs"}
//                                   description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}/>
//                         <BlogCard imageUrl={"/banner.png"} title={"Discover Our Latest Blogs"}
//                                   description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}/>
//                         <BlogCard imageUrl={"/banner.png"} title={"Discover Our Latest Blogs"}
//                                   description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}/>
//                         <BlogCard imageUrl={"/banner.png"} title={"Discover Our Latest Blogs"}
//                                   description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}/>
//                         <BlogCard imageUrl={"/banner.png"} title={"Discover Our Latest Blogs"}
//                                   description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}/>
//                         <BlogCard imageUrl={"/banner.png"} title={"Discover Our Latest Blogs"}
//                                   description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}/>
//                         <BlogCard imageUrl={"/banner.png"} title={"Discover Our Latest Blogs"}
//                                   description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}/>
//                         <BlogCard imageUrl={"/banner.png"} title={"Discover Our Latest Blogs"}
//                                   description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}/>
//                         <BlogCard imageUrl={"/banner.png"} title={"Discover Our Latest Blogs"}
//                                   description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}/>
//                         <BlogCard imageUrl={"/banner.png"} title={"Discover Our Latest Blogs"}
//                                   description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}/>
//                         <BlogCard imageUrl={"/banner.png"} title={"Discover Our Latest Blogs"}
//                                   description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}/>
//                         <BlogCard imageUrl={"/banner.png"} title={"Discover Our Latest Blogs"}
//                                   description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}/>
//                         <BlogCard imageUrl={"/banner.png"} title={"Discover Our Latest Blogs"}
//                                   description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}/>
//                         <BlogCard imageUrl={"/banner.png"} title={"Discover Our Latest Blogs"}
//                                   description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}/>
//                         <BlogCard imageUrl={"/banner.png"} title={"Discover Our Latest Blogs"}
//                                   description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}/>
//                         <BlogCard imageUrl={"/banner.png"} title={"Discover Our Latest Blogs"}
//                                   description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}/>
//                         <BlogCard imageUrl={"/banner.png"} title={"Discover Our Latest Blogs"}
//                                   description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}/>
//                         <BlogCard imageUrl={"/banner.png"} title={"Discover Our Latest Blogs"}
//                                   description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}/>
//                     </div>
//                     <Footer/>
//                 </main>
//             </div>
//         </>
//     )
// }

// "use client"
//
// import {useState} from 'react';
// import Pagination from "@/components/Pagination/Pagination";
// import Category from "@/components/Category/Category";
// import NavBar from "@/components/NavBar/NavBar";
// import Footer from "@/components/Footer/Footer";
//
//
// const blogs = Array.from({length: 72}, (_, i) => ({
//     id: i + 1,
//     title: `Blog Post ${i + 1}`
// }));
//
// const ITEMS_PER_PAGE = 24;
//
// export default function BlogPage() {
//     const [currentPage, setCurrentPage] = useState(1);
//     // Category Section
//     const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
//
//     const handleCategorySelect = (category: string | null) => {
//         setSelectedCategory(category);
//     };
//
//     const filteredBlogs = selectedCategory ? blogs.filter(blog => blog.category === selectedCategory) : blogs;
//
//     const totalPages = Math.ceil(blogs.length / ITEMS_PER_PAGE);
//
//     const handlePageChange = (page: number) => {
//         setCurrentPage(page);
//     };
//
//     const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//     const currentBlogs = blogs.slice(startIndex, startIndex + ITEMS_PER_PAGE);
//
//     return (
//         <>
//             <div className="relative bg-fixed bg-cover bg-center min-h-screen"
//                  style={{backgroundImage: `url("/homepage-bg.jpeg")`}}>
//                 <main className="p-6">
//                     <NavBar/>
//                     <Category onCategorySelect={handleCategorySelect}/>
//                     <div className="container mx-auto p-4">
//                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
//                             {currentBlogs.map(blog => (
//                                 <div key={blog.id} className="bg-white p-6 rounded-lg shadow-md">
//                                     <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
//                                     <p className="text-gray-700">Content for {blog.title}</p>
//                                 </div>
//                             ))}
//                         </div>
//                         <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}/>
//                     </div>
//                     <Footer/>
//                 </main>
//             </div>
//         </>
//     );
// };


"use client"
import { useState } from 'react';
import Category from "@/components/Category/Category";
import Image from "next/image";
import Link from "next/link";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import Pagination from '@/components/Pagination/Pagination';

// type BlogProps = {
//     id: number,
//     title: string,
//     category: string,
//     image: string,
//     tags: string
// }


// const blogs = Array.from({length: 72}, (_, i) => ({
//     id: i + 1,
//     title: `Blog Post ${i + 1}`
//     category: i + 1 < 4,
//     image: i + 1
//     tags: i + 1 < 4
// }));




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

    // function handlePageChange(page: number): void {
    //     throw new Error('Function not implemented.');
    // }

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
                style={{ backgroundImage: `url("/homepage-bg.jpeg")` }}>
                <main className={`p-6`}>
                    <NavBar />
                    <div className="container mx-auto p-4">
                        <Category onCategorySelect={handleCategorySelect} />
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                            {filteredBlogs.map(blog => (
                                <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                    <Image src={blog.image} alt={blog.title} width={2000} height={870} className={`object-contain`} />
                                    <div className="p-6">
                                        <h2 className="text-xl font-bold mb-2">
                                            <Link href={`/blog/slug`} className="text-orange-400 font-semibold hover:underline">
                                                {blog.title}
                                            </Link>
                                        </h2>
                                        <p className="text-gray-400 mb-4">Content for {blog.title}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {blog.tags.map((tag, index) => (
                                                <span key={index} className="bg-orange-400 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
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
