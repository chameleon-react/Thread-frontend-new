import React from "react";
import NavBar from "./Components/NavBar";
import SelectionPart from "./Components/SelectionPart";
import View from "./Components/View";

function ProductBuild() {
  document.title = 'Product Builder'
  return <div >
    <NavBar />
    <div className="body bg-[#F2F5F7] w-[100%] h-[92vh] flex  justify-center items-center">
      <div className="content w-[100%] 2xl:w-[75%] h-[95%] flex flex-col md:flex-row justify-center items-center gap-4">
        <div className="view shadow  h-full w-full md:w-[65%]">
          <View />
        </div>
        <div className="selectionPart h-full w-full md:w-[30%] bg-white">
          <SelectionPart />
        </div>
      </div>
    </div>
  </div>;
}

export default ProductBuild;
