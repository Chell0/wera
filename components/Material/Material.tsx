import Section from "../Section/Section";

export default function Material() {
    return (
        <>
            <div className="w-full flex items-center justify-center mt-20 sm:px-2">
                <div className="bg-white shadow-lg rounded-xl max-w-md sm:px-4">
                    <h2 className="text-orange-500 py-2 px-4 text-2xl sm:text-lg md:text-xl lg:text-2xl font-bold text-center">
                        Bildungsmaterial
                    </h2>
                </div>
            </div>
            <Section />
            <div className="w-full flex items-center justify-center mt-20 sm:px-2">
                <div className="bg-white shadow-lg rounded-xl max-w-md sm:px-4">
                    <h2 className="text-orange-500 py-2 px-4 text-2xl sm:text-lg md:text-xl lg:text-2xl font-bold text-center">
                        Videos
                    </h2>
                </div>
            </div>
            <Section />
            <div className="w-full flex items-center justify-center mt-20 sm:px-2">
                <div className="bg-white shadow-lg rounded-xl max-w-md sm:px-4">
                    <h2 className="text-orange-500 py-2 px-4 text-2xl sm:text-lg md:text-xl lg:text-2xl font-bold text-center">
                        Literatur
                    </h2>
                </div>
            </div>
            <Section />
            <div className="w-full flex items-center justify-center mt-20 sm:px-2">
                <div className="bg-white shadow-lg rounded-xl max-w-md sm:px-4">
                    <h2 className="text-orange-500 py-2 px-4 text-2xl sm:text-lg md:text-xl lg:text-2xl font-bold text-center">
                        Podcasts
                    </h2>
                </div>
            </div>
            <Section />
            <div className="w-full flex items-center justify-center mt-20 sm:px-2">
                <div className="bg-white shadow-lg rounded-xl max-w-md sm:px-4">
                    <h2 className="text-orange-500 py-2 px-4 text-2xl sm:text-lg md:text-xl lg:text-2xl font-bold text-center">
                        Arbeitsmaterial
                    </h2>
                </div>
            </div>
            <Section />
        </>
    )
}
