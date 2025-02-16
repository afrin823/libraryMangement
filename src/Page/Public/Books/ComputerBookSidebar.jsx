import { HiArrowRightCircle } from "react-icons/hi2";

const contentStyle = "text-paragraph flex items-center gap-2 cursor-pointer hover:text-primary transition";

const categories = ["মুক্তিযুদ্ধ", "ভাষা আন্দোলন", "জীবনী", "ধর্মীয়", "অভিধান", "এনসাইক্লোপিডিয়া", "রেফারেন্স", "শিশুদের বই", "কাব্যগ্রন্থ", "উপন্যাস", "প্রবন্ধ", "দর্শন", "ইতিহাস", "মেডিটেশন", "ভ্রমণকাহিনী", "একাডেমিক",
    "পড়ালেখাসংক্রান্ত", "বঙ্গবন্ধু", "বিবিধ", "রবীন্দ্রনাথ ঠাকুর", "কাজী নজরুল ইসলাম", "শরৎচন্দ্র চট্টোপাধ্যায়",
    "হুমায়ূন আহমেদ", "মুহাম্মদ জাফর ইকবাল"
];

const ComputerBookSidebar = ({ searchByCategory, isPending }) => {
    const getCategory = (value) => {
        searchByCategory(value);
    }
    
    if (isPending) {
        return (
            <p className="text-primary text-lg mt-6">Loading category...</p>
        );
    }

    return (
        <div className="bg-natural shadow-md w-52">
            <div className="p-4">
                <h2 className="text-lg font-medium text-primary mb-4">Search By Category</h2>
                <div className="w-full overflow-y-scroll h-96 webkit-scrollbar webkit-scrollbar-track webkit-scrollbar-thumb pb-4 ">
                    {categories.map((category, index) => (
                        <p
                            key={index}
                            className={contentStyle}
                            onClick={() => getCategory(category)}
                        >
                            <HiArrowRightCircle className="text-lg text-primary" /> {category}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ComputerBookSidebar;
