import Section from "../Section/Section";

export default function Material() {
    return (
        <>
            <div>
                <div className="w-full flex items-center justify-center py-4 mt-20 px-2 sm:px-2">
                    <div className="bg-white shadow-lg rounded-lg max-w-sm py-4 px-px sm:px-4">
                        <h2 className="text-orange-400 text-xl sm:text-lg md:text-xl lg:text-2xl font-bold text-center">
                            Bilduugsmaterial
                        </h2>
                    </div>
                </div>
                <Section />
                <div className="w-full flex items-center justify-center py-4 mt-20 px-px sm:px-2">
                    <div className="bg-white shadow-lg rounded-lg max-w-sm py-4 px-px sm:px-4">
                        <h2 className="text-orange-400 text-xl sm:text-lg md:text-xl lg:text-2xl font-bold text-center">
                            Videos
                        </h2>
                    </div>
                </div>
                <Section />
                <div className="w-full flex items-center justify-center py-4 mt-20 px-2 sm:px-2">
                    <div className="bg-white shadow-lg rounded-lg max-w-sm py-4 px-2 sm:px-4">
                        <h2 className="text-orange-400 text-xl sm:text-lg md:text-xl lg:text-2xl font-bold text-center">
                            Literature
                        </h2>
                    </div>
                </div>
                <Section />
                <div className="w-full flex items-center justify-center py-4 mt-20 px-2 sm:px-2">
                    <div className="bg-white shadow-lg rounded-lg max-w-sm py-4 px-2 sm:px-4">
                        <h2 className="text-orange-400 text-xl sm:text-lg md:text-xl lg:text-2xl font-bold text-center">
                            Podcasts
                        </h2>
                    </div>
                </div>
                <Section />
            </div>
        </>
    )
}
