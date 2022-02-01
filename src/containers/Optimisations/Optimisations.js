import { OptimisationsWrapper } from "./Optimisations.style";
import { useState, useEffect, useRef } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Charges from "../../components/FormsAudit/Charges/Charges"

import { FaSearch } from "react-icons/fa";

import { Input, Button, Spin, Space } from "antd";

export default function Optimisations() {
  const [loaded, setLoaded] = useState(false);
  const [carte1, setCarte1] = useState(0);
  const [carte2, setCarte2] = useState(0);

  const [search, setSearch] = useState("");

  // function handleChange(e) {
  //   if (search !== "") {
  //     setSearch(e.target.value);
  //     cards.forEach((element) => {
  //       if (element.toLowerCase === e.target.value.toLowerCase) {
  //         filtredCard=[...filtredCard, element];
  //       }
  //       console.log(filtredCard);
  //     });
  //   }
  //   else{
  //     filtredCard =[];
  //   }
  // }

  useEffect(() => {
    Aos.init({ duration: 1500 });
    setLoaded(true);
    // setOffSet(sliderLeft[0].offsetLeft) +380;
  }, []);

  const BienUsage = () => {
    return (
      <div className="sousCarte">
        <Button>Résidence principale</Button>
        <Button>Résidence secondaire</Button>
        <Button>Terrains</Button>
        <Button>Autres biens d'usage</Button>
        <Button>Meubles meublants</Button>
      </div>
    );
  };

  const ImmobilierRapport = () => {
    return (
      <div className="sousCarte">
        <Button>Immeuble nu</Button>
        <Button>Immeuble LMNP</Button>
        <Button>Immeuble LMNP avec exploitant</Button>
        <Button>Parts de SCPI</Button>
        <Button>Parts de SCI</Button>
        <Button>Autres immeubles de rapport</Button>
      </div>
    );
  };

  const BiensProfessionnels = () => {
    return (
      <div className="sousCarte">
        <Button>Droits sociaux</Button>
        <Button>Entreprise individuelle</Button>
        <Button>Fonds de commerce, clientèles</Button>
        <Button>Immeubles professionnels (hors LMP)</Button>
        <Button>Parts de GFA, GAF, GFV, GFR</Button>
        <Button>Biens ruraux loués à long terme</Button>
        <Button>Autres biens professionnels</Button>
      </div>
    );
  };

  const PlacementsFonciers = () => {
    return (
      <div className="sousCarte">
        <Button>Terrains agricoles (loués)</Button>
        <Button>Parts de groupement forestiers</Button>
        <Button>Bois et forêts</Button>
        <Button>Biens ruraux loués à long terme</Button>
        <Button>Parts de GFA, GAF, GFV, GFR</Button>
        <Button>Parts de Stés d'épargne forestière</Button>
        <Button>Autres placements divers</Button>
      </div>
    );
  };

  //Financier

  const CourtTerme = () => {
    return (
      <div className="sousCarte">
        <Button>Comptes courants</Button>
        <Button>Comptes sur livret (CSL)</Button>
        <Button>Livret de développement durable</Button>
        <Button>Livrets A</Button>
        <Button>Livrets Bleus</Button>
        <Button>Livrets d'épargne populaire (LEP)</Button>
        <Button>Livrets jeune</Button>
        <Button>CEL</Button>
        <Button>Comptes à terme</Button>
        <Button>Compte courant d'associés</Button>
        <Button>Bons de caisse</Button>
        <Button>Autres disponibilités</Button>
      </div>
    );
  };

  const EpargneMoyenLong = () => {
    return (
      <div className="sousCarte">
        <Button>PEL</Button>
        <Button>PEL bancaire</Button>
        <Button>Contrat de capitalisation</Button>
        <Button>Autres dépôts</Button>
      </div>
    );
  };

  const ValeursMobilieres = () => {
    return (
      <div className="sousCarte">
        <Button>Compte titres</Button>
        <Button>PEA</Button>
        <Button>PEA PME</Button>
        <Button>Stock Options</Button>
        <Button>FIP/FCP/SOFICA</Button>
      </div>
    );
  };

  const AssuranceVie = () => {
    return (
      <div className="sousCarte">
        <Button>Contrats d'assurance vie multisupports</Button>
        <Button>Contrats d'assurance vie euro-croissance</Button>
        <Button>Autre type d'assurance vie</Button>
      </div>
    );
  };

  const EpargneRetraite = () => {
    return (
      <div className="sousCarte">
        <Button>PEE/PEI</Button>
        <Button>PERCO/PERCOI</Button>
        <Button>PERP</Button>
        <Button>Contrat Loi Madelin</Button>
        <Button>Contrat Loi Article 83</Button>
        <Button>PER</Button>
        <Button>Autres épargne Retraite</Button>
      </div>
    );
  };

  //Format : ["nom de la carte",[potentiels mots qui peuvent être recherché]]
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
      <OptimisationsWrapper>
        <Input
          prefix={<FaSearch />}
          value={search}
          onChange={() => {
            setSearch(event.target.value);
          }}
          placeholder="Rechercher des cartes"
        />
        <div className="filtredCards">
          {filtredCard.lenght !== 0 &&
            filtredCard.map((element, i) => {
              return <Button key={i}>{element}</Button>;
            })}
        </div>
        <div className="immobilier">
          <div className="ligne">
            <Button className="btnGauche">Immobilier</Button>
            <Button
              style={{
                color: carte1 === 1 ? "#40a9ff" : "black",
                borderColor: carte1 === 1 ? "#40a9ff" : "#ccccce",
              }}
              onClick={() => setCarte1(1)}
            >
              Bien d'usage
            </Button>
            <Button
              style={{
                color: carte1 === 2 ? "#40a9ff" : "black",
                borderColor: carte1 === 2 ? "#40a9ff" : "#ccccce",
              }}
              onClick={() => setCarte1(2)}
            >
              Immobilier de rapport
            </Button>
            <Button
              style={{
                color: carte1 === 3 ? "#40a9ff" : "black",
                borderColor: carte1 === 3 ? "#40a9ff" : "#ccccce",
              }}
              onClick={() => setCarte1(3)}
            >
              Biens professionnels
            </Button>
            <Button
              style={{
                color: carte1 === 4 ? "#40a9ff" : "black",
                borderColor: carte1 === 4 ? "#40a9ff" : "#ccccce",
              }}
              onClick={() => setCarte1(4)}
            >
              Placements fonciers et divers
            </Button>
          </div>
          <div className="sousCarteContainer">
            {carte1 === 1 && <BienUsage />}
            {carte1 === 2 && <ImmobilierRapport />}
            {carte1 === 3 && <BiensProfessionnels />}
            {carte1 === 4 && <PlacementsFonciers />}
          </div>
        </div>
        <div className="financier">
          <div className="ligne">
            <Button onClick={() => setCarte1(1)} className="btnGauche">
              Financier
            </Button>
            <Button
              style={{
                color: carte2 === 1 ? "#40a9ff" : "black",
                borderColor: carte2 === 1 ? "#40a9ff" : "#ccccce",
              }}
              onClick={() => setCarte2(1)}
            >
              Court terme
            </Button>
            <Button
              style={{
                color: carte2 === 2 ? "#40a9ff" : "black",
                borderColor: carte2 === 2 ? "#40a9ff" : "#ccccce",
              }}
              onClick={() => setCarte2(2)}
            >
              Epargne moyen long terme
            </Button>
            <Button
              style={{
                color: carte2 === 3 ? "#40a9ff" : "black",
                borderColor: carte2 === 3 ? "#40a9ff" : "#ccccce",
              }}
              onClick={() => setCarte2(3)}
            >
              Valeurs mobilières
            </Button>
            <Button
              style={{
                color: carte2 === 4 ? "#40a9ff" : "black",
                borderColor: carte2 === 4 ? "#40a9ff" : "#ccccce",
              }}
              onClick={() => setCarte2(4)}
            >
              Assurance vie
            </Button>
            <Button
              style={{
                color: carte2 === 5 ? "#40a9ff" : "black",
                borderColor: carte2 === 5 ? "#40a9ff" : "#ccccce",
              }}
              onClick={() => setCarte2(5)}
            >
              Epargne retraite et salariale
            </Button>
          </div>
          <div className="sousCarteContainer">
            {carte2 === 1 && <CourtTerme />}
            {carte2 === 2 && <EpargneMoyenLong />}
            {carte2 === 3 && <ValeursMobilieres />}
            {carte2 === 4 && <AssuranceVie />}
            {carte2 === 5 && <EpargneRetraite />}
          </div>
        </div>

        <div className="formCharges">
          <Charges />
        </div>
      </OptimisationsWrapper>
    );
}
