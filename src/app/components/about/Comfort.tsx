import Image from "next/image";

export default function Comforty() {
    return (
        <div className="flex flex-col lg:flex-row h-auto lg:h-[500px] w-full items-center">
            <div className="h-auto lg:h-[500px] w-full lg:w-[80%] pt-10 lg:pt-[80px] pl-4 pr-4 text-white bg-[#007580] flex flex-col justify-center">
                <h1 className="text-2xl lg:text-4xl font-bold mt-6 lg:mt-10">
                    About Us - Comforty
                </h1>
                <p className="text-sm lg:text-base mt-4">
                    At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality.
                </p>
                <button className="w-full lg:w-[180px] h-[50px] lg:h-[60px] mt-6 lg:mt-[100px] bg-[#06656e]">
                    View collection
                </button>
            </div>
            <div className="mt-6 lg:mt-0">
                <Image
                    src={"/pp2.png"}
                    alt="chair"
                    width={760}
                    height={500}
                    className="w-full lg:w-auto"
                />
            </div>
        </div>
    );
}
