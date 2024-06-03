const categories = [
    { name: 'Category 1', href: '/category1' },
    { name: 'Category 2', href: '/category2' },
    { name: 'Category 3', href: '/category3' },
    { name: 'Category 4', href: '/category4' }
];

interface CategoryProps {
    onCategorySelect: (category: string | null) => void;
}

export default function Category({ onCategorySelect }: CategoryProps) {
    return (
        <>
            <div className="p-6 text-center md:text-left">
                <div className="flex flex-col justify-center md:flex-row md:flex-wrap md:items-center md:space-x-4">
                    {categories.map((category, index) => (
                        <button key={index} onClick={() => onCategorySelect(category.name)}
                            className="bg-orange-500 hover:bg-white hover:text-orange-400 text-white font-medium py-2 px-4 mb-4 md:mb-0 rounded-lg shadow-sm transition duration-200">{category.name}
                        </button>
                    ))}
                    <button onClick={() => onCategorySelect(null)}
                        className="bg-white text-orange-600 hover:bg-orange-400 hover:text-white font-medium py-2 px-4 mb-2 md:mb-0 rounded-lg shadow-sm transition duration-200 ml-0 md:ml-auto">View
                        All
                    </button>
                </div>
            </div>
        </>
    );
};
