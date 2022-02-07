import { TenantWrapper } from "./Tenant.style";
import { useState, useEffect } from "react";
import "aos/dist/aos.css";
import { Form, Input, Button, Checkbox, Spin, Space } from "antd";
import { useSession, getProviders } from "next-auth/client";
import { useRouter } from "next/router";
import "react-inputs-validation/lib/react-inputs-validation.min.css";

export default function TenantContainer({ children }) {
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
      <TenantWrapper>
        <div className="signIn">
          <div className="gauche">
            <h1 className="title">
            Créez votre dossier locataire,
            </h1>
            <h2 className="subtitle">
              Améliorez votre présentation auprès des propriétaires 
            </h2>
            <div className="form">{children}</div>
          </div>
        </div>
        <div className="cercleBack" id="c2" />
      </TenantWrapper>
    );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
