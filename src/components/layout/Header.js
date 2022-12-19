import Container from "./Container";
import React, { useEffect, useRef, useState } from "react";
import Flex from "./Flex";
import Dropdown from "./Dropdown";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import {FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import {RxTriangleDown} from "react-icons/rx"
import {ImCross} from "react-icons/im"
import List from "./List";
import Listitem from "./Listitem";
import Search from "./Search";
import Image from "./Image"
import { Link } from "react-router-dom";

function Header() {
  let [categoryDropDownShow, setCategoryDropDownShow] = useState(false);
  let [userDropDownShow, setUserDropDownShow] = useState(false);
  let [cartDropDownShow, setCartDropDownShow] = useState(false);
  let categoryRef = useRef();
  let userRef = useRef();
  let cartRef = useRef();

  /*
  let handelDropdown = () => {
    setShow(!show);
  };
  */

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (categoryRef.current.contains(e.target)) {
        setCategoryDropDownShow(true);
      } else {
        setCategoryDropDownShow(false);
      }

      if (userRef.current.contains(e.target)) {
        setUserDropDownShow(true);
      } else {
        setUserDropDownShow(false);
      }

      if (cartRef.current.contains(e.target)) {
        setCartDropDownShow(true);
      } else {
        setCartDropDownShow(false);
      }
    });
  }, []);

  return (
    <div className="bg-[#F5F5F3] py-6">
      <Container>
        <Flex className="flex justify-between">
          <div className="flex items-center">
          <Dropdown
            className="relative z-50"
            /*onClick={handelDropdown}*/ dropref={categoryRef}
          >
            <p className="flex items-center gap-x-2.5 font-dm font-regular text-sm">
              <RiBarChartHorizontalLine /> <span className="hidden lg:inline-block">Shop by Category</span>
            </p>
            {categoryDropDownShow && (
              <List className="absolute font-dm font-regular text-sm top-8 w-[263px] bg-primary text-[#767676]  ">
                <Listitem
                  className="py-4 px-5 hover:px-7  hover: font-bold  duration-100 ease-in-out border-b border-solid border-[#2D2D2D] hover:text-white"
                  listname="Accesories"
                />
                <Listitem
                  className="py-4 px-5  hover: font-bold hover:px-7  duration-100 ease-in-out py-4 px-5 border-b border-solid border-[#2D2D2D] hover:text-white"
                  listname="Furniture"
                />
                <Listitem
                  className="py-4 px-5  hover: font-bold hover:px-7  duration-100 ease-in-out py-4 px-5 border-b border-solid border-[#2D2D2D] hover:text-white"
                  listname="Electronics"
                />
                <Listitem
                  className="py-4 px-5  hover: font-bold hover:px-7  duration-100 ease-in-out py-4 px-5 border-b border-solid border-[#2D2D2D] hover:text-white"
                  listname="Clothes"
                />
                <Listitem
                  className="py-4 px-5  hover: font-bold hover:px-7  duration-100 ease-in-out py-4 px-5 border-b border-solid border-[#2D2D2D] hover:text-white"
                  listname="Bags"
                />
                <Listitem
                  className="py-4 px-5  hover: font-bold hover:px-7  duration-100 ease-in-out border-b border-solid border-[#2D2D2D] hover:text-white"
                  listname="Home appliances"
                />
              </List>
            )}
          </Dropdown >
          </div>
          <div className="lg:w-[601px] w-auto relative">
            <Search className="w-full font-dm font-regular text-sm py-4 px-5 placeholder:text-[#C4C4C4]" placeholder="Search Products " />
            <FaSearch className="absolute top-4 right-4 duration-100 ease-in-out" />
          </div>
          <div className="flex items-center">
            <Flex className="flex gap-x-10">
              <Dropdown className="relative z-50" dropref={userRef}>
              <div className="flex items-center">
              <FaUser/>
              <RxTriangleDown/>
              </div>
              {userDropDownShow && (
              <List className="absolute font-dm font-regular text-sm text-center top-8 right-0 w-[200px] bg-white text-primary  ">
                <Listitem
                  className="py-4 px-5   hover: font-bold  duration-100 ease-in-out border-b border-solid border-[#F0F0F0] hover:text-white hover:bg-primary"
                  listname="My Account"
                />
                <Listitem
                  className="py-4 px-5  hover: font-bold duration-100 ease-in-out py-4 px-5 border-b border-solid border-[#F0F0F0] hover:text-white hover:bg-primary"
                  listname="Log Out"
                />
                
              </List>
            )}
              </Dropdown>
              
              <div className="">
                <Dropdown className="relative z-50" dropref={cartRef}>
                <FaShoppingCart className="text-xl"/>
              
              {cartDropDownShow && (
              <div className="absolute top-8 right-0 w-[360px] border border-solid border-[#F0F0F0] ">
                <div className="bg-[#F5F5F3] p-5">
                <Flex className="flex justify-between">
                <div>
                <Image imgsrc="assets/cartimage.png" />
                </div>
                <div className="flex flex-col justify-center pl-5">
                  <h3 className="font-dm font-bold text-sm text-primary pb-3">Black Smart Watch</h3>
                  <p className="font-dm font-bold text-sm text-primary">$44.00</p>
                </div>
                <div className="flex justify-end items-center">
                  <ImCross className="text-sm"/>
                </div>
                </Flex>
              </div>
              <div className="bg-white p-5">
                <h4 className="font-dm font-regular text-base text-[#767676]">Subtotal: <span className="text-primary font-bold">$44.00</span></h4>
                <Link to="#" className="font-dm font-bold text-sm border border-solid border-primary py-4 px-10 inline-block mt-3 hover:text-white hover:bg-primary ease-in-out duration-300">View Cart</Link>
                <Link to="#" className="font-dm font-bold text-sm border border-solid border-primary hover:text-white hover:bg-primary text-primary ease-in-out duration-300 py-4 px-10 inline-block mt-3 ml-5">Checkout</Link>
              </div>
              </div>
            )}
              </Dropdown>
              </div>
            </Flex>
          </div>
        </Flex>
      </Container>
    </div>
  );
}

export default Header;
