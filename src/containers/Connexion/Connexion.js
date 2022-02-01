import { ConnexionWrapper } from "./Connexion.style";
import { useState, useEffect } from "react";
import "aos/dist/aos.css";
import { Form, Input, Button, Checkbox, Spin, Space } from "antd";
import { useSession, getProviders } from "next-auth/client";
import { useRouter } from "next/router";
import "react-inputs-validation/lib/react-inputs-validation.min.css";

export default function Connexion({ children }) {
  const [loaded, setLoaded] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
              {router.pathname == "/signin" ? "Connectez" : "Inscrivez"}{" "}
              vous à Easy Capital
            </h2>
            <div className="form">{children}</div>
          </div>
          <div className="droite">
            <div className="hello">Bonjour !</div>
            <div className="t1" />
            <div className="cercle" />
            <div className="t2" />
          </div>
        </div>
        <div className="cercleBack" id="c2" />
      </ConnexionWrapper>
    );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
