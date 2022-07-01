import React, { useEffect, useState } from "react";
import { LogoutAction } from "../../redux/actions/AuthActions";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import { HeaderWrapper } from "./Header.style";
import { Button } from "antd";
import HttpService from "../../services/HttpService";

export default function Header(props) {
  const router = useRouter();
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(LogoutAction());
    router.push("/");
  };
  const createFolder = () => {
    const http = new HttpService();
    let url = "folders";
    http
      .postData(null, url)
      .then((data) => {
        router.push("/folder/" + data.data.folder.slug);
        return data;
      })
      .catch((error) => {
        return error;
      });
  };

  const [loggedIn, setLoggedIn] = useState(false);
  const state = useSelector((state) => state);
  useEffect(() => {
    setLoggedIn(state?.userDetails?.userProfile?.data != null);
  }, [state]);

  return (
    <HeaderWrapper
      style={{ backgroundColor: router.asPath == "/" && "#fff", height: 80 }}
    >
      <div className="barre">
        <div className="ubar">
          <div className="logoImage">
            <Link href="/">
              <img
                style={{ marginTop: 0 }}
                src={"../../../passloc-logo.png"}
                className={"logoImage_start"}
                alt="logo Passloc"
                onClick={() => router.push("/")}
              />
            </Link>
          </div>
          <div className="btn_login">
            {!loggedIn && (
              <Button
                style={{ marginTop: 0 }}
                onClick={() => router.push("/signin")}
              >
                Connexion
              </Button>
            )}
          </div>
        </div>
      </div>
      {router.asPath != "/signin" && router.asPath != "/signup" && loggedIn && (
        <div className="push">
          {/* {token !== null && token !== "" ? ( */}
          <Button className="button" id="btn1" onClick={createFolder}>
            Créer un dossier
          </Button>
          <Button
            style={{ marginLeft: 50 }}
            className="button"
            id="btn1"
            onClick={logOut}
          >
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
