// import Image from "next/image";
// import Link from "next/link";

// type MaterialCardProps = {
//     imageUrl: string,
//     title: string,
//     description: string,
//     link: string,
// }

// export default function MaterialCard({ imageUrl, description, link }: MaterialCardProps) {
//     return (
//         <>
//             <div className="max-w-screen-lg rounded-lg shadow-lg overflow-hidden">
//                 <div className="relative w-full h-32">
//                     <Image src={imageUrl} alt="Blog Image" layout="fill" objectFit="cover" />
//                 </div>
//                 <div className="bg-white p-5">
//                     <p className="text-left text-sm mb-4 line-clamp-3">{description}</p>
//                     <Link href="/" target="_blank" rel="noopener noreferrer" className={`bg-blue-500 hover:bg-orange-500 hover:text-white font-md text-white text-md no-underline py-2 px-4 rounded-xl`}>
//                         {link}
//                     </Link>
//                 </div>
//             </div>
//         </>
//     )
// }
