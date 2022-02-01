import { EspaceHomePageWrapper } from "./EspaceHomePage.style";
import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  AiFillEuroCircle,
  AiFillCreditCard,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { BiBuildings } from "react-icons/bi";
import { GrMoney } from "react-icons/gr";
import { FaCalculator } from "react-icons/fa";
import { RiGovernmentLine } from "react-icons/ri";
import { IoMdStats } from "react-icons/io";
import { Input, Button, Progress, Spin, Space } from "antd";
import EspaceCard from "../../components/EspaceHomePage/espaceCard";
import TableEspace from "../../components/EspaceHomePage/tableEspace";

import Funnel, {
  Title,
  Margin,
  Tooltip,
  Item,
  Border,
  Legend,
  Label,
  Font,
} from "devextreme-react/funnel";
import Camembert from "../../components/EspaceHomePage/camembert";

export default function EspaceHomePage() {
  const [loaded, setLoaded] = useState(false);
  const dataSource = [
    { count: 75, level: "Compte chèques" },
    { count: 95, level: "Épargne court terme" },
    { count: 53, level: "Épargne moyen terme" },
    { count: 23, level: "Épargne long terme" },
    { count: 18, level: "Immobilier" },
  ];

  const [search, setSearch] = useState("");
  const cards = [
    ["Résidence principale", ["Résidence principale", "truc"]],
    ["Résidence secondaire", ["Résidence secondaire"]],
    ["Terrains", ["Terrains"]],
    ["Autres biens d'usage", ["Autres biens d'usage"]],
    ["Meubles meublants", ["Meubles meublants"]],
    ["Immeuble nu", ["Immeuble nu"]],
    ["Immeuble LMNP", ["Immeuble LMNP"]],
    ["Immeuble LMNP avec exploitant", ["Immeuble LMNP avec exploitant"]],
    ["Parts de SCPI", ["Parts de SCPI"]],
    ["Autres immeubles de rapport", ["Autres immeubles de rapport"]],
    ["Droits sociaux", ["Droits sociaux"]],
    ["Entreprise individuelle", ["Entreprise individuelle"]],
    ["Fonds de commerce, clientèles", ["Fonds de commerce, clientèles"]],
    [
      "Immeubles professionnels (hors LMP)",
      ["Immeubles professionnels (hors LMP)"],
    ],
    ["Parts de GFA, GAF, GFV, GFR", ["Parts de GFA, GAF, GFV, GFR"]],
    ["Biens ruraux loués à long terme", ["Biens ruraux loués à long terme"]],
    ["Autres biens professionnels", ["Autres biens professionnels"]],
    ["Terrains agricoles (loués)", ["Terrains agricoles (loués)"]],
    ["Parts de groupement forestiers", ["Parts de groupement forestiers"]],
    ["Bois et forêts", ["Parts de groupement forestiers"]],
    ["Biens ruraux loués à long terme", ["Parts de groupement forestiers"]],
    ["Parts de GFA, GAF, GFV, GFR", ["Parts de GFA, GAF, GFV, GFR"]],
    ["Parts de Stés d'épargne forestière", ["Parts de GFA, GAF, GFV, GFR"]],
    ["Autres placements divers", ["Autres placements divers"]],
    ["Comptes courants", ["Comptes courants"]],
    ["Comptes sur livret (CSL)", ["Comptes sur livret (CSL)"]],
    ["Livret de développement durable", ["Comptes sur livret (CSL)"]],
    ["Livrets A", ["Livrets A"]],
    ["Livrets Bleus", ["Livrets Bleus"]],
    [
      "Livrets d'épargne populaire (LEP)",
      ["Livrets d'épargne populaire (LEP)"],
    ],
    ["Livrets jeune", ["Livrets jeune"]],
    ["CEL", ["CEL"]],
    ["Comptes à terme", ["Comptes à terme"]],
    ["Compte courant d'associés", ["Compte courant d'associés"]],
    ["Bons de caisse", ["Bons de caisse"]],
    ["Autres disponibilités", ["Autres disponibilités"]],
    ["PEL", ["PEL"]],
    ["PEL bancaire", ["PEL bancaire"]],
    ["Contrat de capitalisation", ["Contrat de capitalisation"]],
    ["Autres dépôts", ["Autres dépôts"]],
    ["Compte titres", ["Compte titres"]],
    ["PEA", ["PEA"]],
    ["PEA PME", ["PEA PME"]],
    ["Stock Options", ["Stock Options"]],
    ["FIP/FCP/SOFICA", ["FIP/FCP/SOFICA"]],
    [
      "Contrats d'assurance vie multisupports",
      ["Contrats d'assurance vie multisupports"],
    ],
    [
      "Contrats d'assurance vie euro-croissance",
      ["Contrats d'assurance vie euro-croissance"],
    ],
    ["Autre type d'assurance vie", ["Autre type d'assurance vie"]],
    ["PEE/PEI", ["PEE/PEI"]],
    ["PERCO/PERCOI", ["PERCO/PERCOI"]],
    ["PERP", ["PERP"]],
    ["Contrat Loi Madelin", ["Contrat Loi Madelin"]],
    ["Contrat Loi Article 83", ["Contrat Loi Article 83"]],
    ["PER", ["PER"]],
    ["Autres épargne Retraite", ["Autres épargne Retraite"]],
  ];
  var filtredCard = [];
  cards.forEach((element) => {
    var findable = element[1];
    if (search !== "") {
      findable.forEach((item) => {
        if (item.toLowerCase().includes(search.toLowerCase())) {
          filtredCard.push(element[0]);
        }
      });
    } else {
      filtredCard = [];
    }
    console.log(findable);
  });

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
      <EspaceHomePageWrapper>
        <div className="ligne1">
          <div className="txt">Obtenir des recommandations adaptées :</div>
          <Progress percent={60} size="small" />
          <Button>Finaliser mon profil</Button>
        </div>
        <h2 className="situation">SITUATION PATRIMONIALE</h2>
        <div className="ligne2">
          <Input
            placeholder="Que souhaitez-vous ajotuer à votre situation ou patrimoine"
            value={search}
            onChange={() => {
              setSearch(event.target.value);
            }}
          />
          <Button>Ajouter</Button>
        </div>
        <div className="filtredCards">
          {filtredCard.lenght !== 0 &&
            filtredCard.map((element, i) => {
              return <Button key={i}>{element}</Button>;
            })}
        </div>
        <div className="cardContainer">
          <EspaceCard
            icon={<BiBuildings />}
            title=" Mon immobilier"
            amount="3 500 000 €"
            variation="-3.25% sur 1 an"
            button="Détail"
            dark={false}
          />
          <EspaceCard
            icon={<AiFillCreditCard />}
            title=" Mes placements"
            amount="1 500 000 €"
            variation="+3.25% sur 1 an"
            button="Détail"
            dark={false}
          />
          <EspaceCard
            icon={<GrMoney />}
            title=" Mes crédits"
            amount="3 500 000 €"
            variation="12 500€ acquis sur 1 an"
            button="Détail"
            dark={false}
          />
          <EspaceCard
            icon={<AiOutlineFundProjectionScreen />}
            title=" Patrimoine net"
            amount="2 500 000 €"
            variation="&nbsp;"
            button="Projection"
            dark={true}
          />
          <EspaceCard
            icon={<AiFillEuroCircle />}
            title="Mes revenus"
            amount="3 500 000 €"
            variation="-3.25% sur 1 an"
            button="Détail"
            dark={false}
          />
          <EspaceCard
            icon={<FaCalculator />}
            title=" Mes charges"
            amount="1 500 000 €"
            variation="+3.25% sur 1 an"
            button="Détail"
            dark={false}
          />
          <EspaceCard
            icon={<RiGovernmentLine />}
            title=" Mes impôts"
            amount="3 500 000 €"
            variation="12 500€ acquis sur 1 an"
            button="Détail"
            dark={false}
          />
          <EspaceCard
            icon={<IoMdStats />}
            title="Bilan trésorerie"
            amount="2 500 000 €"
            variation="&nbsp;"
            button="Projection"
            dark={true}
          />
        </div>
        <div className="evolution">
          <h2 className="title">Evolution de votre patrimoine</h2>
          <div className="graph">Graphique de la situation passée</div>
        </div>
        <div className="diagnostic">
          <h2 className="title">DIAGNOSTIC</h2>
          <div className="txt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            nobis porro incidunt suscipit a culpa earum? Tempora voluptatibus,
            quaerat illum sunt magnam in quod mollitia neque cupiditate debitis,
            fugit excepturi voluptate sequi suscipit, rem delectus? Aliquam
            eaque mollitia omnis deserunt, fugiat doloremque nam necessitatibus
            cupiditate vero eligendi soluta magnam placeat!
          </div>
          <TableEspace />
          <div className="graph">
            <div className="gauche">
              <Camembert />
            </div>
            <div className="droite">
              <Funnel
                dataSource={dataSource}
                sortData={false}
                inverted={true}
                algorithm="dynamicHeight"
                palette="Harmony Light"
                argumentField="level"
                valueField="count"
              >
                <Title text="">
                  <Margin bottom={30} />
                </Title>
                <Tooltip enabled={true} />
                <Item>
                  <Border visible={true} />
                </Item>
                <Legend visible={true} />
                <Label
                  visible={true}
                  horizontalAlignment="left"
                  backgroundColor="none"
                >
                  <Font size={16} />
                </Label>
              </Funnel>
            </div>
          </div>
        </div>
      </EspaceHomePageWrapper>
    );
}
