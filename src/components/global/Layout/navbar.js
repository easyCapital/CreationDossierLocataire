import React, { useState, useEffect } from "react";
import { debounce } from "./helpers";
import Header from "../../layout/Header";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  }, 100);

  const navbarStyles = {
    position: "fixed",
    height: "73.89px",
    width: "100%",
    backgroundColor: "white",
    textAlign: "center",
    transition: "all 250ms ease-in 0s",
    zIndex: "1000",
  };

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const [top, setTop] = React.useState(1);
  React.useEffect(() => {
    const headerHeight = 400;
    const range = 200;
    const offset = headerHeight / 2;

    const didScrollPage = (e) => {
      let calc = 1 - (window.scrollY - offset + range) / range;

      if (calc > 1) {
        calc = 1;
      } else if (calc < 0) {
        calc = 0;
      }

      setTop(calc);
    };

    window.addEventListener("scroll", didScrollPage);

    return () => {
      window.removeEventListener("keydown", didScrollPage);
    };
  }, []);
  var color = "white";
  switch (router.asPath) {
    case "/":
      color = "#F5F5F9";
      break;
    case "/outil":
      color = "#F5F5F9";
      break;
    case "/nous":
      color = "white";
      break;
    case "/securite":
      color = "#142A3F";
      break;
    case "/tarifs":
      color = "#4CA6E2";
      break;
    case "/guides":
      color = "#F7F9FA";
      break;
    case "/folder":
      color = "#fff";
      break;
  }

  if (!loaded) return <div></div>;
  else
    return (
      <div
        style={{
          ...navbarStyles,
          top: visible ? "0" : "-60px",
          // background: top === 1 ? color : "white",
          // backgroundColor : (top===1 && router.asPath === "/nous") ? "transparent" : color,
          transform: "translateZ('0px')",
        }}
      >
        <Header isTop={top} />
      </div>
    );
};

export default Navbar;
