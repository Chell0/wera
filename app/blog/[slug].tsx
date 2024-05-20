import Image from "next/image";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";


interface BlogPostProps {
    blog: {
        id: number;
        title: string;
        category: string;
        image: string;
        tags: string[];
        content: string; // Add content for the detailed blog post
        slug: string;
    };
}

export default function BlogPost({ blog }: BlogPostProps) {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="relative bg-fixed bg-cover bg-center min-h-screen"
                style={{ backgroundImage: `url("/homepage-bg.jpeg")` }}>
                <main className="p-6">
                    <NavBar />
                    <div className="container mx-auto p-4">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <Image src={blog.image} alt={blog.title} className="w-full h-64 object-cover" />
                            <div className="p-6">
                                <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {blog.tags.map((tag, index) => (
                                        <span key={index}
                                            className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-gray-700">{blog.content}</p>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </main>
            </div>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = allBlogs.map(blog => ({
        params: { slug: blog.slug },
    }));

    return {
        paths,
        fallback: true,
    };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const blog = allBlogs.find(blog => blog.slug === params?.slug);

    return { props: { blog } };
};

