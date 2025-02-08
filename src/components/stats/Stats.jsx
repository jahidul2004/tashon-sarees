const Stats = () => {
    return (
        <div className="bg-[#0a1728] p-5 text-white text-center grid grid-cols-2 md:grid-cols-4 gap-5 my-5">
            <span className="border md:border-none p-2">
                <h1 className="text-2xl md:text-4xl font-bold mb-2">২৪</h1>
                <p>ঢাকা সিটিতে ২৪ ঘন্টায় ডেলিভারি</p>
            </span>
            <span className="border md:border-none p-2">
                <h1 className="text-2xl md:text-4xl font-bold mb-2">৪৮</h1>
                <p>ঢাকা সিটির বাইরে ৪৮ ঘন্টায় ডেলিভারি</p>
            </span>
            <span className="border md:border-none p-2">
                <h1 className="text-2xl md:text-4xl font-bold mb-2">১০০০+</h1>
                <p>হ্যাপি কাস্টমার</p>
            </span>
            <span className="border md:border-none p-2">
                <h1 className="text-2xl md:text-4xl font-bold mb-2">৪৫০</h1>
                <p>টাকা অফার মূল্য</p>
            </span>
        </div>
    );
};

export default Stats;
