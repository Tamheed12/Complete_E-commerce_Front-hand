import Image from "next/image";

export default function Bag() {
    return (
        <div className="w-full lg:w-[60%] mx-auto text-black pt-10 px-4">
            <h1 className="text-2xl lg:text-4xl pb-10">Bag</h1>

            {/* First Item */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center mb-10">
                <Image
                    src={"/pps.png"}
                    alt="chair"
                    width={150}
                    height={150}
                    className="w-[100px] lg:w-[150px] h-auto"
                />

                <div className="mt-4 lg:mt-0 lg:pl-8 w-full">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
                        <h1 className="text-lg lg:text-xl">Library Stool Chair</h1>
                        <h3 className="mt-2 lg:mt-0 text-base lg:text-lg">MRP: $99</h3>
                    </div>
                    <p className="mt-2 text-sm lg:text-base">Ashan Slate/Cobalt Biss</p>
                    <p className="mt-1 text-sm lg:text-base">Size: L | Quantity: 1</p>
                    <Image
                        src={"/cart1.png"}
                        alt="heart"
                        width={300}
                        height={40}
                        className="w-full max-w-[300px] mt-4"
                    />
                </div>
            </div>

            {/* Second Item */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center mb-10 pb-5 border-y-2 border-black pt-5">
                <Image
                    src={"/pp.png"}
                    alt="chair"
                    width={150}
                    height={150}
                    className="w-[100px] lg:w-[150px] h-auto"
                />

                <div className="mt-4 lg:mt-0 lg:pl-8 w-full">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
                        <h1 className="text-lg lg:text-xl">Library Stool Chair</h1>
                        <h3 className="mt-2 lg:mt-0 text-base lg:text-lg">MRP: $99</h3>
                    </div>
                    <p className="mt-2 text-sm lg:text-base">Ashan Slate/Cobalt Biss</p>
                    <p className="mt-1 text-sm lg:text-base">Size: L | Quantity: 1</p>
                    <Image
                        src={"/cart1.png"}
                        alt="heart"
                        width={300}
                        height={40}
                        className="w-full max-w-[300px] mt-4"
                    />
                </div>
            </div>
        </div>
    );
}
