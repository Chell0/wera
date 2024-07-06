import Image from "next/image";
import Link from "next/link";

import { MaterialCard } from "@/app/lib/interface";
import { urlFor } from "@/app/lib/sanityClient";

export default function MaterialCards({ card }: { card: MaterialCard }) {
  const { title, titleImage, smallDescription, links } = card;

  return (
    <>
      <div className="max-w-screen-lg shadow-lg rounded-xl overflow-hidden">
        <div className="relative w-full h-48">
          <Image
            src={urlFor(titleImage).url()}
            alt={title}
            fill={true}
            className={`bg-stone-50 rounded-t-xl object-fill overflow-hidden`}
          />
        </div>
        <div className="bg-amber-50 p-5">
          <h3 className="text-orange-500 text-lg font-semibold line-clamp-1 mb-2 cursor-pointer hover:underline">
            {title}
          </h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {smallDescription}
          </p>
          <Link
            href={links}
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-orange-500 hover:bg-orange-400 hover:text-white text-white text-sm no-underline py-1 px-2 rounded-lg`}
          >
            Mehr
          </Link>
        </div>
      </div>
    </>
  );
}
