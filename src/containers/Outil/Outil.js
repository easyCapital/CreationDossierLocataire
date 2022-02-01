import { OutilWrapper } from "./Outil.style";
import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import HeaderOutil from "../../components/outil/HeaderOutil/HeaderOutil";
import BlocOutilGauche from "../../components/outil/BlocOutil/BlocOutilGauche";
import BlocOutilDroite from "../../components/outil/BlocOutil/BlocOutilDroite";
import Footer from "../../components/global/Footer/Footer";
import { Spin, Space, Button } from "antd";

export default function Outil() {
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
      <OutilWrapper>
        <HeaderOutil />
        <BlocOutilGauche
          title={<h2 className="title">Ajouter mon patrimoine</h2>}
          btn={"Ajouter mon patrimoine"}
          img={
            "https://res.cloudinary.com/easycapital/image/upload/v1625216870/espace_client/fbl1getnlsjy7buymnrh.png"
          }
        >
          Ajouter facilement toute votre situation famlial mais aussi vos <strong>biens 
          financiers</strong> et immobiliers. Notre outil gère tous les <strong>placements</strong> existants
          et tous les biens immobiliers. 
        </BlocOutilGauche>
        <BlocOutilDroite
          title={<h2 className="title">Suivre tout votre patrimoine</h2>}
          btn={"Suivre mon patrimoine"}
          img={
            "https://res.cloudinary.com/easycapital/image/upload/v1625216870/espace_client/fbl1getnlsjy7buymnrh.png"
          }
        >
          Suivez l'évolution de vos <strong>actifs immobiliers</strong> et financiers pour avoir 
          une vision globale et des projections futurs vous permettant d'agir.
          <strong> Optimisez votre patrimoine</strong>.
        </BlocOutilDroite>
        <BlocOutilGauche
          title={<h2 className="title">Simuler et décider en connaissance</h2>}
          btn={"Démarrer les simulations"}
          img={
            "https://res.cloudinary.com/easycapital/image/upload/v1625216870/espace_client/fbl1getnlsjy7buymnrh.png"
          }
        >
          Chaque jour, vos supports sont étudiés pour définir s'ils sont toujours
          <strong> adaptés, diversifiés et optimisés</strong>. Nous vous aidons aussi à simuler la
          <strong> rentabilité de vos futurs placements</strong>.
        </BlocOutilGauche>

        <div className="relation" >
          <div className="title">
            La relation client au coeur de l'outil d'aide à la décision !
          </div>
          <div className="content">
            Avoir une vision globale, c'est bien. Mais pouvoir en discuter avec
            un conseiller dédié, c'est encore mieux. Chez Easy Capital, nous
            pensons qu'il est important de vous donner accés à un outil
            permettant de mieux comprendre votre situation. Pour autant, nous
            pouvons vous accompagner dans vos futurs décisions afin que
            celles-ci soient les plus adaptées à vos attentes. 
          </div>
          <Button>Commencer à gérer avec un conseiller</Button>
        </div>
        <Footer />
      </OutilWrapper>
    );
}
