import { useState } from "react";


const tags = [
    'stadtraum',
    'verwaltung',
    'bildung',
    'veranstaltung',
    'kirche',
    'kunst und kultur',
    'literatur',
    'politik',
    'wissenschaft',
    'klima',
    'medizin',
    'koloniale kontinuität'
];

interface TagsProps {
    onTagSelect: (selectedTag: string | null) => void;
}


export default function Tags({ onTagSelect }: TagsProps) {
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleTagClick = (tag: string | null) => {
        setSelectedTag(tag);
        onTagSelect(tag);
        setIsDropdownOpen(false);
    };

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <>
            <div className="hidden md:flex flex-wrap gap-4 mb-4 mt-20">
                <button
                    onClick={() => handleTagClick(null)}
                    className={`
                        ${selectedTag === null ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700'
                        } rounded-full py-2 px-4`}
                >
                    View All
                </button>
                {tags.map((tag, index) => (
                    <button
                        key={index}
                        onClick={() => handleTagClick(tag)}
                        className={`${selectedTag === tag ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700'} rounded-full py-2 px-4`}
                    >
                        {tag}
                    </button>
                ))}
            </div>
            <div className="md:hidden mb-4">
                <button
                    onClick={handleDropdownToggle}
                    className="bg-gray-200 text-gray-700 py-2 px-4 rounded-full w-full text-left">{selectedTag ? selectedTag : 'Select Tag'}
                </button>
                {isDropdownOpen && (
                    <div className="bg-white border rounded-md mt-2 shadow-lg">
                        <button
                            onClick={() => handleTagClick(null)}
                            className={`block w-full text-left px-4 py-2 ${selectedTag === null ? 'bg-orange-500 text-white' : 'bg-gray-200'}`}
                        >
                            View All
                        </button>
                        {tags.map((tag, index) => (
                            <button
                                key={index}
                                onClick={() => handleTagClick(tag)}
                                className={`block w-full text-left px-4 py-2 ${selectedTag === tag ? 'bg-orange-500 text-white' : 'text-gray-700'}`}>{tag}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};
