import { BlocOutilWrapper } from "./BlocOutilGauche.style";

import { Button } from "antd";
import { useMediaQuery } from "react-responsive";

export default function BlocOutilGauche({ title, btn, img, children }) {
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
  return (
    <BlocOutilWrapper>
      <Desktop>
        <div className="gauche" data-aos="fade-up">
          <img src={img} />
        </div>
        <div className="droite" data-aos="fade-up">
        {title}
          <div className="content" >{children}</div>
          <div className="btn">
            <Button>{btn}</Button>
          </div>
        </div>
      </Desktop>
      <Mobile>
        <div className="droite" data-aos="fade-up">
          <div className="title">{title}</div>
          <div className="content">{children}</div>
          <div className="btn">
            <Button>{btn}</Button>
          </div>
        </div>
        <div className="gauche" data-aos="fade-up">
          <img src={img} />
        </div>
      </Mobile>
    </BlocOutilWrapper>
  );
}
