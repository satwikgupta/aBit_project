import React from "react";

function PostCard() {
  const bg_img =
    "https://s3-alpha-sig.figma.com/img/87c0/3d4c/1a546c66ea689708d7a03042db7eb340?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MTxtNKQS-SsMEYymio-D29idrcYpuo~HiqxfujchXlyyMUOZN0gTzTUU33UuqkHpkdsqM9L8G8zVLX2HBCCHKd4PbUv57-hSv0jjaq3Y8hmfvuF0Vt7MoS7WsUTAFV67eVHd3UPrhe5FEgqi-okXyxM~4oAdOOEuajE2UGa8VWp985rIESHsHbCLrTGPHXXI52bTxQfFtS26i201um6hCePFeDVi3e25yoaR50VS9ze5WiMVb4V3dhic02Hv38rUZVoVf5CPtCZd~RrYyYONuEpEIp~W8RUT9jAg8EO~f1CWcxxIAEtibQblGQt2veRgn0SJtAPZTBydnW6B5fpWag__";

  return (
    <div
      className="h-[320px] w-72 p-2 bg-scroll bg-top bg-cover rounded-3xl relative"
      style={{
        backgroundImage: `url(${bg_img})`,
      }}
    >
        <div className="flex text-white font-bold text-lg justify-between items-center py-3 px-1 font-inter">
            The Sound of Silence
        </div>
        <div className="flex  justify-center items-center
        absolute bottom-4 left-0 w-full"
        >
            <ul className="flex text-sm backdrop-blur-lg bg-white bg-opacity-20
            text-white justify-around py-2 px-1 rounded-xl w-64 items-center">
                <li className="items-center flex flex-col">
                    <div className="text-xs">Shares</div>
                    <div className="font-semibold ">317</div>
                </li>
                <li className="items-center flex flex-col">
                    <div className="text-xs">Offered</div>
                    <div className="font-semibold">75%</div>
                </li>
                <li className="items-center flex flex-col">
                    <div className="text-xs">Raised</div>
                    <div className="font-semibold">$9510</div>
                </li>
            </ul>
        </div>
    </div>
  );
}

export default PostCard;
