import Container from "../components/layout/Container";
import React, { useState, useEffect, useRef } from "react";
import Breadcrumb from "../components/layout/Breadcrumb";
import Flex from "../components/layout/Flex";
import Pagination from "../components/layout/Pagination";
import ShotBy from "../components/layout/ShotBy";
import LeftSidebar from "../components/layout/LeftSidebar";
import { BsFilterCircleFill } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";

const Shope = () => {
  let [showNumber, setShowNumber] = useState(12);
  let [show, setShow] = useState(false);
  let categoryRef = useRef();

  let handlePageinationChange = (e) => {
    setShowNumber(+e.target.value);
  };

  useEffect(() => {
    // aeta te kaj hocchena. aeta holo cross button a click na kore screen er onno kothao click korleo popup ta cole jabe.
    // document.body.addEventListener("click", (e)=>{
    //   console.log(categoryRef.current)
    //   if (categoryRef.current.contains(e.target)) {
    //     setShow(true);
    //   } else {
    //     setShow(false);
    //   }
    // })

    function scrollWidth() {
      // console.log();
      if (window.innerWidth < 1024) {
        // console.log("ami responsiv");
        setShow(false);
      } else {
        setShow(true);
      }
    }
    scrollWidth();
    window.addEventListener("resize", scrollWidth); //resize er moddhome page ta responsiv hocche.
  }, []);

  return (
    <Container>
      <Breadcrumb title="product" />
      <Flex className="flex gap-x-10">
        {show && (
          <div className="absolute top-0 left-0 z-50 w-full bg-[#f0e9e9] p-6 sm:static sm:w-[25%] sm:bg-transparent">
            <AiFillCloseCircle
              className="block md:hidden text-2xl"
              onClick={() => setShow(!show)}
            />
            <LeftSidebar />
          </div>
        )}

        <div className="relative w-full  md:w-[75%]">
          <div className="mb-3.5 flex gap-x-5 sm:flex sm:gap-x-10">
            <div className="mb-6 flex items-end">
              <BsFilterCircleFill
                onClick={() => setShow(!show)}
                className="inline-block text-2xl text-[#767676] md:hidden"
              />
            </div>

            <div>
              <ShotBy />
            </div>

            <div className="mb-4 flex items-center gap-x-2 sm:gap-x-4 ">
              <span className="font-regular inline-block font-dm text-base text-[#767676]">
                {" "}
                Show:
              </span>
              <select
                onChange={handlePageinationChange}
                id="countries"
                class="focus:border-black-500 font-regular block border border-[#F0F0F0] bg-gray-50 p-2.5 font-dm text-sm text-base text-[#767676] md:w-[139px]"
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
