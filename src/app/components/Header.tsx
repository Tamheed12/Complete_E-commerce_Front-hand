import Image from "next/image";
import Link from "next/link";
import Navabar from "./Navbar";

export default function Header() {
    return (
        <header className="w-full h-[45px] z-10 mb-[50px]" id="top">
            {/* top header */}
            <div className="flex justify-between ml-20 bg-[#272343] text-white pt-3 pb-3">
                <p>Free Shipping On All Order Over $50</p>
                <div className="flex" id="toptext">
                    <p className="pr-5">Eng ▾</p>
                    <p className="pr-5">
                        <Link href="./Faq">Faqs</Link>
                    </p>
                    <p className="pr-5">Need Help</p>
                </div>
            </div>

            {/* logo */}
            <div className="w-full h-[84px] flex justify-between text-black" id="second">
                <div className="flex h-[40px] w-[166px] ml-20 mt-5 gap-3 text-3xl font-bold">
                    <div className="w-[40px] h-[40px]">
                        <Image src="/head1.png" alt="logo" width={40} height={40} />
                    </div>
                    <h1>Comforty</h1>
                </div>
                <div className="w-[120px] h-[44px] mt-5 mb-5 mr-20 ml-16">
                    <button>
                        <Link href={"./Cart"}><Image src="/head2.png" alt="Shopping Cart" width={120} height={70} /></Link>
                    </button>
                </div>
            </div>

            {/* navbar */}
          
            <Navabar/>  
        
        </header>
    );
}
