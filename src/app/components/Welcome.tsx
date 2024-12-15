import Page from "./homepage/Page";
import BotImage from "./homepage/BotImage";
import Featured from "./homepage/Featured";
import Catagori from "./homepage/Catagori";
import Popular from "./homepage/Popular";
import Product from "./homepage/Product";

export default function Welcome() {
  return (
    <div className="w-full mt-[161px] flex flex-col text-black bg-white ">
      <Page />
      <BotImage />
      <Featured />
      <Catagori />
      <Popular />
      <div className="block">
      <Product />
      </div>
    </div>
  );
}
