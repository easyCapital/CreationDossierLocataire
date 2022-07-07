import React, { useState } from "react";
import { LogoutAction } from "../../redux/actions/AuthActions";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import { HeaderWrapper } from "./Header.style";
import { Button } from "antd";
import HttpService from "../../services/HttpService";
import { LoadProfileAction } from "../../redux/actions/ProfileActions";
import { useMediaQuery } from "react-responsive";
import MobileHeader from "./MobileHeader";

export default function Header() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [isCreatingFolder, setIsCreatingFolder] = useState(false);

  const logOut = () => {
    dispatch(LogoutAction());
    setTimeout(() => {
      dispatch(LoadProfileAction());
    }, 1000);
  };
  
  const createFolder = () => {
    setIsCreatingFolder(true);
    const http = new HttpService();
    let url = "folders";
    http
      .postData(null, url)
      .then((response) => {
        router.push("/folder/" + response.data.folder.slug);
        setIsCreatingFolder(false);
      })
      .catch((error) => {
        setIsCreatingFolder(false);
      });
  };

  const isLoggedIn = useSelector((state) => state.userDetails.userProfile.data);
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return isDesktop ? (
    <HeaderWrapper style={{ backgroundColor: router.asPath == "/" && "#fff" }}>
      <div className="left">
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
        {isLoggedIn && (
          <Button className="simple">
            <Link href="/mes-dossiers">Mes dossiers</Link>
          </Button>
        )}
      </div>
      {router.asPath != "/signin" && router.asPath != "/signup" && isLoggedIn && (
        <div className="right">
          <Button
            className="simple"
            onClick={createFolder}
            loading={isCreatingFolder}
          >
            Créer un dossier
          </Button>
          <Button className="simple" onClick={logOut}>
            Me déconnecter
          </Button>
        </div>
      )}
      {!isLoggedIn && (
        <Button
          className="btn btn-primary"
          onClick={() => router.push("/signin")}
        >
          Connexion
        </Button>
      )}
    </HeaderWrapper>
  ) : (
    <MobileHeader isLoggedIn={isLoggedIn} createFolder={createFolder} logOut={logOut}/>
  );
}
