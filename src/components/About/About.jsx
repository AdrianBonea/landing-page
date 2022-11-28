import sunsetImg from "../../assets/pic01.jpg";

function About() {
  return (
    <>
      <div className="grid justify-items-center shadow-2xl">
        <div className="grid grid-rows-2 divide-y lg:mx-40 mx-10 text-center font-light">
          <h1 className="text-[#646464] text-xl lg:pt-20 pt-16 lg:pb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </h1>
          <p className="text-[#777] text-m lg:py-10 pt-5 pb-10">
            Et praesentium quos et odit illum non quis quidem ad alias galisum. Sit debitis voluptate et dignissimos
            quasi in dolor quas et consequuntur perspiciatis aut esse enim et temporibus illum et laboriosam beatae. Eum
            assumenda quia qui animi vero cum corrupti autem.
          </p>
        </div>
      </div>
      <img className="rounded-b" src={sunsetImg} alt="" />
    </>
  );
}

export default About;
