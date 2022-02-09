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
          <div className="text-left">
          <h1 className="title">
          Lorem ipsum dolor sit amet
            </h1>
          </div>
          <div className="gauche">
            
          <h1 className="title"></h1>
            <h2 className="subtitle">
            </h2> 
            <div className="form">{children}</div>
          </div>
        </div>
      </TenantWrapper>
    );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
