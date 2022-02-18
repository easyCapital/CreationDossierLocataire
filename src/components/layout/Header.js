import React, { useEffect } from "react";
import { LogoutAction } from "../../redux/actions/AuthActions";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import { HeaderWrapper } from "./Header.style";
import { Button } from "antd";

export default function Header(props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const authResponse = useSelector((state) => state.userAuth.authResponse);

  const logOut = () => {
    dispatch(LogoutAction());
    router.push("/signin");
  };

  const login = () => {
    router.push("/signin");
  };

  const token = localStorage.getItem("user-token");
  // console.log(token);

  useEffect(() => {
    if (authResponse !== "" && authResponse.success === true) {
      localStorage.removeItem("user-token");
    }
    
    return () => {};
  }, [authResponse]);
  return (
    <HeaderWrapper style={ {"backgroundColor":router.asPath == "/" && '#fff', "height":80}}>
      <div className="barre" >
        
        <div className="ubar">
          <div className="logoImage">
            <a href="/">
              <img
              style={{"marginTop":0}}
                src={"../../../passloc-logo.png"}
                className={"logoImage_start"}
                alt="logo Passloc"
                onClick={() => router.push("/")}
              />
            </a>
          </div>
          <div className="btn_login">
            <Button 
              style={{"marginTop":0}}
              onClick={() => router.push("/signin")}>Connexion</Button>
          </div>
        </div>
        {router.asPath != "/signin" &&
          router.asPath != "/signup" &&
          token !== null &&
          token !== "" && (
            <Button
              className="button"
              type="primary"
              type="link"
              style={{
                borderBottom: router.asPath == "/conformite" ? "solid" : "none",
                borderColor:
                  router.asPath == "/conformite" ? "#4ca6e2" : "black",
                color: "black",
              }}
            >
              <Link href="/conformite">Ma conformité</Link>
            </Button>
          )}
      </div>
      {router.asPath != "/signin" &&
        router.asPath != "/signup" &&
        token !== null &&
        token !== "" && (
          <div className="push">
            {/* {token !== null && token !== "" ? ( */}
            <Button className="button" id="btn1" onClick={logOut}>
              Me déconnecter
            </Button>
            {/* ) 
          : (
            <Button className="button" id="btn1" onClick={login}>
              Me connecter
            </Button>
          )} */}
          </div>
        )}
    </HeaderWrapper>
  );
}
