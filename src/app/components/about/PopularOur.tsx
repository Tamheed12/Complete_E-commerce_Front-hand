import Image from "next/image";

export default function ProductOur() {
    return (
        <div className="p-4 lg:p-10">
            <h1 className="text-black text-2xl lg:text-3xl text-center lg:text-left mb-6">
                Our Popular Product
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="h-auto p-2 flex flex-col items-center">
                    <Image
                        src={"/Large.png"}
                        alt="chair"
                        width={500}
                        height={300}
                        className="w-full max-w-[300px] h-auto"
                    />
                    <p className="text-black text-center mt-2">
                        The Poplar Suede Sofa<br /> $99.00
                    </p>
                </div>

                <div className="h-auto p-2 flex flex-col items-center">
                    <Image
                        src={"/pps3.png"}
                        alt="chair"
                        width={250}
                        height={350}
                        className="w-full max-w-[250px] h-auto"
                    />
                    <p className="text-black text-center mt-4">
                        The Poplar Suede Sofa<br /> $99.00
                    </p>
                </div>

                <div className="h-auto p-2 flex flex-col items-center">
                    <Image
                        src={"/pps2.png"}
                        alt="chair"
                        width={250}
                        height={350}
                        className="w-full max-w-[250px] h-auto"
                    />
                    <p className="text-black text-center mt-4">
                        The Poplar Suede Sofa<br /> $99.00
                    </p>
                </div>
            </div>
        </div>
    );
}
