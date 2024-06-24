import { ThemenPost } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanityClient";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import { PortableText } from "@portabletext/react";
import Image from "next/image";


async function getData(slug: string) {
    const query = `
    *[_type == "blog" && slug.current == '${slug}']{
        "currentSlug": slug.current,
            title,
            content,
            titleImage,
            "tags": tags[]->title
    }[0]`;

    const data = await client.fetch(query);
    return data;
}

export default async function ThemenArticle({ params }: { params: { slug: string } }) {
    const data: ThemenPost = await getData(params.slug);
    return (
        <>
            <div className={`relative bg-cover bg-no-repeat bg-local`}
                style={{ backgroundImage: `url("/themen-bg.png")` }}>
                <main className={`p-6`}>
                    <NavBar />
                    <div className={`container mx-auto mt-20 bg-white p-10 rounded-lg shadow-2xl`}>
                        <h1 className="mt-5 mb-10 block text-xl text-center text-orange-500 leading-8 font-bold tracking-wide uppercase">{data.title}</h1>
                        {/* Blog Image */}
                        <div className="flex items-center justify-center mt-10 mb-10">
                            <Image
                                src={urlFor(data.titleImage).url()}
                                alt={data.title}
                                width={1024}
                                height={768}
                                priority
                                className="object-cover rounded-lg mt-8 shadow-xl"
                                quality={100}
                            />
                        </div>
                        {/* Blog Content */}
                        <div className="mt-20 prose prose-sm prose-stone prose-headings:text-xl prose-headings:text-orange-500 prose-headings:font-semibold prose-a:text-orange-500 prose-a:target:{`_blank`} prose-a:rel:{`noreferrer`} mx-auto">
                            <PortableText value={data.content} />
                        </div>
                        {/* Tags */}
                        {/* <p className="mt-4"><strong className="text-orange-500">Tags:</strong>{data.tags}</p> */}
                    </div>
                    <Footer />
                </main >
            </div >
        </>
    );
};
