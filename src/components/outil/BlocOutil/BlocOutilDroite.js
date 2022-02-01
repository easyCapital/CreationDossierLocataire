import { BlocOutilWrapper } from "./BlocOutilDroite.style";
import "aos/dist/aos.css";

import { Button } from "antd";

export default function BlocOutilDroite({ title, btn, img, children }) {
  return (
    <BlocOutilWrapper>

      <div className="droite" data-aos="fade-up">
        
        {title}
        <div className="content">{children}</div>
        <div className="btn">
          <Button>{btn}</Button>
        </div>
      </div>
      <div className="gauche" data-aos="fade-up">
        <img src={img} />
      </div>
    </BlocOutilWrapper>
  );
}
