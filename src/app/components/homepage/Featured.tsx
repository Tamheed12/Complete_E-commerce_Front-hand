import Image from "next/image"

export default function Featured() {
    return (
        <div className="w-full sm:w-[90%] md:w-[80%] h-auto" id="fea">
            {/* Featured Products */}
            <h1 className="text-2xl text-center mt-5">Featured Products</h1>

            <div className="flex flex-wrap justify-center gap-6 mt-10 p-6">
                {/* First featured product */}
                <div className="mb-10 w-full sm:w-[312px] md:w-[312px] lg:w-[312px] h-[300px] rounded-md p-2 bg-[url('/ppsa.png')]">
                    <Image src={"/ppsa.png"} alt="chair" width={312} height={300} />
                    <div className="bg-green-700 rounded-md h-[35px] w-[80px] mt-2 p-2 pl-4">New</div>
                    <div className="flex pt-5 mt-3 justify-between">
                        <div>
                            <p className="text-lg font-semibold">Library Stool Chair</p>
                            <p>$20</p>
                        </div>
                        <div>
                            <Image src={"/Add g.png"} alt="shop" width={50} height={30} className="rounded-md w-[50px] h-[40px]" />
                        </div>
                    </div>
                </div>

                {/* Second featured product */}
                <div className="w-full sm:w-[312px] md:w-[312px] lg:w-[312px] h-[300px] rounded-md p-2">
                    <Image src={"/pps.png"} alt="chair" width={312} height={300} />
                    <div className="bg-orange-700 rounded-md h-[35px] w-[80px] mt-2 p-2 pl-4">Sale</div>
                    <div className="flex pt-5 mt-3 justify-between">
                        <div>
                            <p className="text-lg font-semibold">Library Stool Chair</p>
                            <p>$20</p>
                        </div>
                        <div>
                            <Image src={"/Addw.png"} alt="shop" width={50} height={30} className="rounded-md w-[50px] h-[40px]" />
                        </div>
                    </div>
                </div>

                {/* Third featured product */}
                <div className="w-full sm:w-[312px] md:w-[312px] lg:w-[312px] h-[300px] rounded-md p-2">
                    <Image src={"/ppsc.png"} alt="chair" width={312} height={300} />
                    <div className="flex pt-5 mt-3 justify-between">
                        <div>
                            <p className="text-lg font-semibold">Library Stool Chair</p>
                            <p>$20</p>
                        </div>
                        <div>
                            <Image src={"/Addw.png"} alt="shop" width={50} height={30} className="rounded-md w-[50px] h-[40px]" />
                        </div>
                    </div>
                </div>

                {/* Fourth featured product */}
                <div className="w-full sm:w-[312px] md:w-[312px] lg:w-[312px] h-[300px] rounded-md p-2">
                    <Image src={"/pp.png"} alt="chair" width={312} height={300} />
                    <div className="flex pt-5 mt-3 justify-between">
                        <div>
                            <p className="text-lg font-semibold">Library Stool Chair</p>
                            <p>$20</p>
                        </div>
                        <div>
                            <Image src={"/Addw.png"} alt="shop" width={50} height={30} className="rounded-md w-[50px] h-[40px]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
