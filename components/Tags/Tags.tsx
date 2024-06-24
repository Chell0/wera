import { useState } from "react";
import { TagsProps } from "@/app/lib/interface";


export default function Tags({ onTagSelect, tags }: TagsProps) {
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
                        onClick={() => handleTagClick(tag.title)}
                        className={`${selectedTag === tag.title ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700'} rounded-full py-2 px-4`}
                    >
                        {tag.title}
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
                                onClick={() => handleTagClick(tag.title)}
                                className={
                                    `block w-full text-left px-4 py-2
                                    ${selectedTag === tag.title ?
                                        'bg-orange-500 text-white' :
                                        'text-gray-700'
                                    }`
                                }
                            >
                                {tag.title}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};
