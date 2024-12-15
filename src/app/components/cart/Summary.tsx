export default function Summary() {
    return (
        <div className="w-full max-w-md mx-auto mt-10 lg:mt-[120px] p-4">
            <h1 className="text-lg lg:text-2xl text-center lg:text-left">Summary</h1>

            {/* Subtotal */}
            <div className="pt-5 flex flex-col lg:flex-row lg:justify-between items-center lg:items-start">
                <p className="text-sm lg:text-base">Subtotal</p>
                <p className="text-bold text-sm lg:text-base">$198.00</p>
            </div>

            {/* Delivery and Handling */}
            <div className="pt-5 pb-5 flex flex-col lg:flex-row lg:justify-between items-center lg:items-start">
                <p className="text-sm lg:text-base">Estimated Delivery & Handling</p>
                <p className="text-sm lg:text-base">Free</p>
            </div>

            {/* Total */}
            <div className="pt-5 pb-5 flex flex-col lg:flex-row lg:justify-between items-center lg:items-start border-y-2 border-black">
                <p className="text-sm lg:text-base">Total</p>
                <p className="text-bold text-sm lg:text-base">$198.00</p>
            </div>

            {/* Checkout Button */}
            <button className="mt-8 w-full max-w-[320px] h-[45px] bg-[#007580] flex justify-center items-center rounded-3xl text-white mx-auto">
                Member Checkout
            </button>
        </div>
    );
}
