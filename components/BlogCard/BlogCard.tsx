import Image from "next/image";
import Link from "next/link";
import { ThemenCard } from "@/app/lib/interface";
import { urlFor } from "@/app/lib/sanityClient";


export default function BlogCard({ card }: { card: ThemenCard }) {

    const { title, smallDescription, currentSlug, titleImage } = card;

    return (
        <>
            <div className="max-w-screen-lg rounded-lg shadow-xl overflow-hidden">
                <div className="relative w-full h-56">
                    <Image
                        src={urlFor(card.titleImage).url()}
                        alt={card.title}
                        fill={true}
                        className={`rounded-t-lg object-cover overflow-hidden`} />
                </div>
                <div className="bg-white p-5">
                    <h3 className="text-orange-500 text-lg font-semibold line-clamp-1 mb-3 cursor-pointer hover:underline">
                        <Link href={`/themen/${card.currentSlug}`}>{card.title}</Link>
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-4">{card.smallDescription}</p>
                </div>
            </div>
        </>
    )
}