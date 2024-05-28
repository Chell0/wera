import Image from 'next/image';

export default function Banner() {
    return (
        <>
            <div className="relative w-full h-0 pb-[43.5%] overflow-hidden rounded-lg shadow-xl">
                <Image
                    src="/Banner.jpeg"
                    alt="Banner Image"
                    layout="fill"
                    className="object-cover rounded-lg"
                />
            </div>
        </>
    );
};
