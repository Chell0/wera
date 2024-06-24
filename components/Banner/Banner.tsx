import Image from 'next/image';

export default function Banner() {
    return (
        <>

            <div className="relative w-full pb-[43.5%] overflow-hidden rounded-lg shadow-xl">
                <Image
                    src="/Machtbewusst.png"
                    alt="Banner Image"
                    fill={true}
                    className="object-cover rounded-lg"
                    quality={100}
                />
            </div>

        </>
    );
};
