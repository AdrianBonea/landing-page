import { useState } from "react";
import axios from "axios";
import { URL } from "../../constants";

function Table() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get(URL);
    setData(response.data);
  };

  let total = 0;
  if (data.length > 0) {
    for (let i = 0; i < data.length; i += 1) {
      total += data[i].invoiceValue;
    }
  }

  return (
    <div className="relative shadow-2xl text-[#777] mb-10">
      <h1 className="mt-8 mb-2 ml-10 font-light text-xl">Table</h1>
      <h2 className="mb-2 ml-10 font-light text-sm">Just another table example</h2>
      <div className="mx-10">
        <table className="text-sm text-left font-light table-auto lg:w-full">
          <thead className="text-xs border-b">
            <tr>
              <th className="lg:py-3 lg:px-6 font-light">Nr. crt.</th>
              <th className="lg:py-3 lg:px-6 font-light">Name</th>
              <th className="lg:py-3 lg:px-6 font-light">Description</th>
              <th className="lg:py-3 lg:px-6 font-light">Price</th>
            </tr>
          </thead>
          {data.map((item) => (
            <tbody key={item.erpPaymentId}>
              <tr className="border-b">
                <th className="lg:py-4 lg:px-6 font-light">{item.erpPaymentId}</th>
                <td className="lg:py-4 lg:px-6">{item.documentType}</td>
                <td className="lg:py-4 lg:px-6">{item.invoiceSerial}</td>
                <td className="lg:py-4 lg:px-6">{item.invoiceValue}</td>
              </tr>
            </tbody>
          ))}
          <tbody>
            <tr className="border-b">
              <th className="lg:py-4 lg:px-6  font-bold">
                <button type="button" onClick={getData} onKeyDown={getData}>
                  Get Data
                </button>
              </th>
              <td className="lg:py-4 lg:px-6"> </td>
              <td className="lg:py-4 lg:px-6" />
              <td className="lg:py-4 lg:px-6">{(Math.round(total * 100) / 100).toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
