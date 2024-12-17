import BotImage from "../components/homepage/BotImage";
import Catagori from "../components/homepage/Catagori";
import Featured from "../components/homepage/Featured";
import Page from "../components/homepage/Page";
import Popular from "../components/homepage/Popular";
import Product from "../components/homepage/Product";

export default function Welcome() {
    return (
      <div className="w-full mt-[161px] flex flex-col text-black bg-white ">
        <center>
            <Page/>
        <BotImage/>
        <Featured />
        <Catagori />
        <Popular />
        <div className="block">
        <Product />
        
        </div>
        </center>
      </div>
    );
  }