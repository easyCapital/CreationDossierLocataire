import { IndexWrapper } from "./Index.style";
import { useState, useEffect } from "react";
import "aos/dist/aos.css";
import { Form, Input, Button, Checkbox, Spin, Space, Divider } from "antd";
import { useSession, getProviders } from "next-auth/client";
import { useRouter } from "next/router";
import "react-inputs-validation/lib/react-inputs-validation.min.css";
import { QuestionOutlined, RightOutlined } from "@ant-design/icons";

export default function IndexContainer({ children }) {
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
      <IndexWrapper>
        <div className="upper">
          <h2>
            <strong>Créer votre dossier locataire</strong>
          </h2>
          <h2 className="seconds">
            <strong>rapidement</strong>
          </h2>
          <h3>
            Passloc vous permet de transmettre à n'importe quel propriétaire ou
            agence immobilière votre dossier de candidature propre et conforme.
          </h3>

          <div
            className="btns"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              className="home_btn"
              shape="round"
              type="primary"
              size={"large"}
              onClick={() => router.push('/help')}
            >
              Qui sommes nous <QuestionOutlined />
            </Button>
            <Button
              className="home_btn"
              shape="round"
              type="primary"
              icon={<RightOutlined />}
              size={"large"}
              onClick={() => router.push('/tenant')}
              >
              Commencer maintenant
            </Button>
          </div>
          <Divider />
          <div className="cert">
            <img src="../../../rgpd.png" width={250} height={150} alt="RGPD" />
          </div>
        </div>
      </IndexWrapper>
    );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
