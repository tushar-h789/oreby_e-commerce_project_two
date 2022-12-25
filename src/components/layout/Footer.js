import Container from "./Container";
import React from "react";
import Flex from "./Flex";
import List from "./List";
import Listitem from "./Listitem";
import Image from "./Image";

const Footer = () => {
  return (
    <div className="md:mt-36 bg-[#F5F5F3] md:py-14">
      <Container>
        <Flex className="flex-wrap md:flex flex">
          <div className="  md:w-[15%] w-[30%]">
            <h4 className="md:mb-4 font-dm text-base font-bold">MENU</h4>
            <List>
              <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                listname="Home"
                href="#"
              />
              <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                listname="Shop"
                href="#"
              />
              <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                listname="About"
                href="#"
              />
              <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                listname="Contact"
                href="#"
              />
              <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                listname="Journal1"
                href="#"
              />
            </List>
          </div>
          <div className=" md:w-[15%] w-[30%]">
            <h4 className="mb-4 font-dm text-base font-bold">SHOP</h4>
            <List>
              <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                listname="Category 1"
                href="#"
              />
              <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                listname="Category 2"
                href="#"
              />
              <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                listname="Category 3"
                href="#"
              />
              <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                listname="Category 4"
                href="#"
              />
              <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                listname="Category 5"
                href="#"
              />
            </List>
          </div>
          <div className=" md:w-[15%] ">
            <h4 className="mb-4 font-dm text-base font-bold">HELP</h4>
            <List>
              <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                listname="Privacy Policy"
                href="#"
              />
              <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                listname="Terms & Conditions"
                href="#"
              />
              <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                listname="Special E-shop"
                href="#"
              />
              <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                listname="Shipping"
                href="#"
              />
              <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                listname="Secure Payments"
                href="#"
              />
            </List>
          </div>
          <div className="flex  md:w-[30%] justify-center w-[50%]">
            <div className="mt-14 ">
              <h4 className="mb-4 font-dm text-base font-bold">
                (052) 611-5711 <br /> company@domain.com
              </h4>
              <p className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]">
                575 Crescent Ave. Quakertown, PA 18951
              </p>
            </div>
          </div>
          <div className=" md:w-[25%] mt-14 w-[50%]">
            <Image imgsrc="assets/logo.png" />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Footer;
