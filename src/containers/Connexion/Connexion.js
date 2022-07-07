import { ConnexionWrapper } from "./Connexion.style";
import { useState, useEffect } from "react";
import { Spin, Space } from "antd";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudSun } from "@fortawesome/free-solid-svg-icons";

export default function Connexion({ children, isDesktop }) {
  const [loaded, setLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded)
    return (
      <div className="loading_spinner">
        <Space size="middle">
          <Spin size="large" className="loading_spinner" />
        </Space>
      </div>
    );
  else
    return (
      <ConnexionWrapper>
        <div className="signIn">
          <div className="gauche">
            <h2 className="title">
              {router.pathname == "/signin"
                ? "Connectez-vous"
                : "Inscrivez-vous"}
              {isDesktop ? " " : <br />}
              sur PassLoc
            </h2>
            <div className="form">{children}</div>
          </div>
          {isDesktop && (
            <div className="droite">
              <div className="hello">
                <FontAwesomeIcon icon={faCloudSun} /> Bonjour !
              </div>
              <div className="t1" />
              <div className="cercle" />
              <div className="t2" />
            </div>
          )}
        </div>
        {isDesktop && <div className="cercleBack" id="c2" />}
      </ConnexionWrapper>
    );
}
