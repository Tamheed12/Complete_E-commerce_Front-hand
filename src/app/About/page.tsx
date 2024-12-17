import Comforty from "../components/about/Comfort";
import ProductOur from "../components/about/PopularOur";
import Image from "next/image";

export default function About() {
    return (
        <div className="w-full lg:w-[80%] h-auto mt-10 lg:mt-[161px] bg-white mx-auto border-2 p-4 lg:p-8">
            <div>
                <Comforty />
            </div>

            <div className="text-center mt-10">
                <h1 className="text-2xl lg:text-3xl text-black mb-6">
                    What Makes Our Brand Different
                </h1>
                <Image
                    src={"/about1.png"}
                    alt="about"
                    width={1100}
                    height={300}
                    className="w-full max-w-[1100px] h-auto mx-auto"
                />
            </div>

            <div className="mt-10">
                <ProductOur />
            </div>
        </div>
    );
}
