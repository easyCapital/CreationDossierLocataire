import { IndexWrapper } from "./Index.style";
import { useState, useEffect } from "react";
import "aos/dist/aos.css";
import { Form, Input, Button, Checkbox, Spin, Space, Divider } from "antd";
import { useSession, getProviders } from "next-auth/client";
import { useRouter } from "next/router";
import "react-inputs-validation/lib/react-inputs-validation.min.css";
import { QuestionOutlined, RightOutlined } from "@ant-design/icons";
import Tenant from "../../components/Tenant/Tenant";
import { setCookies } from 'cookies-next';

export default function IndexContainer({ children }) {
  const [loaded, setLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setLoaded(true);
  }, []);

  function setMail(e){
    setCookies('mail', e)
  }

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
            <strong>Constituez votre dossier locataire</strong>
          </h2>
          <h2 className="seconds">
          <strong> Partagez le en toute sécurité</strong>
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
            <Input onChange={(e) => {setMail(e.target.value)}} placeholder="Votre mail" style={{'width':400, height:60, 'marginBottom':90}}/>
            <Button
              className="home_btn"
              shape="round"
              type="primary"
              icon={<RightOutlined />}
              size={"large"}
              onClick={() => {
                router.push('/tenant');
              }}
              >
              Commencer 
                
            </Button>
          </div>
          <Divider />
          <div className="cert">
            <img src="../../../rgpd.png" width={250} height={150} alt="RGPD"/>
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
