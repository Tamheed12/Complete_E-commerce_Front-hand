import Image from "next/image"

export default function Catagori() {
    return (
        <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] h-auto text-3xl cata">
            {/* Top category */}
            <h1 className="text-center">Top Categories</h1>

            <div className="flex flex-row gap-5 justify-center mt-10">
                {/* First category */}
                <div className="mb-[20px] w-full sm:w-[410px] md:w-[410px] lg:w-[300px]  h-[424px]">
                    <div className="w-[454] h-auto">
                        <Image src={"/ppsc2.png"} alt="chair" width={410} height={424} />
                    </div>
                    <div className="w-full rounded-2xl bg-black bg-opacity-50 text-white text-center py-2">
                       <h3> Wing Chair <br /> 3,584 Products</h3>
                    </div>
                </div>

                 {/* Second category */}
                 <div className="mb-[20px] w-full sm:w-[410px] md:w-[410px] lg:w-[300px]  h-[424px]">
                    <div className="w-[454] h-auto">
                        <Image src={"/pp2.png"} alt="chair" width={410} height={424} />
                    </div>
                    <div className="w-full rounded-2xl bg-black bg-opacity-50 text-white text-center py-2">
                       <h3> Wing Chair <br /> 3,584 Products</h3>
                    </div>
                </div>

                {/* Third category */}
                <div className="mb-[20px] w-full sm:w-[410px] md:w-[410px] lg:w-[300px]  h-[424px]">
                    <div className="w-[454] h-auto">
                        <Image src={"/pps3.png"} alt="chair" width={410} height={424} />
                    </div>
                    <div className="w-full rounded-2xl bg-black bg-opacity-50 text-white text-center py-2">
                       <h3> Wing Chair <br /> 3,584 Products</h3>
                    </div>
                </div>

            </div>
        </div>
    )
}
