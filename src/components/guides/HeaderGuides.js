import { HeaderGuidesWrapper } from "./HeaderGuides.style";
import "aos/dist/aos.css";

import { Button } from "antd";

export default function HeaderGuides() {
  return (
    <HeaderGuidesWrapper>
      <div className="gauche">
        <div className="date">23 Juillet 2021</div>
        <div className="title">
          Les investissements en groupement forestier passe de 18% à 25% de
          réduction d'impôts.
        </div>
        <div className="author"> <br /> Par XX XX ~ XX XX</div>
        <Button className="btn">Lire l'article</Button>
      </div>
      <img src="https://res.cloudinary.com/easycapital/image/upload/v1625216870/espace_client/fbl1getnlsjy7buymnrh.png" className="img"/>
    </HeaderGuidesWrapper>
  );
}
