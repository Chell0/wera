import Link from 'next/link';

type ShowMoreButtonProps = {
    href: string;
    label: string;
};

export default function ShowMoreButton({ href, label }: ShowMoreButtonProps) {
    return (
        <>
            <div className="p-6">
                <div className={`flex flex-row items-end justify-end md:mr-40 sm:mr-28`}>
                    <Link href={href}
                        className=" hover:text-orange-600 text-orange-600 font-bold text-lg">
                        {label}
                    </Link>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-orange-600 text-md ml-2 size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>

                </div>
            </div>
        </>
    );
};
