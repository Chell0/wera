import Image from "next/image";
import Link from "next/link";

import { MaterialCard } from "@/app/lib/interface";
import { urlFor } from "@/app/lib/sanityClient";

export default function MaterialCards({ card }: { card: MaterialCard }) {
  const { title, titleImage, smallDescription, links } = card;

  return (
    <>
      <div className="bg-amber-50 h-[400px] max-w-screen-lg rounded-lg shadow-md overflow-hidden">
        <div className="bg-white flex justify-center items-center h-56">
          <Image
            src={urlFor(titleImage).url()}
            alt={title}
            height={150}
            width={150}
            style={{ maxHeight: `360px` }}
            quality={100}
            className={`rounded-lg object-cover overflow-hidden`}
          />
        </div>
        {/* <div className="bg-amber-50 p-5"> */}
        <div className="bg-amber-50 flex flex-col justify-center items-center p-3">
          <h3 className="text-orange-500 text-md text-left font-semibold mb-3">
            <Link
              href={links}
              target="_blank"
              rel="noopener noreferrer"
              className={`cursor-pointer no-underline hover:underline`}
            >
              {title}
            </Link>
          </h3>
          <p className="text-gray-600 text-left text-xs mb-3 line-clamp-2">{smallDescription}</p>
        </div>
      </div >
    </>
  );
}
