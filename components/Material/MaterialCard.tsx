import Image from "next/image";
import Link from "next/link";

type MaterialCardProps = {
    imageUrl: string,
    description: string
}

export default function MaterialCard({ imageUrl, description }: MaterialCardProps) {
    return (
        <>
            <div className="max-w-screen-lg rounded-lg shadow-lg overflow-hidden">
                <div className="relative w-full h-32">
                    <Image src={imageUrl} alt="Blog Image" layout="fill" objectFit="cover" />
                </div>
                <div className="bg-white p-5">
                    <p className="text-left text-sm mb-4 line-clamp-3">
                        <Link href="/" className="no-underline">
                            {description}
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}