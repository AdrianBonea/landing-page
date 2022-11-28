import ServiceOne from "../../assets/pic02.jpg";
import ServiceTwo from "../../assets/pic03.jpg";

function Services() {
  return (
    <div className="grid lg:grid-cols-2 gap-5 pb-10">
      <div className="lg:shadow-2xl shadow-lg rounded grid justify-items-center gap-2">
        <img src={ServiceOne} alt="" className="rounded-t" />
        <h1 className="text-lg text-[#646464] font-light mt-4">Sed lorem adipiscing</h1>
        <p className="text-[10px] text-[#777] font-light mx-8 text-center">
          Id dolorem dolor qui saepe beatae eum dolore quia non sequi alias sed cumque iure hic odio dolorem.Ut illum
          tempore ea iusto culpa ab consequuntur.
        </p>
        <button type="button" className="text-[11px] text-[#777] border py-1 px-3 my-4">
          Learn More
        </button>
      </div>
      <div className="shadow-2xl rounded grid justify-items-center gap-2">
        <img src={ServiceTwo} alt="" className="rounded-t" />
        <h1 className="text-lg text-[#646464] font-light mt-4">Accumsan integer</h1>
        <p className="text-[10px] text-[#777] font-light mx-8 text-center">
          Qui similique sunt non perferendis odit sed sapiente quae et quidem quam ea quae quas!
        </p>
        <button type="button" className="text-[11px] text-[#777] border py-1 px-3 my-4">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Services;
