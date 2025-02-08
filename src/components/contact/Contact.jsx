import { FaPhoneSquareAlt } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="bg-[#0a1728] p-5 flex flex-col items-center justify-center">
            <h3 className="text-white text-center text-2xl font-semibold">
                প্রয়োজনে ফোন করুন
            </h3>
            <span className="bg-white text-[#0a1728] py-3 px-8 mt-2 rounded text-xl font-semibold flex items-center gap-2">
                <FaPhoneSquareAlt />
                ০১৭৫৬৮৯৫৬৩২
            </span>
        </div>
    );
};

export default Contact;
