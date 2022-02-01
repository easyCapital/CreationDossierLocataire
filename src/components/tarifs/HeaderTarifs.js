import { HeaderTarifsWrapper } from "./HeaderTarifs.style";
import Link from "next/link";

import {
  Steps,
  Menu,
  Progress,
  Switch,
  Divider,
  Carousel,
  Card,
  Col,
  Row,
  Collapse,
  Spin,
  Space,
  Button,
} from "antd";

export default function HeaderTarifs() {
  return (
    <HeaderTarifsWrapper>
    <div className="bande_bleu">
        <h1 className="faites">Faites décoller votre patrimoine avec nos offres</h1>
        <h2 className="suivre"> Suivre, analyser et décider librement</h2>
    </div>

    </HeaderTarifsWrapper>
  );
}
