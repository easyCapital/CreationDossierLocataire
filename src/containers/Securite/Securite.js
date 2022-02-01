import { SecuriteWrapper } from "./Securite.style";
import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Spin, Space, Button } from "antd";
import HeaderSecurite from "../../components/securite/HeaderSecurite";
import { AiOutlineCheck, AiOutlineStop } from "react-icons/ai";
import Footer from "../../components/global/Footer/Footer";
import BlocOutilDroite from "../../components/outil/BlocOutil/BlocOutilDroite.js";
import BlocOutilGauche from "../../components/outil/BlocOutil/BlocOutilGauche.js";

export default function Securite() {
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
      <SecuriteWrapper>
        <HeaderSecurite />
        
        <BlocOutilDroite
          title={<h2 className="title">Protéger vos intérêts</h2>}
          btn="Commencer maintenant"
          img="https://res.cloudinary.com/easycapital/image/upload/v1626096378/espace_client/lq9kuuycmy4accqr2wku.jpg"
        >
          Les besoins de nos utilisateurs sont au centre de nos préoccupations.
          Nous ne vendons pas vos données. <br />
          <br />
          Nous sommes indépendants des banques, promoteurs ou assureurs et cela
          nous permet de vous conseiller sans conflit d'intérêt.
        </BlocOutilDroite>
        <BlocOutilGauche
          title={<h2 className="title">Données chiffrées</h2>}
          btn="Je simule mes investissements"
          img="https://res.cloudinary.com/easycapital/image/upload/v1626188417/espace_client/hokwvjs6yyncqa2l0gma.png"
        >
          Vos données sont stockées sur des disques chiffrés. Nous utilisons les
          algorithmes de chiffrement (encryption) les plus robustes du marché.
          Rien n'est stocké sur votre téléphone / PC et l'accès à votre espace
          Easy Capital est protégé par une double authentification.
        </BlocOutilGauche>
        <h3 className="title">Réponses aux questions courantes</h3>
        <div className="reponses">
          <div className="gauche">
            <h2 className="question">Etes-vous inscrit à la CNIL?</h2>
            <p className="txt">
              Oui. Les traitements informatiques réalisés sont déclarés à la CNIL sous le numéro A. 
              Nous respectons strictement les obligations de la CNIL sur la propriété et la confidentialité des informations.
            </p>
            <br />
            <h2 className="question">Puis-je réaliser des virements depuis Easy Capital?</h2>
            <p className="txt">
              Non, Easy Capital permet uniquement de visualiser les données que vous aurez saisi ou agréger et de restituer
             des conseils  sur de potentiels nouveaux investissements.
            </p>
          </div>
          <div className="droite">
            <h2 className="question">Est-ce que toute la famille voit tous les comptes ?</h2>
            <p className="txt">
              Non, chaque personne ne peut consulter que les comptes et actifs dans lequel il a une part de propriété.
            </p>
            <br />
            <h2 className="question">Que faites-vous des mes données?</h2>
            <p className="txt">
              Rien sans votre accord. En qualité de courtier, nous pouvons être amené à consulter des partenaires pour trouver les solutions
              adaptées et moins onéreuses mais c'est vous qui décidez lorsque nous réalisons cette démarche et vous savez auprès de qui, à tout instant.
            </p>
          </div>
        </div>
        <div className="jobs">
          <div className="title">Vous souhaitez en savoir plus sur nous ?</div>

          <Button className="btn">Découvrir notre approche ISR</Button>
        </div>
        <Footer />
      </SecuriteWrapper>
    );
}
