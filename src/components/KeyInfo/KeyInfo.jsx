import { FaBolt, FaChartArea, FaCloud, FaLock } from "react-icons/fa";

function KeyInfo() {
  return (
    <div className="shadow-2xl rounded my-6">
      <div className="grid lg:grid-cols-2 py-10 text-center">
        <div className="border-b border-r grid grid-cols-1 mobile:py-10 gap-3 justify-items-center">
          <FaBolt className="text-6xl bg-[#0648a4] text-white rounded-full p-4" />
          <h1 className="text-[#646464] text-xl font-light">Amet enim</h1>
          <p className="text-[#777] text-xs pb-4 px-4 font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>
        <div className="border-b grid grid-cols-1 gap-3 mobile:py-10 justify-items-center">
          <FaChartArea className="text-6xl bg-[#0648a4] text-white rounded-full p-4" />
          <h1 className="text-[#646464] text-xl font-light">Amet enim</h1>
          <p className="text-[#777] text-xs pb-4 px-4 font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>
        <div className="border-r mobile:border-b lg:border-b-0 mobile:py-10 grid grid-cols-1 gap-3 justify-items-center">
          <FaCloud className="text-6xl bg-[#0648a4] text-white rounded-full p-4 mt-4 " />
          <h1 className="text-[#646464] text-xl font-light">Amet enim</h1>
          <p className="text-[#777] text-xs px-4 font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-3 mobile:py-10 justify-items-center">
          <FaLock className="text-6xl bg-[#0648a4] text-white rounded-full p-4 mt-4 " />
          <h1 className="text-[#646464] text-xl font-light">Amet enim</h1>
          <p className="text-[#777] text-xs px-4 font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
}

export default KeyInfo;
