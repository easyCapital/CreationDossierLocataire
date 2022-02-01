import { HeaderWrapper } from "./Header.style.js";
import React from "react";
import { Layout } from "antd";
import { Button } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { HiDesktopComputer, HiInformationCircle } from "react-icons/hi";
import { useMediaQuery } from "react-responsive";
import { Menu} from "antd";
import { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { NavBar, Drawer, List, Icon } from "antd-mobile";



import { signIn, signOut, useSession } from "next-auth/client";

const AntdHeader = Layout.Header;

export default function Header() {
  const [session, setSession]=useState(false);
  const loading=false;

  // const [session, loading] = useSession();
  useEffect(() => {}, [session]);

  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 800 });
    return isDesktop ? children : null;
  };
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 800 });
    return isMobile ? children : null;
  };

  const router = useRouter();

  const { SubMenu } = Menu;
  const rootSubmenuKeys = ["sub1", "sub2", "sub4"];
  const [openKeys, setOpenKeys] = React.useState(["sub1"]);

  const [open, setOpen] = useState(false);
  function onOpenChange(...args) {
    setOpen(!open);
  }



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

  const sidebar = (
    <List>
      <List.Item>
        <Button
          className="button"
          type="primary"
          type="link"
          style={{
            borderBottom: router.asPath == "/outil" ? "solid" : "none",
            borderColor: router.asPath == "/outil" ? "#4ca6e2" : "black",
          }}
          onClick={onOpenChange}
        >
          <Link href="/outil">Outil</Link>
        </Button>
      </List.Item>
      <List.Item>
        <Button
          className="button"
          type="primary"
          type="link"
          style={{
            borderBottom: router.asPath == "/nous" ? "solid" : "none",
            borderColor: router.asPath == "/nous" ? "#4ca6e2" : "black",
          }}
          onClick={onOpenChange}
        >
          <Link href="/nous">Nous</Link>
        </Button>
      </List.Item>
      <List.Item>
        <Button
          className="button"
          type="primary"
          type="link"
          style={{
            borderBottom: router.asPath == "/securite" ? "solid" : "none",
            borderColor: router.asPath == "/securite" ? "#4ca6e2" : "black",
          }}
          onClick={onOpenChange}
        >
          <Link href="/securite">Sécurité</Link>
        </Button>
      </List.Item>
      <List.Item>
        <Button
          className="button"
          type="primary"
          type="link"
          style={{
            borderBottom: router.asPath == "/tarifs" ? "solid" : "none",
            borderColor: router.asPath == "/tarifs" ? "#4ca6e2" : "black",
          }}
          onClick={onOpenChange}
        >
          <Link href="/tarifs">{!session ? "Tarifs" : "Mes abonnements"}</Link>
        </Button>
      </List.Item>
      <List.Item>
        <Button
          className="button"
          type="primary"
          type="link"
          style={{
            borderBottom: router.asPath == "/guides" ? "solid" : "none",
            borderColor: router.asPath == "/guides" ? "#4ca6e2" : "black",
          }}
          onClick={onOpenChange}
        >
          <Link href="/guides">Guides</Link>
        </Button>
      </List.Item>
      <div className="btnBottom">
        <List.Item className="btnBottom1">
          {!session && (
            <>
              <Button className="button" id="btn1">
                <Link href="/auth/signIn">Se connecter</Link>
              </Button>
            </>
          )}
          {session && (
            <>
              <Button className="button" onClick={() => signOut()} id="btn1">
                Se déconnecter
              </Button>
            </>
          )}
        </List.Item>
        {!session && (
          <List.Item className="btnBottom2">
            <Button className="button" type="Primary" id="btn2">
              <Link href="/start">Commencer gratuitement</Link>
            </Button>
          </List.Item>
        )}
      </div>
    </List>
  );

  if (router.asPath !== "/start" && !loading)
    return (
      <div>
        <Desktop>
          <HeaderWrapper>
            <div className="barre">
              <Link href="/">
                <div className="logoImage">
                  <img
                    src={
                      top === 1 &&
                      (router.asPath == "/tarifs" ||
                        router.asPath == "/securite" ||
                        router.asPath == "/nous")
                        ? "https://res.cloudinary.com/easycapital/image/upload/v1628087640/espace_client/ilz04rnndpl8w4kcfuyq.png"
                        : "../../../easycapital_logo.svg"
                    }
                    className={
                      top === 1 &&
                      (router.asPath == "/tarifs" ||
                        router.asPath == "/securite" ||
                        router.asPath == "/nous") ?
                      "logoImage_start" : ""
                    }
                    alt="logo EasyCapital"
                  />
                </div>
              </Link>
              {!session && (
                <Button
                  className="button"
                  type="primary"
                  type="link"
                  style={{
                    borderBottom:
                      router.asPath == "/outil" ? "solid" : "none",
                    borderColor:
                      router.asPath == "/outil" ? "#4ca6e2" : "black",
                    color:
                      top === 1 &&
                      (router.asPath === "/tarifs" ||
                        router.asPath === "/securite" ||
                        router.asPath === "/nous")
                        ? "white"
                        : "black",
                  }}
                >
                  <Link href="/outil">Outil</Link>
                </Button>
              )}
              {!session && (
                <Button
                  className="button"
                  type="primary"
                  type="link"
                  style={{
                    borderBottom:
                      router.asPath == "/nous" ? "solid" : "none",
                    borderColor:
                      router.asPath == "/nous" ? "#4ca6e2" : "black",
                    color:
                      top === 1 &&
                      (router.asPath == "/tarifs" ||
                        router.asPath == "/securite" ||
                        router.asPath == "/nous")
                        ? "white"
                        : "black",
                  }}
                >
                  <Link href="/nous">Nous</Link>
                </Button>
              )}
              {!session && (
                <Button
                  className="button"
                  type="primary"
                  type="link"
                  style={{
                    borderBottom:
                      router.asPath == "/securite" ? "solid" : "none",
                    borderColor:
                      router.asPath == "/securite" ? "#4ca6e2" : "black",
                    color:
                      top === 1 &&
                      (router.asPath == "/tarifs" ||
                        router.asPath == "/securite" ||
                        router.asPath == "/nous")
                        ? "white"
                        : "black",
                  }}
                >
                  <Link href="/securite">Sécurité</Link>
                </Button>
              )}
              <Button
                className="button"
                type="primary"
                type="link"
                style={{
                  borderBottom:
                    router.asPath == "/tarifs" ? "solid" : "none",
                  borderColor:
                    router.asPath == "/tarifs" ? "#4ca6e2" : "black",
                  color:
                    top === 1 &&
                    (router.asPath == "/tarifs" ||
                      router.asPath == "/securite" ||
                      router.asPath == "/nous")
                      ? "white"
                      : "black",
                }}
              >
                <Link href="/tarifs">{!session ? "Tarifs" : "Mes abonnements"}</Link>
              </Button>
              {!session && (
                <Button
                  className="button"
                  type="primary"
                  type="link"
                  style={{
                    borderBottom:
                      router.asPath == "/guides" ? "solid" : "none",
                    borderColor:
                      router.asPath == "/guides" ? "#4ca6e2" : "black",
                    color:
                      top === 1 &&
                      (router.asPath == "/tarifs" ||
                        router.asPath == "/securite" ||
                        router.asPath == "/nous")
                        ? "white"
                        : "black",
                  }}
                >
                  <Link href="/guides">Guides</Link>
                </Button>
              )}

              {session === true && (
                <Button
                  className="button"
                  type="primary"
                  type="link"
                  style={{
                    borderBottom:
                      router.asPath == "/espaceHomePage" ? "solid" : "none",
                    borderColor:
                      router.asPath == "/espaceHomePage" ? "#4ca6e2" : "black",
                    color:
                      top === 1 &&
                      (router.asPath == "/tarifs" ||
                        router.asPath == "/securite" ||
                        router.asPath == "/nous")
                        ? "white"
                        : "black",
                  }}
                >
                  <Link href="/espaceHomePage">Suivre mon patrimoine</Link>
                </Button>
              )}
              {session && (
                <Button
                  className="button"
                  type="primary"
                  type="link"
                  style={{
                    borderBottom:
                      router.asPath == "/mesBiens" ? "solid" : "none",
                    borderColor:
                      router.asPath == "/mesBiens" ? "#4ca6e2" : "black",
                    color:
                      top === 1 &&
                      (router.asPath == "/tarifs" ||
                        router.asPath == "/securite" ||
                        router.asPath == "/nous")
                        ? "white"
                        : "black",
                  }}
                >
                  <Link href="/mesBiens">Suivre mes biens gérés</Link>
                </Button>
              )}
              {session && (
                <Button
                  className="button"
                  type="primary"
                  type="link"
                  style={{
                    borderBottom:
                      router.asPath == "/conformite" ? "solid" : "none",
                    borderColor:
                      router.asPath == "/conformite" ? "#4ca6e2" : "black",
                    color:
                      top === 1 &&
                      (router.asPath == "/tarifs" ||
                        router.asPath == "/securite" ||
                        router.asPath == "/nous")
                        ? "white"
                        : "black",
                  }}
                >
                  <Link href="/conformite">
                    <>
                      Ma conformité
                      <div class="numberCircle">2</div>
                    </>
                  </Link>
                </Button>
              )}
              {session && (
                <Button
                  className="button"
                  type="primary"
                  type="link"
                  style={{
                    borderBottom:
                      router.asPath == "/optimisations" ? "solid" : "none",
                    borderColor:
                      router.asPath == "/optimisations" ? "#4ca6e2" : "black",
                    color:
                      top === 1 &&
                      (router.asPath == "/tarifs" ||
                        router.asPath == "/securite" ||
                        router.asPath == "/nous")
                        ? "white"
                        : "black",
                  }}
                >
                  <Link href="/optimisations">
                    <>Mes optimisations</>
                  </Link>
                </Button>
              )}
            </div>
            <div className="push">
              {!session && (
                <>
                  <Button
                    className="button"
                    id="btn1"
                    style={{
                      color:
                        top === 1 &&
                        (router.asPath == "/tarifs" ||
                          router.asPath == "/securite" ||
                          router.asPath == "/nous")
                          ? "white"
                          : "black",
                    }}
                  >
                    <Link href="/auth/signIn">Se connecter</Link>
                  </Button>
                  &nbsp; &nbsp; 
                  <Button
                    className="button"
                    id="btn1"
                    onClick={()=>{setSession(true)}}
                    style={{
                      color:
                        top === 1 &&
                        (router.asPath == "/tarifs" ||
                          router.asPath == "/securite" ||
                          router.asPath == "/nous")
                          ? "white"
                          : "black",
                    }}
                  >
                    Se connecter (provisoire)
                  </Button>
                  
                  
                </>
              )}
              {session && (
                <>
                  <Button className="profil">
                    <Link href="/profil">Profil</Link>
                  </Button>
                  {/* <Button
                    className="button"
                    id="btn1"
                    onClick={() => signOut()}
                    style={{
                      color:
                        top === 1 &&
                        (router.asPath == "/tarifs" ||
                          router.asPath == "/securite" ||
                          router.asPath == "/nous")
                          ? "white"
                          : "black",
                    }}
                  >
                    Se déconnecter
                  </Button> */}

                  <Button
                    className="button"
                    id="btn1"
                    onClick={()=>{setSession(false)}}
                    style={{
                      color:
                        top === 1 &&
                        (router.asPath == "/tarifs" ||
                          router.asPath == "/securite" ||
                          router.asPath == "/nous")
                          ? "white"
                          : "black",
                    }}
                  >
                    Se déconnecter
                  </Button>
                  {/* <img className="profilPic" src={session.user.image} /> */}
                </>
              )}
              {!session && (
                <Button
                  className="bleu"
                  type="Primary"
                  style={{
                    background:
                      top === 1 && router.asPath == "/tarifs"
                        ? "white"
                        : "#4ca6e2",
                    color:
                      top === 1 && router.asPath == "/tarifs"
                        ? "black"
                        : "white",
                  }}
                >
                  <Link href="/start">Commencer gratuitement</Link>
                </Button>
              )}
            </div>
          </HeaderWrapper>
        </Desktop>
        <Mobile>
          <HeaderWrapper>
            <div className="ligne">
              <div className="menu">
                <NavBar
                  leftContent={[
                    <Link href="/">
                      <div className="logoImage" onClick={() => setOpen(false)}>
                        <img src="../../../easycapital_logo.svg" alt="logo EasyCapital"/>
                      </div>
                    </Link>,
                  ]}
                >
                  <div className="iconMenu" onClick={onOpenChange}>
                    <AiOutlineMenu />
                  </div>
                </NavBar>
                <Drawer
                  className="my-drawer"
                  style={{
                    minHeight: document.documentElement.clientHeight,
                    display: open ? "normal" : "none",
                  }}
                  enableDragHandle
                  contentStyle={{
                    color: "#A6A6A6",
                    textAlign: "center",
                    paddingTop: 42,
                  }}
                  sidebar={sidebar}
                  open={open}
                  onOpenChange={onOpenChange}
                ></Drawer>
              </div>
            </div>
          </HeaderWrapper>
        </Mobile>
      </div>
    );
  else if (!loading && router.asPath === "/start")
    return (
      <HeaderWrapper style={{ background: "#4ca6e2" }}>
        <Link href="/">
          <img
            src="https://res.cloudinary.com/easycapital/image/upload/v1628087640/espace_client/ilz04rnndpl8w4kcfuyq.png"
            className="logoImage_start"
            alt="logo EasyCapital"
          />
        </Link>
        <Button className="revenir">
          <Link href="/comebacklater">
            <div className="ligne">
              <HiDesktopComputer />
              <span>Envoyer le lien pour revenir plus tard</span>
            </div>
          </Link>
        </Button>

        <Button className="besoin">
          <Link href="/contact">
          <div className="ligne">
            <HiInformationCircle />
            <span>Besoin d'aide ?</span>
          </div>
          </Link>
        </Button>
      </HeaderWrapper>
    );
  else return <></>;
}
