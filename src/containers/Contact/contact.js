import { ContactWrapper } from "./contact.style";
import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Spin, Space, Button, Input } from "antd";
import Footer from "../../components/global/Footer/Footer";
import { InlineWidget } from "react-calendly";

export default function Contact() {
  const [loaded, setLoaded] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showMail, setShowMail] = useState(false);
  const [showTel, setShowTel] = useState(false);

  const { TextArea } = Input;

  useEffect(() => {
    Aos.init({ duration: 1500 });
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
      <ContactWrapper>
        <div className="titre">
          <p>Je prends rendez-vous avec un conseiller</p>
        </div>
        <div className="conseiller">

          <div className="droite">
          <InlineWidget url="https://calendly.com/easycapital1?primary_color=ffa400" />
          </div>
        </div>
        <div className="btnContact">
          <div className="caseMail">
            {!showMail ? (
              <Button
                className="mail"
                onClick={() => {
                  setShowMail(!showMail);
                }}
              >
                Je souhaite vous contacter par mail
              </Button>
            ) : (
              <p className="adresseMail">bcardinault@easycapital.fr</p>
            )}
          </div>
          <div className="caseTel">
            {!showTel ? (
              <Button
                className="tel"
                onClick={() => {
                  setShowTel(!showTel);
                }}
              >
                Je souhaite vous contacter par téléphone
              </Button>
            ) : (
              <p className="numero">06 01 73 09 58</p>
            )}
          </div>
          <Button
            className="fiche"
            onClick={() => {
              setShowContact(!showContact);
            }}
          >
            Je souhaite être recontacté
          </Button>
        </div>
        <div className="infoContact">
          {showContact === true && (
            <div className="ficheContact">
              <p>Veuillez entrez certaines informations</p>
              <Input placeholder="Nom"/>
              <Input placeholder="Prénom"/>
              <Input placeholder="Ville"/>
              <Input placeholder="Email" />
              <Input placeholder="Téléphone" />
              <TextArea placeholder="Corps du message"/>
              <Button>Contactez-moi</Button>

            </div>
          )}
        </div>
        <Footer />
      </ContactWrapper>
    );
}
