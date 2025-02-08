import { FaRegCheckCircle } from "react-icons/fa";

const Benefit = () => {
    return (
        <div className="w-full md:container mx-auto ">
            <div className="w-[80%] mx-auto md:w-full text-center p-5 bg-[#0a1728] text-white my-10 rounded">
                <h1 className="text-xl font-semibold">
                    আমাদের প্রিমিয়াম শারি ক্রয় করলে আপনি যে যে সুবিধা পাচ্ছেন
                </h1>
            </div>

            <div className="mx-5 md:mx-20 my-10">
                <ul className="text-lg font-semibold">
                    <li className="flex items-center gap-2">
                        <FaRegCheckCircle />
                        কালার গ্যারান্টি
                    </li>
                    <li className="flex items-center gap-2">
                        <FaRegCheckCircle />
                        সেম পাবেন ইনশাআল্লাহ
                    </li>
                    <li className="flex items-center gap-2">
                        <FaRegCheckCircle />
                        চেক করে দেখে নিতে পারেন
                    </li>
                    <li className="flex items-center gap-2">
                        <FaRegCheckCircle />১ টাকা ও অগ্রিম দিতে হবে না
                    </li>
                    <li className="flex items-center gap-2">
                        <FaRegCheckCircle />
                        খুব সুন্দর প্যাকেজিং
                    </li>
                    <li className="flex items-center gap-2">
                        <FaRegCheckCircle />
                        ১০০% কালার গ্যারান্টি
                    </li>
                </ul>

                <div className="flex items-center justify-center my-5">
                    <button className="my-5 btn bg-[#0a1728] text-white">
                        অর্ডার করুন
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Benefit;
