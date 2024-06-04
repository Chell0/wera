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
            <ShowMoreButton href={"/bildungsmaterial"} label={"Mehr"} />
            <div className="w-full flex items-center justify-center mt-28 sm:px-2">
                <div className="bg-white shadow-lg rounded-xl max-w-md sm:px-4">
                    <h2 className="text-orange-500 py-2 px-4 text-xl lg:text-2xl md:text-md sm:text-sm font-bold text-center">
                        Videos
                    </h2>
                </div>
            </div>
            <Section />
            <ShowMoreButton href={"/videos"} label={"Mehr"} />
            <div className="w-full flex items-center justify-center mt-28 sm:px-2">
                <div className="bg-white shadow-lg rounded-xl max-w-md sm:px-4">
                    <h2 className="text-orange-500 py-2 px-4 text-xl lg:text-2xl md:text-md sm:text-sm font-bold text-center">
                        Literatur
                    </h2>
                </div>
            </div>
            <Section />
            <ShowMoreButton href={"/literatur"} label={"Mehr"} />
            <div className="w-full flex items-center justify-center mt-28 sm:px-2">
                <div className="bg-white shadow-lg rounded-xl max-w-md sm:px-4">
                    <h2 className="text-orange-500 py-2 px-4 text-xl lg:text-2xl md:text-md sm:text-sm font-bold text-center">
                        Podcasts
                    </h2>
                </div>
            </div>
            <Section />
            <ShowMoreButton href={"/podcasts"} label={"Mehr"} />
            <div className="w-full flex items-center justify-center mt-28 sm:px-2">
                <div className="bg-white shadow-lg rounded-xl max-w-md sm:px-4">
                    <h2 className="text-orange-500 py-2 px-4 text-xl lg:text-2xl md:text-md sm:text-sm font-bold text-center">
                        Arbeitsmaterial
                    </h2>
                </div>
            </div>
            <Section />
            <ShowMoreButton href={"/arbeitsmaterial"} label={"Mehr"} />
        </>
    )
}




