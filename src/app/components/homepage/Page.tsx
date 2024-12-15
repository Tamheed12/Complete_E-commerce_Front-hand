import Image from "next/image"

export default function Page() {
    return (
        <main>
            {/* Welcome page */}
            <div className="w-full sm:w-[90%] md:w-[80%] pb-[50px] h-auto flex flex-col md:flex-row justify-between items-center mt-10" id="wel">
                {/* Left Section (Text and Button) */}
                <div className="w-full sm:w-[90%] md:w-[38%] text-center md:text-left">
                    <div className="w-full h-auto" id="text">
                        <p className="text-xl font-bold text-gray-700" id="welp">WELCOME TO CHAIRY</p>
                        <h1 className="text-3xl md:text-4xl font-semibold text-black mt-4">
                            Best Furniture <br /> Collection For Your <br /> Interior
                        </h1>
                    </div>

                    <button className="mt-10 ml-[20px] sm:w-[60%] md:w-[171px] h-[52px] p-3 text-white rounded-md  bg-[#029faf]">
                        Shop Now —›
                    </button>
                </div>

                {/* Right Section (Image) */}
                <div className="w-full sm:w-[90%] md:w-[50%] mt-10 md:mt-0">
                    <Image src={"/page1.png"} alt="Welcome" width={600} height={384} className="w-full h-auto object-cover" />
                </div>
            </div>
        </main>
    )
}
