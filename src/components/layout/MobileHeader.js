import { HeaderWrapper } from "./Header.style";
import { NavBar } from "antd-mobile";
import { Button, Drawer } from "antd";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { CreateFolder } from "../../services/FolderService";

export default function MobileHeader({ isLoggedIn, logOut }) {
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    console.log(visible);
    setVisible(false);
  };

  return (
    <HeaderWrapper>
      <NavBar
        leftContent={[
          <Link href="/" key="link">
            <img
              style={{ marginTop: 0 }}
              src={"../../../passloc-logo.png"}
              className={"logoImage_start"}
              alt="logo Passloc"
              onClick={() => router.push("/")}
            />
          </Link>,
        ]}
      >
        <FontAwesomeIcon
          icon={faBars}
          className="iconMenu"
          onClick={showDrawer}
        />
      </NavBar>
      <Drawer
        placement="left"
        onClose={onClose}
        visible={visible}
        className="my-drawer"
        closable={false}
      >
        <div className="top">
          <Link href="/">
            <img
              className="logoImage"
              src="../../../passloc-logo.png"
              alt="logo EasyCapital"
            />
          </Link>
          {isLoggedIn && (
            <Button onClick={onClose} type="link">
              <Link href="/mes-dossiers">Mes dossiers</Link>
            </Button>
          )}
          {isLoggedIn && (
            <Button
              onClick={() => {
                onClose();
                CreateFolder();
              }}
              type="link"
            >
              Créer un dossier
            </Button>
          )}
        </div>
        <div>
          {isLoggedIn ? (
            <FontAwesomeIcon
              icon={faPowerOff}
              onClick={() => {
                onClose();
                logOut();
              }}
            />
          ) : (
            <Button type="primary" onClick={onClose}>
              <Link href="/signin">Me connecter</Link>
            </Button>
          )}
        </div>
      </Drawer>
    </HeaderWrapper>
  );
}
