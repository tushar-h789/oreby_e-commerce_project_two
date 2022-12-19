import React from "react";
import Flex from "./Flex";
import Image from "./Image";
import List from "./List";
import Listitem from "./Listitem";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import Container from "./Container";

function Navbar() {
  //ekhane useState er maddhume 3dot menu ta ke responsiv korechi.
  let [show, setShow] = useState(true);

  //ekhane useEffect er maddhome website ta ke responsiv korechi.
  useEffect(() => {
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
    <nav className="py-8">
      {/* //first a Flex, Image, List, ListItem এইগুলো প্রতিটা একটা করে component
      বানিয়ে নিয়েছি। তারপর component গুলো এখানে এসে html tag এর মত ব্যাবহার
      করেছি. */}
      <Container>
        <Flex className="lg:flex">
          <div className="lg:w-3/12 	">
            <Image imgsrc="assets/logo.png" />
          </div>
          <div className="w-9/12	">
            <FaBars
              onClick={() => setShow(!show)}
              className="block lg:hidden ml-auto absolute
              top-2.5
              right-2.5"
            />

            {show && (
              <List className="lg:flex lg:justify-end lg:gap-x-10 mt-5 lg:mt-0 ">
                <Listitem
                  className="font-dm text-sm font-bold hover:font-bold my-2.5 lg:my-0"
                  listname="Home"
                />
                <Listitem
                  className="font-dm text-sm font-regular hover:font-bold my-2.5 lg:my-0"
                  listname="Shop"
                />
                <Listitem
                  className="font-dm text-sm font-regular hover:font-bold my-2.5 lg:my-0"
                  listname="About"
                />
                <Listitem
                  className="font-dm text-sm font-regular hover:font-bold my-2.5 lg:my-0"
                  listname="Contacts"
                />
                <Listitem
                  className="font-dm text-sm font-regular hover:font-bold my-2.5 lg:my-0"
                  listname="Journal"
                />
              </List>
            )}
          </div>
        </Flex>
      </Container>
    </nav>
  );
}

export default Navbar;
