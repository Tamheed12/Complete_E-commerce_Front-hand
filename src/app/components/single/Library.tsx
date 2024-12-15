import Image from "next/image";

export default function Library() {
    return (
        <div className="p-5 lg:p-[50px] flex flex-col lg:flex-row">
            {/* Image Section */}
            <div className="mb-6 lg:mb-0">
                <Image
                    src={"/pps.png"}
                    width={725}
                    height={657}
                    alt="chair"
                    className="rounded-lg"
                />
            </div>

            {/* Text Section */}
            <div className="w-full lg:pl-[70px]">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black">
                    Library Stool Chair
                </h1>
                <button className="bg-[#029faf] mt-6 rounded-3xl p-3 text-white">
                    $200.00 USD
                </button>

                <hr className="w-full h-1 mt-10 bg-[#272343] border-2" />

                <p className="text-xl mt-10 text-[#272343]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

                <button className="w-[200px] h-[37px] bg-[#029faf] pt-1 pl-1 rounded-3xl mt-6 flex items-center justify-center">
                    <Image
                        src={"/Add g.png"}
                        alt="shop"
                        width={30}
                        height={37}
                        className="inline"
                    />
                    Add To Cart
                </button>
            </div>
        </div>
    );
}
