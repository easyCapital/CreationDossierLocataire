import React, { useState, useEffect } from "react";
import Header from "../../layout/Header";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
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

    const didScrollPage = () => {
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

  if (!loaded) return <div></div>;
  else
    return (
      <div
        style={{
          ...navbarStyles,
          top: "0",
          transform: "translateZ('0px')",
        }}
      >
        <Header isTop={top} />
      </div>
    );
};

export default Navbar;
