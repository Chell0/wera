import { ThemenPost } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanityClient";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export const revalidate = 30; // revalidate at most 30seconds

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

export default async function ThemenArticle({
  params,
}: {
  params: { slug: string };
}) {
  const data: ThemenPost = await getData(params.slug);

  // Ensure data.tags is an array
  const tagsArray = Array.isArray(data.tags) ? data.tags : [];

  return (
    <>
      <div
        className={`relative bg-cover bg-no-repeat bg-local`}
        style={{ backgroundImage: `url("/themen-bg.png")` }}
      >
        <main className={`p-6`}>
          <NavBar />
          <div
            className={`container max-w-screen-md mx-auto mt-20 bg-white p-10 rounded-lg shadow-2xl`}
          >
            <h1 className="mt-5 mb-10 block lg:text-3xl text-center text-orange-500 leading-8 font-bold tracking-wide uppercase">
              {data.title}
            </h1>
            {/* Blog Image */}
            <div className="flex items-center justify-center mt-10 mb-10">
              <Image
                src={urlFor(data.titleImage).url()}
                alt={data.title}
                width={762}
                height={572}
                priority
                className="object-cover object-center rounded m-0 mt-8 shadow-xl"
                quality={100}
                style={{ maxHeight: `480px` }}
              />
            </div>
            {/* Blog Content */}
            <div className="max-w-screen-md mx-auto mt-20 prose prose-sm prose-stone prose-headings:text-2xl prose-headings:text-orange-500 prose-headings:font-semibold prose-a:text-orange-500 prose-a:target:_blank prose-a:rel:noreferrer">
              <PortableText value={data.content} />
            </div>
            {/* Tags */}
            <div className="mt-10 flex flex-wrap justify-center gap-2">
              {tagsArray.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs italic px-2 py-1 bg-orange-500 text-white rounded-md shadow-xl"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          <Footer />
        </main>
      </div>
    </>
  );
}
