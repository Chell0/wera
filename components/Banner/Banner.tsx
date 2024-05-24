import Image from 'next/image';

export default function Banner() {
    return (
        <>
            <div className="relative w-full sm:w-[1061.95px] h-60 mt-20 sm:h-96 md:h-[462px] mx-auto">
                <Image
                    src="/Banner.jpg"
                    alt="Banner"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                />
                {/* <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex flex-col justify-center items-center text-white p-4"> */}
                {/* <h1 className="text-xl sm:text-3xl font-bold mb-2 text-center">Welcome to Ossara Blog</h1> */}
                {/* <p className="text-sm sm:text-base text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p> */}
                {/* </div> */}
            </div>
        </>
    );
};
