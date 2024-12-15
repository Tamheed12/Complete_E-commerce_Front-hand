import Bag from "./cart/Bag";
import Summary from "./cart/Summary";

export default function Cart() {
    return (
        <div className="text-black w-full flex flex-col lg:flex-row h-auto mt-[161px] bg-[#e1e3e5]">
            <div className="w-full lg:w-[60%]">
                <Bag />
            </div>
            <div className="w-full lg:w-[40%] mt-10 lg:mt-0">
                <Summary />
            </div>
        </div>
    );
}
