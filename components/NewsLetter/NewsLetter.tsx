import Link from "next/link";

export default function NewsLetter() {
    return (
        <>
            <div className={`p-6 grid grid-rows-2 items-center justify-center max-w-lg bg-white shadow-xl rounded-2xl sm:px-4 mt-20`}>
                <div className={`p-2 mt-2`}>
                    <p className={`text-gray-600 text-3xl md:text-2xl sm:text-sm font-bold`}>Subscribe to Our Newsletter</p>
                </div>
                <div className={`flex flex-row justify-center items-center`}>
                    <Link href={`/`} className={`bg-orange-500 hover:bg-orange-200 hover:text-orange-400 font-semibold text-white text-lg no-underline py-2 px-6 rounded-xl`}>
                        Sign Up
                    </Link>
                </div>
            </div>
        </>
    )
}