import { ThemenPost } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanityClient";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { format } from "date-fns";


export const revalidate = 30; // revalidate at most 30seconds

async function getData(slug: string) {
  const query = `
    *[_type == "blog" && slug.current == '${slug}']{
        "currentSlug": slug.current,
          date,
          title,
          titleImage,
          content,
          "tags": tags[]->title,
          authors[]->{
            name,
            "profileImage": profileImage.asset->url
        }
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

  // Format the date
  const formattedDate = format(new Date(data.date), "EEE, MMMM dd yyyy");

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

            {/* Blog Title */}
            <h1 className="mb-10 block lg:text-3xl text-center text-orange-500 leading-8 font-bold tracking-wide uppercase">
              {data.title}
            </h1>

            <div className={`text-center text-gray-500 mb-5`}>
              {/* Blog Date */}
              <p>{formattedDate}</p>

              {/* Blog Author */}
              {data.authors && data.authors.length > 0 && (
                <div className="flex flex-wrap items-center justify-center mt-5">
                  {data.authors.map((author, index) => (
                    <div key={index} className="flex items-center m-2">
                      {author.profileImage && (
                        <Image
                          src={author.profileImage}
                          alt={author.name}
                          width={65}
                          height={60}
                          className="object-cover object-center rounded-s-full mr-2"
                          style={{ maxHeight: `40px` }}
                        />
                      )}
                      <p className="text-sm">By {author.name}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

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
