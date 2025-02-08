import { useState } from "react";
import { FaLock } from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";
import { FaPlus, FaMinus } from "react-icons/fa"; // Import the Plus and Minus icons

const OrderForm = () => {
    const [quantity, setQuantity] = useState(1); // Default quantity is 1
    const pricePerProduct = 450;
    const shippingCost = 0;
    const subtotal = quantity * pricePerProduct;
    const total = subtotal + shippingCost;

    const increaseQuantity = () => setQuantity(quantity + 1);
    const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1); // Prevent quantity from going below 1

    return (
        <div className="border-2 border-[#0a1728] p-5 rounded-lg w-[95%] md:container mx-auto my-10">
            <h1 className="bg-[#0a1728] rounded-lg p-5 text-center text-xl md:text-3xl text-white font-extrabold">
                অর্ডার করতে নীচের ফরমটি পূরণ করুন
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
                <form className="w-full flex flex-col gap-5 mx-auto mt-5 md:">
                    <h1 className="text-2xl font-semibold">
                        Billing & Shipping Details
                    </h1>
                    <div className="form-control">
                        <span className="label-text">পূর্ণ নাম লিখুন</span>
                        <br />
                        <input
                            type="text"
                            placeholder="পূর্ণ নাম"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <span className="label-text">মোবাইল নাম্বার লিখুন</span>
                        <br />
                        <input
                            type="text"
                            placeholder="মোবাইল নাম্বার"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <span className="label-text">
                            আপনার ঠিকানা লিখুন (থানা, জেলা, বিভাগ)
                        </span>
                        <br />
                        <textarea
                            className="textarea textarea-bordered"
                            placeholder="আপনার সম্পূর্ণ ঠিকানা লিখুন"
                        ></textarea>
                    </div>
                    <div className="form-control">
                        <span className="label-text">
                            কত পিস অর্ডার করতে চান?
                        </span>
                        <br />
                        <div className="flex items-center gap-4">
                            <button
                                type="button"
                                onClick={decreaseQuantity}
                                className="btn border border-[#0a1728] rounded-full p-2 text-[#0a1728] hover:bg-[#0a1728] hover:text-white h-[40px] w-[40px]"
                            >
                                <FaMinus />
                            </button>
                            <span>{quantity}</span>
                            <button
                                type="button"
                                onClick={increaseQuantity}
                                className="btn border border-[#0a1728] rounded-full p-2 text-[#0a1728] hover:bg-[#0a1728] hover:text-white h-[40px] w-[40px]"
                            >
                                <FaPlus />
                            </button>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-2xl font-semibold">Shipping</h1>
                        <div className="flex border p-2 mt-5 rounded-lg justify-between">
                            <h1>ডেলিভারি চার্জ:</h1>
                            <h1 className="flex items-center">
                                <TbCurrencyTaka /> ফ্রী
                            </h1>
                        </div>
                    </div>
                </form>
                <div className="md:p-5 mt-5">
                    <h1 className="text-2xl font-semibold">Your Order</h1>
                    <div className="mt-5">
                        <div className="flex justify-between border-b border-dashed p-2">
                            <p>Product</p>
                            <p>Subtotal</p>
                        </div>
                        <div className="flex items-center justify-between border-b border-dashed p-2">
                            <div className="flex items-center gap-4">
                                <img
                                    className="w-[60px] h-[60px] rounded-lg object-cover"
                                    src="https://i.ibb.co/5XNw1J6r/b92997f9-9108-406d-9b87-67ce54522c5e.jpg"
                                    alt=""
                                />
                                <p>হাফ সিল্ক শারী</p>
                            </div>
                            <p>
                                x{quantity} Tk {subtotal.toFixed(2)}
                            </p>
                        </div>
                        <div className="border-b-2 border-dashed p-2">
                            <div className="my-1 flex justify-between p-2">
                                <p>Subtotal</p>
                                <p>{subtotal.toFixed(2)} Tk</p>
                            </div>
                            <div className="my-1 flex justify-between p-2">
                                <p>Shipping</p>
                                <p>{shippingCost} Tk</p>
                            </div>
                        </div>
                        <div className="flex justify-between p-2 mx-2">
                            <p>Total</p>
                            <p>{total.toFixed(2)} Tk</p>
                        </div>
                        <div className="w-full flex flex-col justify-center items-center mt-5 bg-[#f7f7f7] p-10 rounded-lg text-center">
                            <h1 className="text-xl font-semibold">
                                ক্যাশ অন ডেলিভারি
                            </h1>
                            <p>পন্য হাতে পাওয়ার পর পে করুন</p>
                        </div>
                        <div className="mt-5">
                            <button className="w-full btn btn-lg bg-[#0a1728] text-white text-lg font-extrabold">
                                <FaLock className="hidden md:block" />
                                অর্ডার কনফার্ম করুন {total.toFixed(2)} টাকা
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderForm;
