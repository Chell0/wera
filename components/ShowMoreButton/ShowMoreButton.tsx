import Link from 'next/link';

type ShowMoreButtonProps = {
    href: string;
    label: string;
};

export default function ShowMoreButton({ href, label }: ShowMoreButtonProps) {
    return (
        <>
            <Link href={href}
                className="bg-orange-500 hover:bg-orange-200 hover:text-orange-400 text-white text-lg no-underline py-2 px-6 rounded-xl">
                {label}
            </Link>
        </>
    );
};
