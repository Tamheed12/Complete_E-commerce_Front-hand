import Image from "next/image";

export default function News() {
  return (
    <div className="w-full h-auto py-10 bg-[#f9f9f9]" id="new">
      <center>
        {/* Newsletter Section */}
        <div className="text-black mb-16">
          <h1 className="text-3xl md:text-4xl font-bold">
            Or Subscribe To The Newsletter
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center mt-6 gap-4">
            <input
              type="email"
              placeholder="Email Address..."
              className="w-[90%] sm:w-[400px] px-4 py-2 bg-[#e1e3e5] border border-gray-300 rounded-md focus:outline-none"
            />
            <button className="bg-[#007580] px-6 py-2 text-white rounded-md hover:bg-blue-700">
              Submit
            </button>
          </div>
        </div>

        {/* Instagram Section */}
        <div className="text-black">
          <h1 className="text-2xl md:text-3xl font-semibold mb-6">
            Follow products and discounts on Instagram
          </h1>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4">
            <Image
              src={"/pp2.png"}
              alt="chair"
              width={166}
              height={186}
              className="rounded-md object-cover"
            />
            <Image
              src={"/ppsc2.png"}
              alt="chair"
              width={166}
              height={186}
              className="rounded-md object-cover"
            />
            <Image
              src={"/pps.png"}
              alt="chair"
              width={166}
              height={186}
              className="rounded-md object-cover"
            />
            <Image
              src={"/ppsa.png"}
              alt="chair"
              width={166}
              height={186}
              className="rounded-md object-cover"
            />
            <Image
              src={"/pps3.png"}
              alt="chair"
              width={166}
              height={186}
              className="rounded-md object-cover"
            />
            <Image
              src={"/pps2.png"}
              alt="chair"
              width={166}
              height={186}
              className="rounded-md object-cover"
            />
          </div>
        </div>
      </center>
    </div>
  );
}
