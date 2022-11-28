import water from "../../assets/water-unsplash-2.jpg";

function Header() {
  return (
    <header className="relative flex h-screen justify-center items-center" id="header">
      <img src={water} alt="Water" className="absolute object-cover w-screen h-screen" />
      <div className="absolute grid justify-items-center">
        <h1 className="lg:text-7xl text-4xl text-white font-light m-6">Aqmeter</h1>
        <h2 className="lg:text-xl text-white font-light">Access online account of utilities companies.</h2>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 font-light m-6">
          <button type="button" className="bg-white rounded border border-white py-3 px-20">
            Register
          </button>
          <button type="button" className="bg-transparent rounded border border-white text-white py-3 px-20">
            Learn more
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
