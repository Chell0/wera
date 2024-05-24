import About from "@/components/About/About";
import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import BlogCard from "@/components/BlogCard/BlogCard";
import React from "react";
import ShowMoreButton from "@/components/ShowMoreButton/ShowMoreButton";


export default function Home() {
    return (
        <>
            <div className="relative bg-cover bg-no-repeat bg-local"
                style={{ backgroundImage: `url("/homepage-bg.jpeg")` }}>
                <main className={`p-6`}>
                    <NavBar />
                    <div className="flex items-center justify-center p-4 mt-10">
                        <Banner />
                    </div>
                    <div className="flex items-center justify-center p-4 mt-20">
                        <About />
                    </div>
                    <div className="w-full flex items-center justify-center py-4 mt-10 px-2 sm:px-2">
                        <div className="bg-white shadow-lg rounded-lg max-w-md py-4 px-2 sm:px-4">
                            <h2 className="text-orange-400 text-xl sm:text-md md:text-xl lg:text-2xl font-bold text-center">
                                Discover Our Latest Blogs
                            </h2>
                        </div>
                    </div>
                    {/*Blog Cards*/}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-4">
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
                    <div className={`flex flex-row justify-center mt-10`}>
                        <ShowMoreButton href={"/blog"} label={"Show More"} />
                    </div>
                    <Footer />
                </main>
            </div>
        </>
    );
}
