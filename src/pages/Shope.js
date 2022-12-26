import Container from "../components/layout/Container";
import React, { useState } from "react";
import Breadcrumb from "../components/layout/Breadcrumb";
import Flex from "../components/layout/Flex";
import Pagination from "../components/layout/Pagination";
import ShotBy from "../components/layout/ShotBy";

const Shope = () => {
  let [showNumber, setShowNumber] = useState(12);

  let handlePageinationChange = (e) => {
    setShowNumber(+e.target.value);
  };

  return (
    <Container>
      <Breadcrumb title="product" />
      <Flex className="flex gap-x-10">
        <div className="w-[25%] bg-red-500">afdsa</div>
        <div className="relative w-[75%] ">
          <label
            for="countries"
            class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Select an option
          </label>
          <div className="sm:flex gap-x-10 mb-3.5">
            <ShotBy/>

            <div className="flex items-center gap-x-4 ">
              <span className="font-regular inline-block font-dm text-base text-[#767676]">
                {" "}
                Show:
              </span>
              <select
                onChange={handlePageinationChange}
                id="countries"
                class="focus:border-black-500 font-regular block md:w-[139px] border border-[#F0F0F0] bg-gray-50 p-2.5 font-dm text-sm text-base text-[#767676]"
              >
                <option
                  selected
                  value="12"
                  className="font-regular font-dm text-base"
                >
                  12
                </option>
                <option value="24" className="font-regular font-dm text-base">
                  24
                </option>
                <option value="36" className="font-regular font-dm text-base">
                  36
                </option>
                <option value="48" className="font-regular font-dm text-base">
                  48
                </option>
              </select>
            </div>
          </div>

          <Pagination itemsPerPage={showNumber} />
        </div>
      </Flex>
    </Container>
  );
};

export default Shope;
