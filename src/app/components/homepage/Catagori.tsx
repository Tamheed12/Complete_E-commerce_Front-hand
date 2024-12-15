import Image from "next/image"

export default function Catagori() {
    return (
        <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] h-auto text-3xl ml-10 cata">
            {/* Top category */}
            <h1 className="text-center">Top Categories</h1>

            <div className="flex flex-wrap gap-5 justify-center mt-10">
                {/* First category */}
                <div className="mb-[120px] w-full sm:w-[410px] md:w-[410px] lg:w-[300px] h-[424px]">
                    <div className="w-full h-[424px]">
                        <Image src={"/ppsc2.png"} alt="chair" width={410} height={424} />
                    </div>
                    <div className="w-full bg-black bg-opacity-70 text-xl text-center py-2">
                        Wing Chair <br /> 3,584 Products
                    </div>
                </div>

                {/* Second category */}
                <div className="mb-[120px] w-full sm:w-[410px] md:w-[410px] lg:w-[300px] h-[424px]">
                    <div className="w-full h-[424px]">
                        <Image src={"/pp2.png"} alt="chair" width={410} height={424} />
                    </div>
                    <div className="w-full bg-black bg-opacity-70 text-xl text-center py-2">
                        Wing Chair <br /> 3,584 Products
                    </div>
                </div>

                {/* Third category */}
                <div className="w-full mb-[120px] sm:w-[410px] md:w-[410px] lg:w-[300px] h-[424px]">
                    <div className="w-full h-[424px]">
                        <Image src={"/pps3.png"} alt="chair" width={410} height={424} />
                    </div>
                    <div className="w-full bg-black bg-opacity-70 text-xl text-center py-2">
                        Wing Chair <br /> 3,584 Products
                    </div>
                </div>
            </div>
        </div>
    )
}
