import Image from "next/image";

export default function Product() {
    return (
        <div className="w-[90%] text-black mx-auto" id="products">
          <h1 className="text-2xl font-bold text-center mb-8">All Products</h1>
    
          {/* Products Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Product 1 */}
            <div className="rounded-md p-4 bg-gray-100">
              <div className="w-full h-72 rounded-md overflow-hidden">
                <Image
                  src={"/ppsa.png"}
                  alt="Library Stool Chair"
                  width={312}
                  height={300}
                  className="object-cover"
                />
              </div>
              <div className="bg-green-700 text-white text-sm font-semibold rounded-md mt-2 px-4 py-1 inline-block">
                New
              </div>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-lg font-semibold">Library Stool Chair</p>
                  <p className="text-gray-500">$20</p>
                </div>
                <Image
                  src={"/Add g.png"}
                  alt="Add to cart"
                  width={50}
                  height={40}
                  className="rounded-md"
                />
              </div>
            </div>
    
            {/* Product 2 */}
            <div className="rounded-md p-4 bg-gray-100">
              <div className="w-full h-72 rounded-md overflow-hidden">
                <Image
                  src={"/pps.png"}
                  alt="Library Stool Chair"
                  width={312}
                  height={300}
                  className="object-cover"
                />
              </div>
              <div className="bg-orange-700 text-white text-sm font-semibold rounded-md mt-2 px-4 py-1 inline-block">
                Sale
              </div>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-lg font-semibold">Library Stool Chair</p>
                  <p className="text-gray-500">$20</p>
                </div>
                <Image
                  src={"/Addw.png"}
                  alt="Add to cart"
                  width={50}
                  height={40}
                  className="rounded-md"
                />
              </div>
            </div>
    
            {/* Product 3 */}
            <div className="rounded-md p-4 bg-gray-100">
              <div className="w-full h-72 rounded-md overflow-hidden">
                <Image
                  src={"/ppsc.png"}
                  alt="Library Stool Chair"
                  width={312}
                  height={300}
                  className="object-cover"
                />
              </div>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-lg font-semibold">Library Stool Chair</p>
                  <p className="text-gray-500">$20</p>
                </div>
                <Image
                  src={"/Addw.png"}
                  alt="Add to cart"
                  width={50}
                  height={40}
                  className="rounded-md"
                />
              </div>
            </div>
    
            {/* Product 4 */}
            <div className="rounded-md p-4 bg-gray-100">
              <div className="w-full h-72 rounded-md overflow-hidden">
                <Image
                  src={"/pp.png"}
                  alt="Library Stool Chair"
                  width={312}
                  height={300}
                  className="object-cover"
                />
              </div>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-lg font-semibold">Library Stool Chair</p>
                  <p className="text-gray-500">$20</p>
                </div>
                <Image
                  src={"/Addw.png"}
                  alt="Add to cart"
                  width={50}
                  height={40}
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
    
    {/* Products Section */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
            {/* Product 1 */}
            <div className="rounded-md p-4 bg-gray-100">
              <div className="w-full h-72 rounded-md overflow-hidden">
                <Image
                  src={"/ppsa.png"}
                  alt="Library Stool Chair"
                  width={312}
                  height={300}
                  className="object-cover"
                />
              </div>
              <div className="bg-green-700 text-white text-sm font-semibold rounded-md mt-2 px-4 py-1 inline-block">
                New
              </div>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-lg font-semibold">Library Stool Chair</p>
                  <p className="text-gray-500">$20</p>
                </div>
                <Image
                  src={"/Add g.png"}
                  alt="Add to cart"
                  width={50}
                  height={40}
                  className="rounded-md"
                />
              </div>
            </div>
    
            {/* Product 2 */}
            <div className="rounded-md p-4 bg-gray-100">
              <div className="w-full h-72 rounded-md overflow-hidden">
                <Image
                  src={"/pps.png"}
                  alt="Library Stool Chair"
                  width={312}
                  height={300}
                  className="object-cover"
                />
              </div>
              <div className="bg-orange-700 text-white text-sm font-semibold rounded-md mt-2 px-4 py-1 inline-block">
                Sale
              </div>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-lg font-semibold">Library Stool Chair</p>
                  <p className="text-gray-500">$20</p>
                </div>
                <Image
                  src={"/Addw.png"}
                  alt="Add to cart"
                  width={50}
                  height={40}
                  className="rounded-md"
                />
              </div>
            </div>
    
            {/* Product 3 */}
            <div className="rounded-md p-4 bg-gray-100">
              <div className="w-full h-72 rounded-md overflow-hidden">
                <Image
                  src={"/ppsc.png"}
                  alt="Library Stool Chair"
                  width={312}
                  height={300}
                  className="object-cover"
                />
              </div>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-lg font-semibold">Library Stool Chair</p>
                  <p className="text-gray-500">$20</p>
                </div>
                <Image
                  src={"/Addw.png"}
                  alt="Add to cart"
                  width={50}
                  height={40}
                  className="rounded-md"
                />
              </div>
            </div>
    
            {/* Product 4 */}
            <div className="rounded-md p-4 bg-gray-100">
              <div className="w-full h-72 rounded-md overflow-hidden">
                <Image
                  src={"/pp.png"}
                  alt="Library Stool Chair"
                  width={312}
                  height={300}
                  className="object-cover"
                />
              </div>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-lg font-semibold">Library Stool Chair</p>
                  <p className="text-gray-500">$20</p>
                </div>
                <Image
                  src={"/Addw.png"}
                  alt="Add to cart"
                  width={50}
                  height={40}
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
    
        </div>
     
    );
}
