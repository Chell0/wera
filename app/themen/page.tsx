"use client";

import { useEffect, useState } from "react";
import { client } from "@/app/lib/sanityClient";
import { allTags, ThemenCard } from "@/app/lib/interface";
import Tags from "@/components/Tags/Tags";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import Pagination from "@/components/Pagination/Pagination";
import BlogCard from "@/components/BlogCard/BlogCard";

// Fetch Tag Data
async function fetchTagsData() {
  const query = `*[_type == 'tag'] { title }`;
  const data = await client.fetch(query);
  return data;
}

// Fetch Blog Data
async function fetchBlogsData() {
  const query = `
    *[_type == 'blog'] | order(_createdAt desc) {
        title,
        "currentSlug": slug.current,
        titleImage,
        smallDescription,
        "tags": tags[]->title
    }`;
  const data = await client.fetch(query);
  return data;
}

export default function BlogPage() {
  const [tagsData, setTagsData] = useState<allTags[]>([]);
  const [blogsData, setBlogsData] = useState<ThemenCard[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<ThemenCard[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [tags, blogs] = await Promise.all([
          fetchTagsData(),
          fetchBlogsData(),
        ]);
        setTagsData(tags);
        setBlogsData(blogs);
        setFilteredBlogs(blogs);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // Handle Tag Select
  const handleTagSelect = (selectedTag: string | null) => {
    console.log("Selected tag:", selectedTag);
    setSelectedTag(selectedTag);

    if (selectedTag) {
      const filtered = blogsData.filter((blog) =>
        blog.tags.includes(selectedTag),
      );
      setFilteredBlogs(filtered);
    } else {
      setFilteredBlogs(blogsData);
    }

    setCurrentPage(1); // Reset to first page when a new tag is selected
  };

  // Handle Page Change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Number of Blogs per page
  const ITEMS_PER_PAGE = 12;
  const totalPages = Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentBlogs = filteredBlogs.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  return (
    <>
      <div
        className={`relative bg-cover bg-no-repeat bg-local`}
        style={{ backgroundImage: `url("/themen-bg.png")` }}
      >
        <main className={`p-6`}>
          <NavBar />
          <div className={`mt-20`}>
            <Tags onTagSelect={handleTagSelect} tags={tagsData} />
          </div>
          <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {currentBlogs.map((card: ThemenCard) => (
                <BlogCard key={card.currentSlug} card={card} />
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
        </main>
      </div>
    </>
  );
}
