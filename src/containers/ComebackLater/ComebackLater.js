import { ComebackLaterWrapper } from "./ComebackLater.style";
import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Spin, Space, Button,Input } from "antd";



import { useMediaQuery } from "react-responsive";

export default function Outil() {
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    return isDesktop ? children : null;
  };
  const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
    return isTablet ? children : null;
  };
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
  };
  const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 });
    return isNotMobile ? children : null;
  };

  const [showImage, setShowImage] = useState(false);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1500 });
    setLoaded(true);
    console.log("loaded");
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
      <ComebackLaterWrapper>
        <div className="titre"><span id="manque">Vous devez déjà partir :( ? </span><br /> <br />Pas de soucis, nous sauvegardons vos réponses et nous vous envoyons par email le lien pour reprendre le questionnaire.</div>
        <Input placeholder="exemple@exemple.com" />
        <Button>Revenir plus tard</Button>
      </ComebackLaterWrapper>
    );
}
