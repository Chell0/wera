import Link from 'next/link';

type ShowMoreButtonProps = {
    href: string;
    label: string;
};

export default function ShowMoreButton({href, label}: ShowMoreButtonProps) {
    return (
        <Link href={href}
              className="bg-orange-400 hover:bg-orange-200 hover:text-orange-400 text-white no-underline font-semibold py-2 px-4 rounded-xl">
            {label}
        </Link>
    );
};
