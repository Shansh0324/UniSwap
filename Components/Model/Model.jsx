import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Style from "./Model.module.css";
import images from "../../assets";

const Model = ({ setOpenModel, connectWallet }) => {
  // USE STATE
  const walletMenu = ["MetaMask", "Coinbase", "Wallet", "WalletConnect"];
  return (
    <div className={Style.Model}>
      <div className={Style.Model_box}>
        <div className={Style.Model_box_heading}>
          <p>Connect a Wallet</p>
          <div className={Style.Model_box_heading_img}>
            <Image
              src={images.close}
              alt="logo"
              width={50}
              height={50}
              onClick={() => setOpenModel(false)}
            />
          </div>
        </div>
        <div className={Style.Model_box_wallet}>
          {walletMenu.map((eL, i) => (
            <p key={i + 1} onClick={() => connectWallet()}>
              {eL}
            </p>
          ))}
        </div>
        <p className={Style.Model_box_para}>
          By connecting a wallet, you agree to Uniswap Labs' <br /> Terms and
          consent to its Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default Model;
