export default function Faq() {
    return (
      <main className="w-[90%] md:w-[80%] mx-auto py-10 bg-white text-black">
        <center>
          <div className="mb-10">
            <h1 className="text-3xl font-semibold">Questions Look Here</h1>
            <p className="text-gray-600 mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            </p>
          </div>
        </center>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* FAQ Card */}
  
              <div className="bg-gray-200 rounded-md p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                <h1 className="text-[15px] font-medium flex justify-between items-center">
                  What types of chairs do you offer?
                  <span className="text-2xl font-bold cursor-pointer">+</span>
                </h1>
                <p className="text-[12px] text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero
                  veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
                </p>
              </div>
        </div>
      </main>
    );
  }
  