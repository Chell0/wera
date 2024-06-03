import Section from "@/components/Section/Section";
import ShowMoreButton from "@/components/ShowMoreButton/ShowMoreButton";

export default function Material() {
    return (
        <>
            <div className="w-full flex items-center justify-center mt-28 sm:px-2">
                <div className="bg-white shadow-lg rounded-xl max-w-md sm:px-4">
                    <h2 className="text-orange-500 py-2 px-4 text-xl lg:text-2xl md:text-md sm:text-sm font-bold text-center">
                        Bildungsmaterial
                    </h2>
                </div>
            </div>
            <Section />
            <div className="flex flex-row items-end justify-end mt-10">
                <ShowMoreButton href={"/bildungsmaterial"} label={"Mehr"} />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-black ml-2 size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </div>
            <div className="w-full flex items-center justify-center mt-28 sm:px-2">
                <div className="bg-white shadow-lg rounded-xl max-w-md sm:px-4">
                    <h2 className="text-orange-500 py-2 px-4 text-xl lg:text-2xl md:text-md sm:text-sm font-bold text-center">
                        Videos
                    </h2>
                </div>
            </div>
            <Section />
            <div className={`flex flex-row items-end justify-end mt-10`}>
                <ShowMoreButton href={"/videos"} label={"Mehr"} />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-black ml-2 size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </div>
            <div className="w-full flex items-center justify-center mt-28 sm:px-2">
                <div className="bg-white shadow-lg rounded-xl max-w-md sm:px-4">
                    <h2 className="text-orange-500 py-2 px-4 text-xl lg:text-2xl md:text-md sm:text-sm font-bold text-center">
                        Literatur
                    </h2>
                </div>
            </div>
            <Section />
            <div className={`flex flex-row items-end justify-end mt-10`}>
                <ShowMoreButton href={"/literatur"} label={"Mehr"} />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-black ml-2 size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </div>
            <div className="w-full flex items-center justify-center mt-28 sm:px-2">
                <div className="bg-white shadow-lg rounded-xl max-w-md sm:px-4">
                    <h2 className="text-orange-500 py-2 px-4 text-xl lg:text-2xl md:text-md sm:text-sm font-bold text-center">
                        Podcasts
                    </h2>
                </div>
            </div>
            <Section />
            <div className={`flex flex-row items-end justify-end mt-10`}>
                <ShowMoreButton href={"/podcasts"} label={"Mehr"} />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-black ml-2 size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </div>
            <div className="w-full flex items-center justify-center mt-28 sm:px-2">
                <div className="bg-white shadow-lg rounded-xl max-w-md sm:px-4">
                    <h2 className="text-orange-500 py-2 px-4 text-xl lg:text-2xl md:text-md sm:text-sm font-bold text-center">
                        Arbeitsmaterial
                    </h2>
                </div>
            </div>
            <Section />
            <div className={`flex flex-row items-end justify-end mt-10`}>
                <ShowMoreButton href={"/arbeitsmaterial"} label={"Mehr"} />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-black ml-2 size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </div>
        </>
    )
}




