import Image from "next/image"

export default function Featuredp() {
    return (
        <div className="text-black pl-[20px] pr-[20px] mb-[100px]">

            <span className="flex justify-between mb-10">
                <h1 className="text-3xl">FEATURED PRODUCTS</h1>
                <a className="underline">View</a>
            </span>

            <div className="flex flex-col sm:flex-row sm:flex-wrap justify-between gap-6">
                <div className="w-full sm:w-[30%]">
                    <Image src={"/pp2.png"} alt="chair" width={139} height={126} className="rounded-3xl m-3" />
                    <span className="w-[139px] p-1 text-bold">Library Stool Chair $99</span>
                </div>
                <div className="w-full sm:w-[30%]">
                    <Image src={"/ppsc2.png"} alt="chair" width={139} height={126} className="rounded-3xl m-3" />
                    <span className="w-[139px] p-1 text-bold">Library Stool Chair $99</span>
                </div>
                <div className="w-full sm:w-[30%]">
                    <Image src={"/pps.png"} alt="chair" width={139} height={126} className="rounded-3xl m-3" />
                    <span className="w-[139px] p-1 text-bold">Library Stool Chair $99</span>
                </div>
                <div className="w-full sm:w-[30%]">
                    <Image src={"/ppsa.png"} alt="chair" width={139} height={126} className="rounded-3xl m-3" />
                    <span className="w-[139px] p-1 text-bold">Library Stool Chair $99</span>
                </div>
                <div className="w-full sm:w-[30%]">
                    <Image src={"/pps3.png"} alt="chair" width={139} height={126} className="rounded-3xl m-3" />
                    <span className="w-[139px] p-1 text-bold">Library Stool Chair $99</span>
                </div>
                <div className="w-full sm:w-[30%]">
                    <Image src={"/pps2.png"} alt="chair" width={139} height={126} className="rounded-3xl m-3" />
                    <span className="w-[139px] p-1 text-bold">Library Stool Chair $99</span>
                </div>
            </div>
        </div>
    )
}
