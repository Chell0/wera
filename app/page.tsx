import About from "@/components/About/About";
import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import BlogCard from "@/components/BlogCard/BlogCard";
import React from "react";
import ShowMoreButton from "@/components/ShowMoreButton/ShowMoreButton";
import NewsLetter from "@/components/NewsLetter/NewsLetter";


export default function Home() {
    return (
        <>
            <div className="relative bg-cover bg-no-repeat bg-local"
                style={{ backgroundImage: `url("/homepage-bg.png")` }}>
                <main className={`p-6`}>
                    <NavBar />
                    <div className="flex items-center justify-center mt-20">
                        <Banner />
                    </div>
                    <div className="flex items-center justify-center p-4 mt-24">
                        <About />
                    </div>
                    <div className="w-full flex items-center justify-center mt-28 sm:px-2">
                        <div className="bg-white shadow-lg rounded-lg max-w-md sm:px-4">
                            <h2 className="text-orange-400 text-xl py-2 px-4 sm:text-md md:text-xl lg:text-2xl font-medium text-center">
                                Aktuelle Blogeinträge
                            </h2>
                        </div>
                    </div>
                    {/*Blog Cards*/}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 px-6">
                        <BlogCard imageUrl={"/banner.png"} title={"Discover Our Latest Blogs"}
                            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} />
                        <BlogCard imageUrl={"/banner.png"} title={"Discover Our Latest Blogs"}
                            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} />
                        <BlogCard imageUrl={"/banner.png"} title={"Discover Our Latest Blogs"}
                            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} />
                        <BlogCard imageUrl={"/banner.png"} title={"Discover Our Latest Blogs"}
                            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} />
                        <BlogCard imageUrl={"/banner.png"} title={"Discover Our Latest Blogs"}
                            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} />
                        <BlogCard imageUrl={"/banner.png"} title={"Discover Our Latest Blogs"}
                            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} />
                    </div>
                    <div className={`flex flex-row items-end justify-end font-bold mt-10 text-xl`}>
                        <ShowMoreButton href={"/themen"} label={"Mehr"} />
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-2 size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </div>
                    <div className={` flex flex-row justify-center mt-10`}>
                        <NewsLetter />
                    </div>
                    <Footer />
                </main>
            </div>
        </>
    );
}
