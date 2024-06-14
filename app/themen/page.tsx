// "use client"
// import { useState } from "react";
// import Tags from "@/components/Tags/Tags";
// import Image from "next/image";
// import Link from "next/link";
// import NavBar from "@/components/NavBar/NavBar";
// import Footer from "@/components/Footer/Footer";
// import Pagination from "@/components/Pagination/Pagination";



// export default function BlogPage() {
//     const [selectedTag, setSelectedTag] = useState<string | null>(null);
//     const [currentPage, setCurrentPage] = useState(1);

//     const handleTagSelect = (tag: string | null) => {
//         setSelectedTag(tag);
//         setCurrentPage(1);
//     };

//     const allBlogs = [
//         { id: 1, title: 'Blog Post 1', image: '/banner.png', tags: ['stadtraum', 'verwaltung'], content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", slug: "blog-post-1" },
//         { id: 2, title: 'Blog Post 2', image: '/banner.png', tags: ['verwaltung', 'bildung'], content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", slug: "blog-post-2" },
//         { id: 3, title: 'Blog Post 3', image: '/banner.png', tags: ['stadtraum', 'bildung'], content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", slug: "blog-post-3" },
//         { id: 4, title: 'Blog Post 4', image: '/banner.png', tags: ['stadtraum', 'veranstaltung'], content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", slug: "blog-post-4" },
//         { id: 5, title: 'Blog Post 5', image: '/banner.png', tags: ['stadtraum', 'verwaltung'], content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", slug: "blog-post-5" },
//         { id: 6, title: 'Blog Post 6', image: '/banner.png', tags: ['verwaltung', 'bildung'], content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", slug: "blog-post-6" },
//         { id: 7, title: 'Blog Post 7', image: '/banner.png', tags: ['stadtraum', 'bildung'], content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", slug: "blog-post-7" },
//         { id: 8, title: 'Blog Post 8', image: '/banner.png', tags: ['stadtraum', 'veranstaltung'], content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", slug: "blog-post-8" },
//         { id: 9, title: 'Blog Post 9', image: '/banner.png', tags: ['stadtraum', 'verwaltung'], content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", slug: "blog-post-9" },
//         { id: 10, title: 'Blog Post 10', image: '/banner.png', tags: ['verwaltung', 'bildung'], content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", slug: "blog-post-10" },
//         { id: 11, title: 'Blog Post 11', image: '/banner.png', tags: ['stadtraum', 'bildung'], content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", slug: "blog-post-11" },
//         { id: 12, title: 'Blog Post 12', image: '/banner.png', tags: ['stadtraum', 'veranstaltung'], content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", slug: "blog-post-12" },
//         { id: 13, title: 'Blog Post 13', image: '/banner.png', tags: ['stadtraum', 'verwaltung'], content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", slug: "blog-post-13" },
//         { id: 14, title: 'Blog Post 14', image: '/banner.png', tags: ['verwaltung', 'bildung'], content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", slug: "blog-post-14" },
//         { id: 15, title: 'Blog Post 15', image: '/banner.png', tags: ['stadtraum', 'bildung'], content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", slug: "blog-post-15" },
//         { id: 16, title: 'Blog Post 16', image: '/banner.png', tags: ['stadtraum', 'veranstaltung'], content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", slug: "blog-post-16" },
//         { id: 17, title: 'Blog Post 17', image: '/banner.png', tags: ['stadtraum', 'verwaltung'], content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", slug: "blog-post-17" },
//         { id: 18, title: 'Blog Post 18', image: '/banner.png', tags: ['verwaltung', 'bildung'], content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", slug: "blog-post-18" },
//         { id: 19, title: 'Blog Post 19', image: '/banner.png', tags: ['stadtraum', 'bildung'], content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", slug: "blog-post-19" },
//         { id: 20, title: 'Blog Post 20', image: '/banner.png', tags: ['stadtraum', 'veranstaltung'], content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", slug: "blog-post-20" },
//         { id: 21, title: 'Blog Post 21', image: '/banner.png', tags: ['stadtraum', 'verwaltung'], content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", slug: "blog-post-21" },
//         { id: 22, title: 'Blog Post 22', image: '/banner.png', tags: ['verwaltung', 'bildung'], content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", slug: "blog-post-22" },
//         { id: 23, title: 'Blog Post 23', image: '/banner.png', tags: ['stadtraum', 'bildung'], content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", slug: "blog-post-23" },
//         { id: 24, title: 'Blog Post 24', image: '/banner.png', tags: ['stadtraum', 'veranstaltung'], content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", slug: "blog-post-24" },
//         // Add more blog posts here...
//     ];

//     const filteredBlogs = selectedTag
//         ? allBlogs.filter(blog => blog.tags.includes(selectedTag))
//         : allBlogs;

//     const ITEMS_PER_PAGE = 12;

//     const totalPages = Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE);

//     const handlePageChange = (page: number) => {
//         setCurrentPage(page);
//     };

//     const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//     const currentBlogs = filteredBlogs.slice(startIndex, startIndex + ITEMS_PER_PAGE);


//     return (
//         <>
//             <div className={`relative bg-cover bg-no-repeat bg-local`}
//                 style={{ backgroundImage: `url("/themen-bg.png")` }}>
//                 <main className={`p-6`}>
//                     <NavBar />
//                     <div className="container mx-auto p-4">
//                         <Tags onTagSelect={handleTagSelect} />
//                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
//                             {currentBlogs.map(blog => (
//                                 <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden">
//                                     <Image src={blog.image} alt={blog.title} width={2000} height={870} className={`object-contain`} />
//                                     <div className="p-3">
//                                         <h2 className="text-md font-semibold mb-2">
//                                             <Link href={`/blog/slug`} className="text-orange-500 font-semibold hover:underline">
//                                                 {blog.title}
//                                             </Link>
//                                         </h2>
//                                         <p className="text-gray-600 text-sm mb-4 line-clamp-3">{blog.content}</p>
//                                         <div className="flex flex-wrap gap-2">
//                                             {blog.tags.map((tag, index) => (
//                                                 <span key={index} className="bg-gray-100 text-orange-500 text-xs font-semibold mr-2 px-2.5 py-1 rounded">
//                                                     {tag}
//                                                 </span>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                     {totalPages > 1 && (
//                         <Pagination
//                             currentPage={currentPage}
//                             totalPages={totalPages}
//                             onPageChange={handlePageChange}
//                         />
//                     )}
//                     <Footer />
//                 </main >
//             </div >
//         </>
//     );
// };


"use client"
import { useState } from "react";
import Tags from "@/components/Tags/Tags";
import Image from "next/image";
import Link from "next/link";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import Pagination from "@/components/Pagination/Pagination";

export default function BlogPage() {
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);

    const handleTagSelect = (tag: string | null) => {
        setSelectedTag(tag);
        setCurrentPage(1);
    };

    const allBlogs = [
        { id: 1, title: 'Blog Post 1', image: '/banner.png', tags: ['stadtraum', 'verwaltung'], content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", slug: "blog-post-1" },
        { id: 2, title: 'Blog Post 2', image: '/banner.png', tags: ['verwaltung', 'bildung'], content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", slug: "blog-post-2" },
        { id: 3, title: 'Blog Post 3', image: '/banner.png', tags: ['stadtraum', 'bildung'], content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", slug: "blog-post-3" },
        { id: 4, title: 'Blog Post 4', image: '/banner.png', tags: ['stadtraum', 'veranstaltung'], content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", slug: "blog-post-4" },
        { id: 5, title: 'Blog Post 5', image: '/banner.png', tags: ['stadtraum', 'verwaltung'], content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", slug: "blog-post-5" },
        { id: 6, title: 'Blog Post 6', image: '/banner.png', tags: ['verwaltung', 'bildung'], content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", slug: "blog-post-6" },
        { id: 7, title: 'Blog Post 7', image: '/banner.png', tags: ['stadtraum', 'bildung'], content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", slug: "blog-post-7" },
        { id: 8, title: 'Blog Post 8', image: '/banner.png', tags: ['stadtraum', 'veranstaltung'], content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", slug: "blog-post-8" },
        { id: 9, title: 'Blog Post 9', image: '/banner.png', tags: ['stadtraum', 'verwaltung'], content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", slug: "blog-post-9" },
        { id: 10, title: 'Blog Post 10', image: '/banner.png', tags: ['verwaltung', 'bildung'], content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", slug: "blog-post-10" },
        { id: 11, title: 'Blog Post 11', image: '/banner.png', tags: ['stadtraum', 'bildung'], content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", slug: "blog-post-11" },
        { id: 12, title: 'Blog Post 12', image: '/banner.png', tags: ['stadtraum', 'veranstaltung'], content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", slug: "blog-post-12" },
        { id: 13, title: 'Blog Post 13', image: '/banner.png', tags: ['stadtraum', 'verwaltung'], content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", slug: "blog-post-13" },
        { id: 14, title: 'Blog Post 14', image: '/banner.png', tags: ['verwaltung', 'bildung'], content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", slug: "blog-post-14" },
        { id: 15, title: 'Blog Post 15', image: '/banner.png', tags: ['stadtraum', 'bildung'], content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", slug: "blog-post-15" },
        { id: 16, title: 'Blog Post 16', image: '/banner.png', tags: ['stadtraum', 'veranstaltung'], content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", slug: "blog-post-16" },
        { id: 17, title: 'Blog Post 17', image: '/banner.png', tags: ['stadtraum', 'verwaltung'], content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", slug: "blog-post-17" },
        { id: 18, title: 'Blog Post 18', image: '/banner.png', tags: ['verwaltung', 'bildung'], content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", slug: "blog-post-18" },
        { id: 19, title: 'Blog Post 19', image: '/banner.png', tags: ['stadtraum', 'bildung'], content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", slug: "blog-post-19" },
        { id: 20, title: 'Blog Post 20', image: '/banner.png', tags: ['stadtraum', 'veranstaltung'], content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", slug: "blog-post-20" },
        { id: 21, title: 'Blog Post 21', image: '/banner.png', tags: ['stadtraum', 'verwaltung'], content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", slug: "blog-post-21" },
        { id: 22, title: 'Blog Post 22', image: '/banner.png', tags: ['verwaltung', 'bildung'], content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", slug: "blog-post-22" },
        { id: 23, title: 'Blog Post 23', image: '/banner.png', tags: ['stadtraum', 'bildung'], content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", slug: "blog-post-23" },
        { id: 24, title: 'Blog Post 24', image: '/banner.png', tags: ['stadtraum', 'veranstaltung'], content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", slug: "blog-post-24" },
        // Add more blog posts here...
    ];

    const filteredBlogs = selectedTag
        ? allBlogs.filter(blog => blog.tags.includes(selectedTag))
        : allBlogs;

    const ITEMS_PER_PAGE = 12;

    const totalPages = Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentBlogs = filteredBlogs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    return (
        <>
            <div className={`relative bg-cover bg-no-repeat bg-local`}
                style={{ backgroundImage: `url("/themen-bg.png")` }}>
                <main className={`p-6`}>
                    <NavBar />
                    <div className="container mx-auto p-4">
                        <Tags onTagSelect={handleTagSelect} />
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                            {currentBlogs.map(blog => (
                                <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                    <Image src={blog.image} alt={blog.title} width={2000} height={870} className={`object-contain`} />
                                    <div className="p-3">
                                        <h2 className="text-md font-semibold mb-2">
                                            <Link href={`/blog/${blog.slug}`} className="text-orange-500 font-semibold hover:underline">
                                                {blog.title}
                                            </Link>
                                        </h2>
                                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{blog.content}</p>
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
                    {totalPages > 1 && (
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={handlePageChange}
                        />
                    )}
                    <Footer />
                </main >
            </div >
        </>
    );
};
