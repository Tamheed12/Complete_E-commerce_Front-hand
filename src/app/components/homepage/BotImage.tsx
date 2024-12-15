import Image from "next/image"

export default function BotImage() {
    return (
        <div className="mt-20 flex justify-center flex-wrap" id="welbot">
            {/* For bottom images */}
            <div className="w-[85px] h-[87px] mx-2 mb-4">
                <Image src={"/logo4.png"} alt="logo pic" width={85} height={87} />
            </div>
            <div className="w-[85px] h-[87px] mx-2 mb-4">
                <Image src={"/logo2.png"} alt="logo pic" width={85} height={87} />
            </div>
            <div className="w-[85px] h-[87px] mx-2 mb-4">
                <Image src={"/logo3.png"} alt="logo pic" width={85} height={87} />
            </div>
            <div className="w-[85px] h-[87px] mx-2 mb-4">
                <Image src={"/logo4.png"} alt="logo pic" width={85} height={87} />
            </div>
            <div className="w-[85px] h-[87px] mx-2 mb-4">
                <Image src={"/logo5.png"} alt="logo pic" width={85} height={87} />
            </div>
            <div className="w-[85px] h-[87px] mx-2 mb-4">
                <Image src={"/logo7.png"} alt="logo pic" width={85} height={87} />
            </div>
            <div className="w-[85px] h-[87px] mx-2 mb-4">
                <Image src={"/logo5.png"} alt="logo pic" width={85} height={87} />
            </div>
        </div>
    )
}
