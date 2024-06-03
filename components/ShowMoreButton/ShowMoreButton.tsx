import Link from 'next/link';

type ShowMoreButtonProps = {
    href: string;
    label: string;
};

export default function ShowMoreButton({ href, label }: ShowMoreButtonProps) {
    return (
        <>
            <Link href={href}
                className=" hover:text-orange-600 text-black font-bold text-md">
                {label}
            </Link>
        </>
    );
};
