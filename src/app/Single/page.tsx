import Featuredp from "../components/single/Featuredp";
import Library from "../components/single/Library";

export default function Single() {
    return (
        <div className="w-[90%] min-h-screen bg-[#e1e3e5] mt-[161px] ml-[120px] flex flex-col items-center">
            {/* Library Section */}
            <Library />

            {/* Featured Products Section */}
            <span className="mt-[50px]">
                <Featuredp />
            </span>
        </div>
    );
}
