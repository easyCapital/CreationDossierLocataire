import { HeaderSecuriteWrapper } from "./HeaderSecurite.style";
import Link from "next/link";
import BlocOutilDroite from "../../components/outil/BlocOutil/BlocOutilDroite.js";
import BlocOutilGauche from "../../components/outil/BlocOutil/BlocOutilDroite.js";
import { GiPadlock } from "react-icons/gi";



export default function HeaderSecurite() {
  return (
    <HeaderSecuriteWrapper>
      <div className="wrap">
        <div className="gauche">
          <div className="cadre">
            <h1 className="title">
              La sécurité au coeur de notre technologie
            </h1>
            <p className="txt">
              Nous consacrons une part importante de notre temps à sécuriser
              nos outils.
            </p>
          </div>
        </div>
        <div className="droite">
          <GiPadlock />
        </div>
      </div>
      <img
        src="https://res.cloudinary.com/easycapital/image/upload/v1625733998/espace_client/wphgqxwon8wpwojidze6.png"
        className="maskhero"
      />
    </HeaderSecuriteWrapper>
  );
}
