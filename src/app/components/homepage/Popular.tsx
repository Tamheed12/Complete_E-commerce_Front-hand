import Image from "next/image"

export default function Popular() {
    return (
        <div className="w-full sm:w-[90%] md:w-[80%] h-auto flex flex-col md:flex-row justify-between items-center mt-10 exp">
            {/* Left Section (Text) */}
            <div className="flex flex-col justify-center items-center md:items-start mt-10 md:mt-0">
                <h1 className="rotate-90 sm:w-[120px] md:w-[150px] sm:h-[300px] md:h-[500px] text-2xl sm:text-3xl md:text-xl font-semibold text-gray-800 expt">
                    EXPLORE NEW AND POPULAR STYLES
                </h1>
            </div>
                
            {/* Right Section (Images) */}
            <div className="flex flex-wrap justify-center md:justify-start mt-10 md:mt-0">
                <div className="w-full sm:w-[200px] md:w-[190px] h-[240px] m-2">
                    <Image src={"/pp.png"} alt="chair" width={190} height={240} className="w-full h-full object-cover" />
                </div>
                <div className="w-full sm:w-[200px] md:w-[190px] h-[240px] m-2">
                    <Image src={"/ppsa.png"} alt="chair" width={190} height={240} className="w-full h-full object-cover" />
                </div>
                <div className="w-full sm:w-[200px] md:w-[190px] h-[240px] m-2">
                    <Image src={"/ppsa.png"} alt="chair" width={190} height={240} className="w-full h-full object-cover" />
                </div>
                <div className="w-full sm:w-[200px] md:w-[190px] h-[240px] m-2">
                    <Image src={"/pps2.png"} alt="chair" width={190} height={240} className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    )
}
