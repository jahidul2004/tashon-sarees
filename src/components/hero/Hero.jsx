import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

const Hero = () => {
    return (
        <div>
            <h1 className="text-center my-5 p-5 text-xl md:text-2xl font-semibold leading-relaxed">
                ✨ ট্রেন্ডি ডিজাইন, প্রিমিয়াম কোয়ালিটি{" "}
                <span className="hidden md:inline">, সাশ্রয়ী দাম</span> <br />{" "}
                🚚 সারা দেশে ফ্রি ডেলিভারি <br /> 📞 অর্ডার করুন এখনই
            </h1>

            <div className="p-5 md:w-[70%] mx-auto">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        768: { slidesPerView: 3 },
                    }}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    modules={[Pagination, Autoplay]}
                    className="relative"
                >
                    {[
                        {
                            id: 1,
                            title: "কাতান শাড়ি",
                            img: "https://i.ibb.co/5XNw1J6r/b92997f9-9108-406d-9b87-67ce54522c5e.jpg",
                        },
                        {
                            id: 2,
                            title: "জামদানী শাড়ি",
                            img: "https://i.ibb.co/bfTHSVG/6b02b05d-0f69-46b9-bd1c-0d8f6aaa9b4f.jpg",
                        },
                        {
                            id: 3,
                            title: "হাফ সিল্ক শাড়ি",
                            img: "https://i.ibb.co/Z1VN1WbJ/3b371ea7-6647-4128-8b5c-aa2845f19b1b.jpg",
                        },
                    ].map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="rounded-lg overflow-hidden relative pb-10">
                                <img
                                    className="h-[300px] w-full object-cover"
                                    src={item.img}
                                    alt={item.title}
                                />
                                <div className="mt-5 px-3 flex flex-col items-center relative z-10">
                                    <h1 className="text-2xl font-bold">
                                        {item.title}
                                    </h1>
                                    <p className="my-2 text-center">
                                        সেরা মানের শাড়ি এখন সহজেই আপনার
                                        দোরগোড়ায়! ট্রেন্ডি ডিজাইন, প্রিমিয়াম
                                        কোয়ালিটি, এবং সাশ্রয়ী দামে।
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="flex justify-center my-5">
                    <button className="btn btn-lg bg-[#0a1728] text-white">
                        অর্ডার করুন
                    </button>
                </div>
            </div>

            <div className="text-center bg-[#0a172807] p-5 md:p-10">
                <p className="text-xl font-semibold p-5">
                    ট্রেন্ডি ডিজাইন, প্রিমিয়াম কোয়ালিটি, হালকা ও আরামদায়ক, হাতের
                    কাজ, ও দীর্ঘস্থায়ী কাপড়।
                </p>

                <h1 className="text-2xl font-bold my-1">
                    রেগুলার প্রাইজঃ <del>৭৫০ টাকা</del>
                </h1>
                <h1 className="text-2xl font-bold my-1">
                    অফার প্রাইজঃ ৫০০ টাকা
                </h1>

                <button className="my-5 btn btn-lg bg-[#0a1728] text-white">
                    অর্ডার করুন
                </button>
            </div>
        </div>
    );
};

export default Hero;
