import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import Style from "./NavBar.module.css";
import images from "../../assets";
import { Model, TokenList } from "../index";

const NavBar = () => {
  const menuItems = [
    { name: "Swap", link: "/" },
    { name: "Token", link: "/token" },
    { name: "Pools", link: "/pools" },
  ];

  const [openModel, setOpenModel] = useState(false);
  const [openTokenBox, setOpenTokenBox] = useState(false);

  return (
    <div className={Style.NavBar}>
      <div className={Style.NavBar_box}>
        <div className={Style.NavBar_box_left}>
          <div className={Style.NavBar_box_left_img}>
            <Image src={images.uniswap} alt="logo" width={50} height={50} />
          </div>
          <div className={Style.NavBar_box_left_menu}>
            {menuItems.map((eL, i) => (
              <Link
                key={i + 1}
                href={{
                  pathname: `${eL.name}`,
                  query: `${eL.link}`,
                }}
                style={{ textDecoration: "none" }}
              >
                <p className={Style.NavBar_box_left_menu_item}>{eL.name}</p>
              </Link>
            ))}
          </div>
        </div>
        {/* MIDDLE SECTION */}
        <div className={Style.NavBar_box_middle}>
          <div className={Style.NavBar_box_middle_serach}>
            <div className={Style.NavBar_box_middle_serach_img}>
              <Image src={images.search} alt="serach" width={20} height={20} />
            </div>
            {/* INPUT SECTION */}
            <input type="text" placeholder="Search Tokens" />
          </div>
        </div>
        {/* RIGHT SECTION */}
        <div className={Style.NavBar_box_right}>
          <div className={Style.NavBar_box_right_box}>
            <div className={Style.NavBar_box_right_box_img}>
              <Image src={images.ether} alt=" Network" height={30} width={30} />
            </div>
            <p>Network Name</p>
          </div>
          <button onClick={() => setOpenModel(true)}>Address</button>

          {openModel && (
            <Model setOpenModel={setOpenModel} connectWallet="Connect Wallet" />
          )}
        </div>
      </div>
      {/* TOKENLIST COMPONENT */}
      {openTokenBox && (
        <TokenList tokenDate="hey" setOpenTokenBox={setOpenTokenBox} />
      )}
    </div>
  );
};

export default NavBar;
