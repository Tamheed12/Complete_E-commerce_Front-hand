import Image from "next/image";

export default function Info() {
    return (
        <div className="pt-10 w-full lg:w-[70%] flex flex-col lg:flex-row text-left mx-auto">
            {/* Contact Information Section */}
            <div className="w-full lg:w-[40%] h-auto lg:h-[500px] text-black">
                <div className="flex items-start mb-6">
                    <Image src={"/contact1.png"} alt="location" width={22} height={22} />
                    <div className="ml-4">
                        <h2 className="text-xl font-bold">Address</h2>
                        <p>236 5th SE Avenue, New York NY10000, United States</p>
                    </div>
                </div>
                <div className="flex items-start mb-6">
                    <Image src={"/contact2.png"} alt="phone" width={22} height={22} />
                    <div className="ml-4">
                        <h2 className="text-xl font-bold">Phone</h2>
                        <p>+1 234 567 890</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <Image src={"/contact3.png"} alt="email" width={22} height={22} />
                    <div className="ml-4">
                        <h2 className="text-xl font-bold">Email</h2>
                        <p>info@example.com</p>
                    </div>
                </div>
            </div>

            {/* Form Section */}
            <div className="w-full lg:w-[60%] h-auto text-black lg:pl-10 pt-10 lg:pt-0">
                <h1>Your Name</h1>
                <input
                    type="text"
                    defaultValue="Abc"
                    className="text-[#636270] w-full lg:w-[80%] p-4 mt-2 border-2 rounded-2xl"
                />

                <h1 className="pt-6">Email Address</h1>
                <input
                    type="email"
                    defaultValue="Abc@def.com"
                    className="text-[#636270] w-full lg:w-[80%] p-4 mt-2 border-2 rounded-2xl"
                />

                <h1 className="pt-6">Subject</h1>
                <input
                    type="text"
                    defaultValue="This is optional"
                    className="text-[#636270] w-full lg:w-[80%] p-4 mt-2 border-2 rounded-2xl"
                />

                <h1 className="pt-6">Message</h1>
                <textarea
                    defaultValue="Hi! I'd like to ask about..."
                    className="text-[#636270] w-full lg:w-[80%] p-4 mt-2 border-2 rounded-2xl resize-none"
                    rows={5}
                />

                <button className="w-full lg:w-[250px] h-[55px] text-center bg-[#007580] text-white mt-6 rounded-2xl">
                    Submit
                </button>
            </div>
        </div>
    );
}
