import Image from "next/image";
import Link from "next/link";

type BlogCardProps = {
    imageUrl: string,
    title: string,
    description: string
}

export default function BlogCard({ imageUrl, title, description }: BlogCardProps) {
    return (
        <>
            <div className="max-w-screen-lg rounded-lg shadow-lg overflow-hidden">
                <div className="relative w-full h-56">
                    <Image src={imageUrl} alt="Blog Image" layout="fill" objectFit="cover" />
                </div>
                <div className="bg-white p-5">
                    <h3 className="text-orange-500 text-lg font-semibold mb-3">{title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>
                    {/* <Link href="/" className="bg-orange-500 rounded-lg text-white py-2 px-4 text-sm hover:underline">Mehr</Link> */}
                </div>
            </div>
        </>
    )
}