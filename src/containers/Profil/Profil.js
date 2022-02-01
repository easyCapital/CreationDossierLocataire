import { ProfilWrapper } from "./Profil.style";
import { useState, useEffect } from "react";
import "aos/dist/aos.css";
import { RiFacebookFill } from "react-icons/ri";
import { AiOutlineGooglePlus, AiFillLinkedin } from "react-icons/ai";
import { Form, Input, Button, Checkbox, Spin, Space } from "antd";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { signIn, useSession, getProviders } from "next-auth/client";
import { useRouter } from "next/router";
import jwtDecode from "jwt-decode";



export default function Profil({ providers }) {
  const [loaded, setLoaded] = useState(false);
  const [session, loading] = useSession();
  useEffect(() => {
    setLoaded(true);
  }, []);

  // var token = "eyJhbGciOiJIUzUxMiJ9.eyJuYW1lIjoiQW5hcyBRdWF6YmFyeSIsImVtYWlsIjoiYW5hcy5xdWF6YmFyeS5tcEBnbWFpbC5jb20iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUFUWEFKeGVIc09KLWNONG8xTTctTGRvSHNNNkZOZTdVbExkX1JvVmtLN0Y9czk2LWMiLCJzdWIiOiI2MTI2MWVmNjA0NzExYTYyYmMwZTRkNDYiLCJpYXQiOjE2MzAzOTcxMjMsImV4cCI6MTYzMjk4OTEyM30.4JHqcltBzzQTXMBeuTtgjOWU2UmWNN-Sxg8GeucxAtuYnPTFpSLgZJMtTj6lUDB2Soy4tv08eBH5fbPEYPqtgQ";
  // var decoded = jwtDecode(token);
  // console.log(decoded);
  console.log(session);


  if (!loaded)
    return (
      <div className="loading_spinner">
        <Space size="middle">
          <Spin size="large" className="loading_spinner" />
        </Space>
      </div>
    );
  if (!session)
    if (loading === false)
      return (
        <ProfilWrapper>
          <div className="denied">
            <h2 className="title">Accés refusé</h2>
            <h3 className="subTitle">Veuillez vous connecter</h3>
            <Button>
              <a href="/auth/signin">Se connecter</a>
            </Button>
          </div>
        </ProfilWrapper>
      );
    else return <></>;
  else
    return (
      <ProfilWrapper>
        <div className="connected">
          <div className="ligne">
            <img src={session.user.image} />
            <div className="name">{session.user.name}</div>
          </div>
          <div className="email">email : {session.user.email}</div>
        </div>
      </ProfilWrapper>
    );
}


