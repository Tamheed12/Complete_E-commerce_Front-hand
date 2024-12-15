import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-200 p-4 text-gray-500">
      <div className="flex flex-wrap justify-center sm:justify-between gap-6 sm:gap-12">
        {/* Section 1 */}
        <div className="w-full sm:w-[350px]">
          <div className="flex items-center gap-3 text-3xl font-bold">
            <Image src={"/head1.png"} alt="logo" width={40} height={40} />
            <h1>Comforty</h1>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
            Cras egestas purus.
          </p>
          <Image src={"/foot1.png"} alt="social links" width={206} height={25} />
        </div>

        {/* Section 2 */}
        <div className="w-full sm:w-[250px]">
          <p className="font-bold">Category</p>
          <p>
            Sofa<br />
            Armchair<br />
            Wing Chair<br />
            Desk Chair<br />
            Wooden Chair<br />
            Park Bench
          </p>
        </div>

        {/* Section 3 */}
        <div className="w-full sm:w-[250px]">
          <p className="font-bold">Support</p>
          <p>
            Help & Support<br />
            Terms & Conditions<br />
            Privacy Policy<br />
            Help
          </p>
        </div>

        {/* Section 4 */}
        <div className="w-full sm:w-[300px]">
          <p className="font-bold">Newsletter</p>
          <input
            type="text"
            placeholder="Your email"
            className="border p-2 w-full sm:w-[250px] mb-4 mr-5 rounded-xl"
          />
          <button className="w-full sm:w-auto text-white px-4 py-2 footbut rounded-xl">
            Subscribe
          </button>
          <p className="text-sm mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-4 border-t border-gray-800 pt-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm text-center sm:text-left">
          @2021 - Blogy - Designed & Developed by <span className="font-bold">Zakirsoft</span>
        </p>
        <div className="mt-4 sm:mt-0">
          <Image src={"/foot2.png"} alt="payment methods" width={200} height={30} />
        </div>
      </div>
    </footer>
  );
}
