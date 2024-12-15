import Info from "./contact/Info";
import Image from "next/image";

export default function Contact() {
    return (
        <div className="w-full lg:w-[80%] h-auto bg-white text-black mx-auto mt-10 lg:mt-[161px] p-4 lg:p-8">
            <div className="text-center">
                <h1 className="text-2xl lg:text-4xl font-bold">Get In Touch With Us</h1>
                <p className="text-[#636270] mt-4">
                    For More Information About Our Product & Services, Please Feel Free To Drop Us<br className="hidden lg:block" />
                    An Email. Our Staff Will Always Be There To Help You Out. Do Not Hesitate!
                </p>
            </div>

            <div className="py-10">
                <Info />
            </div>

            <div className="mt-10 h-auto">
                <Image
                    src={"/contact4.png"}
                    width={800}
                    height={500}
                    alt="pic"
                    className="w-full max-w-[800px] h-auto mx-auto"
                />
            </div>
        </div>
    );
}
