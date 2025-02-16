import { HiArrowRightCircle } from "react-icons/hi2";
const contentDiv = "w-full overflow-x-scroll webkit-scrollbar webkit-scrollbar-track webkit-scrollbar-thumb pb-4  flex items-center gap-4 px-4";
const contentStyle = "text-paragraph flex-shrink-0";

const categories = ["মুক্তিযুদ্ধ", "ভাষা আন্দোলন", "জীবনী", "ধর্মীয়", "অভিধান", "এনসাইক্লোপিডিয়া", "রেফারেন্স", "শিশুদের বই", "কাব্যগ্রন্থ", "উপন্যাস", "প্রবন্ধ", "দর্শন", "ইতিহাস", "মেডিটেশন", "ভ্রমণকাহিনী", "একাডেমিক",
    "পড়ালেখাসংক্রান্ত", "বঙ্গবন্ধু", "বিবিধ", "রবীন্দ্রনাথ ঠাকুর", "কাজী নজরুল ইসলাম", "শরৎচন্দ্র চট্টোপাধ্যায়",
    "হুমায়ূন আহমেদ", "মুহাম্মদ জাফর ইকবাল"
];
const MobileBookSidebar = ({ searchByCategory, isPending }) => {

    const getCategory = (value) => {
        searchByCategory(value);
    }
    if (isPending) {
        return (
            <p className="text-primary text-lg mt-6">Loading category...</p>
        );
    }
    return (
        <div className="">
            <div className="p-4">
                <h2 className="text-lg font-medium text-primary">Search By Category</h2>
                <div className={contentDiv}>
                    {categories.map((category, index) => (
                        <p
                            key={index}
                            className={`${contentStyle} flex items-center`}
                            onClick={() => getCategory(category)}
                        >
                            <HiArrowRightCircle className="text-lg text-primary mr-2" /> {category}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MobileBookSidebar;