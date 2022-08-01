import React from "react";

function Footer() {
  const dynamicDate = new Date();
  const year = dynamicDate.getFullYear();
  return (
    <div
      className="footer d__flex align__items__center justify__content__space__between pz-10"
      style={{ padding: "10px 20px", zIndex: "100" }}
    >
      
      <span
        className="copyright"
        style={{ color: "#fffff", fontSize: "14px", opacity: ".95" }}
      >
        Copyright ©{year}  Anik Kumar Das. All Rights Reserved.
      </span>
    </div>
  );
}

export default Footer;
