import { ConformiteWrapper } from "./Conformite.style";
import { useState, useEffect } from "react";
import {
  FaArrowRight,
  FaCheckCircle,
  FaEye,
  FaHourglassHalf,
  FaInfoCircle,
  FaPen,
  FaPenNib,
} from "react-icons/fa";

import { Button, Collapse, Divider, Tooltip } from "antd";
import { useSelector } from "react-redux";
import HttpService from "../../services/HttpService";
import LoadingSpinner from "../../components/global/LoadingSpinner/LoadingSpinner";
import PDFObject from "pdfobject";
import moment from "moment";

export default function Conformite() {
  const [loaded, setLoaded] = useState(false);
  const [opportunities, setOpportunities] = useState([]);
  const [loadings, setLoadings] = useState({
    entreeEnRelationBtn: false,
    lettreDeMissionBtn: false,
    recueilBtn: false,
    profilFinancierBtn: false,
    signConformityBtn: false,
    generateRapportAdequationBtn: false,
    signRapportAdequationBtn: false,
  });
  const [openPanel, setOpenPanel] = useState(null);
  const [collapseContainerType, setCollapseContainerType] = useState("pdf");

  const { Panel } = Collapse;

  const profileResponse = useSelector((state) => state.userDetails.userProfile);

  useEffect(() => {
    if (typeof profileResponse === "object" && profileResponse !== null) {
      setLoaded(true);
      var oppArray = [];
      // console.log(profileResponse.data.contact);
      profileResponse.data.contact.opportunities.forEach((opportunity) => {
        if (opportunity.should_be_displayed_in_espace_client) {
          opportunity = {
            ...opportunity,
            isProfileFinancierOk: opportunity.profils.filter(
              (profil) =>
                profil.contact_id == profileResponse.data.contact.id &&
                "validé" == profil.status
            ).length
              ? true
              : false,
            isProfileFinancierOkForEveryone:
              opportunity.profils.filter((profil) => "validé" == profil.status)
                .length == opportunity.profils.length
                ? true
                : false,
            isSigned: opportunity.signatures.filter(
              (signature) =>
                signature.contact_id == profileResponse.data.contact.id &&
                signature.is_signed
            ).length
              ? true
              : false,
            isSignedByEveryone: opportunity.signatures.filter(
              (signature) => !signature.is_signed
            ).length
              ? false
              : true,
            isCancelled: opportunity.lettre_de_missions[0].status == 3,
            isRapportAdequationValid: opportunity.rapport_adequation?.is_valid
              ? true
              : false,
            isRapportAdequationSigned:
              opportunity.rapport_adequation?.signatures.filter(
                (signature) =>
                  signature.contact_id == profileResponse.data.contact.id &&
                  signature.is_signed
              ).length
                ? true
                : false,
            isRapportAdequationFullySigned: opportunity.rapport_adequation
              ?.is_signed
              ? true
              : false,
          };
          // console.log(opportunity);
          oppArray.push(opportunity);
        }
      });
      setOpportunities(oppArray.reverse());
    } else {
      setLoaded(false);
      setOpportunities([]);
    }
  }, [profileResponse]);

  const generateLettreDeMission = (opportunity, key) => {
    setCollapseContainerType("pdf");
    setOpenPanel(null);
    setLoadings({ ...loadings, lettreDeMissionBtn: key });
    const http = new HttpService();
    const data = {
      opportunity_id: opportunity.id,
    };
    return http
      .postData(data, "getldmpdf", "user-token", true)
      .then((response) => response.blob())
      .then((blob) => {
        setLoadings({ ...loadings, lettreDeMissionBtn: false });
        setOpenPanel(key);
        var file = window.URL.createObjectURL(blob);
        PDFObject.embed(file, "#pdfContainer" + key);
      });
  };

  const generateEntreeEnRelation = (key) => {
    setCollapseContainerType("pdf");
    setOpenPanel(null);
    setTimeout(() => {
      setOpenPanel(key);
      PDFObject.embed("/entree_en_relation.pdf", "#pdfContainer" + key);
    }, 100);
  };

  const generateRecueil = (key) => {
    setCollapseContainerType("pdf");
    setOpenPanel(null);
    setLoadings({ ...loadings, recueilBtn: key });
    const http = new HttpService();
    const data = {
      audit_id: profileResponse.data.contact.audits[0].id,
    };
    return http
      .postData(data, "getrecueilpdf", "user-token", true)
      .then((response) => response.blob())
      .then((blob) => {
        setLoadings({ ...loadings, recueilBtn: false });
        setOpenPanel(key);
        var file = window.URL.createObjectURL(blob);
        PDFObject.embed(file, "#pdfContainer" + key);
      });
  };

  const generateRapportAdequation = (rapportAdequationId, key, signed = "") => {
    setCollapseContainerType("pdf");
    setOpenPanel(null);
    setLoadings({ ...loadings, generateRapportAdequationBtn: key });
    const http = new HttpService();
    const data = {
      rapport_adequation_id: rapportAdequationId,
    };
    return http
      .postData(
        data,
        "getrapportadequation" + signed + "pdf",
        "user-token",
        true
      )
      .then((response) => response.blob())
      .then((blob) => {
        setLoadings({ ...loadings, generateRapportAdequationBtn: false });
        setOpenPanel(key);
        var file = window.URL.createObjectURL(blob);
        PDFObject.embed(file, "#pdfContainer" + key);
      });
  };

  const generateProfileFinancier = (key) => {
    setTimeout(() => {
      setOpenPanel(key);
      setCollapseContainerType("iframe");
    }, 100);
  };

  const showProfileFinancier = (opportunity, key) => {
    return showIFrame(
      "https://app.easycapital.fr/create-financier/" +
        profileResponse.data.contact.slug +
        "/" +
        opportunity.id
    );
  };

  const signConformity = (key, opportunity_id) => {
    setOpenPanel(null);
    setLoadings({ ...loadings, signConformityBtn: key });
    const http = new HttpService();
    http
      .getData("sign-conformity/" + opportunity_id, "user-token")
      .then((response) => {
        window.location.assign(JSON.parse(response[0]).response[0].url_view);
        setLoadings({ ...loadings, signConformityBtn: false });
      })
      .catch(() => {
        alert("Oups ... Notre serveur a rencontré un problème.");
        setLoadings({ ...loadings, signConformityBtn: false });
      });
  };

  const signRapportAdequation = (key, rapport_adequation_id) => {
    setOpenPanel(null);
    setLoadings({ ...loadings, signRapportAdequationBtn: key });
    const http = new HttpService();
    http
      .getData("sign-rapport-adequation/" + rapport_adequation_id, "user-token")
      .then((response) => {
        window.location.assign(JSON.parse(response[0]).response[0].url_view);
        setLoadings({ ...loadings, signRapportAdequationBtn: false });
      })
      .catch(() => {
        alert("Oups ... Notre serveur a rencontré un problème.");
        setLoadings({ ...loadings, signRapportAdequationBtn: false });
      });
  };

  const showIFrame = (src) => {
    return (
      <iframe
        src={src}
        width={"100%"}
        height={"800px"}
        frameBorder={0}
      ></iframe>
    );
  };

  return loaded ? (
    <ConformiteWrapper>
      {opportunities.length ? (
        <Collapse ghost activeKey={openPanel}>
          {opportunities.map((opportunity, i) => {
            return (
              <Panel
                className={
                  (i ? "notFirstOpportunity" : "") +
                  (opportunity.isRapportAdequationFullySigned
                    ? " isFinished"
                    : "")
                }
                key={i}
                header={
                  <div onClick={() => setOpenPanel(null)}>
                    {i ? <Divider /> : null}
                    <div className="opportunityHeaderWrapper">
                      <div className="opportunityType">
                        <h1>{opportunity.type.parent.label}</h1>{" "}
                        <h2>{opportunity.type.label}</h2>
                        {opportunity.lettre_de_missions[0].validated_date ? (
                          <p>
                            {moment(
                              opportunity.lettre_de_missions[0].validated_date,
                              "YYYY-MM-DD"
                            ).format("DD/MM/YYYY")}
                          </p>
                        ) : null}
                      </div>
                      <div className="opportunityInfo">
                        <p>
                          <FaInfoCircle />
                          {opportunity.isCancelled ? (
                            <>
                              La signature a été refusée (ou expirée), nous
                              avons alerté votre conseiller pour qu'il vous
                              recontacte.
                            </>
                          ) : opportunity.isProfileFinancierOk ? (
                            opportunity.isProfileFinancierOkForEveryone ? (
                              opportunity.isSigned ? (
                                opportunity.isSignedByEveryone ? (
                                  opportunity.isRapportAdequationValid ? (
                                    opportunity.isRapportAdequationSigned ? (
                                      opportunity.isRapportAdequationFullySigned ? (
                                        <>Cette conformité est clôturée.</>
                                      ) : (
                                        <>
                                          Vous venez de signer votre rapport
                                          d'adéquation et nous vous en
                                          remercions. Lorsque tous les partis
                                          l'auront également signé, la
                                          conformité sera alors clôturée.
                                        </>
                                      )
                                    ) : (
                                      <>
                                        Vous pouvez dès à présent signer votre
                                        rapport d'adéquation afin de clôturer la
                                        conformité. (si vous venez de signer, ne
                                        tenez pas compte de ce message)
                                      </>
                                    )
                                  ) : (
                                    <>
                                      Vous venez de signer la première partie de
                                      la conformité et nous vous en remercions.
                                      Un conseiller prépare actuellement la
                                      proposition la plus adaptée à votre profil
                                      et objectif. Nous vous préviendrons
                                      lorsque la proposition sera en ligne.
                                    </>
                                  )
                                ) : (
                                  <>
                                    Vous venez de signer la première partie de
                                    la conformité et nous vous en remercions.
                                    Lorsque tous les partis auront aussi signé
                                    leurs documents, un conseiller préparera la
                                    proposition la plus adaptée à votre profil
                                    et objectif.
                                  </>
                                )
                              ) : (
                                <>
                                  Merci de signer vos documents, nous
                                  préparerons ensuite la proposition adaptée et
                                  personnalisée. (si vous venez de signer, ne
                                  tenez pas compte de ce message)
                                </>
                              )
                            ) : (
                              <>
                                Vous venez de compléter votre profil financier
                                et nous vous en remercions. Lorsque que tous les
                                partis auront aussi réalisé leur profil
                                financier, vous pourrez signer vos documents.
                              </>
                            )
                          ) : (
                            <>
                              Merci de compléter votre profil financier.
                              Celui-ci nous permettra de réaliser une
                              proposition adaptée.
                            </>
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="conformityWrapper" key={i}>
                      <Button
                        className={opportunity.isSigned ? "signed" : "toSign"}
                        onClick={() => generateEntreeEnRelation(i)}
                        icon={<FaEye />}
                        loading={loadings.entreeEnRelationBtn === i}
                        disabled={opportunity.isCancelled}
                      >
                        Entrée en relation
                      </Button>
                      <FaArrowRight />
                      <Button
                        className={opportunity.isSigned ? "signed" : "toSign"}
                        onClick={() => generateLettreDeMission(opportunity, i)}
                        loading={loadings.lettreDeMissionBtn === i}
                        icon={<FaEye />}
                        disabled={opportunity.isCancelled}
                      >
                        Lettre de mission
                      </Button>
                      <FaArrowRight />
                      <Button
                        className={opportunity.isSigned ? "signed" : "toSign"}
                        onClick={() => generateRecueil(i)}
                        loading={loadings.recueilBtn === i}
                        icon={<FaEye />}
                        disabled={opportunity.isCancelled}
                      >
                        Recueil
                      </Button>
                      <FaArrowRight />
                      {opportunity.isCancelled ? (
                        <Button className={"toSee"} icon={<FaPen />} disabled>
                          Profil financier
                        </Button>
                      ) : (
                        <Tooltip
                          placement="top"
                          title={
                            opportunity.isProfileFinancierOk
                              ? ""
                              : "Finaliser mon questionnaire"
                          }
                        >
                          <Button
                            className={
                              opportunity.isProfileFinancierOk
                                ? opportunity.isSigned
                                  ? "signed"
                                  : "toSign"
                                : "toSee"
                            }
                            onClick={() => generateProfileFinancier(i)}
                            icon={
                              opportunity.isProfileFinancierOk ? (
                                <FaCheckCircle />
                              ) : (
                                <FaPen />
                              )
                            }
                            loading={loadings.profilFinancierBtn === i}
                          >
                            Profil financier
                          </Button>
                        </Tooltip>
                      )}
                      {!opportunity.isCancelled &&
                        opportunity.isProfileFinancierOk &&
                        (opportunity.isSigned ? (
                          opportunity.isRapportAdequationValid ? (
                            opportunity.isRapportAdequationSigned ? (
                              <>
                                <FaArrowRight />
                                <Button
                                  className={
                                    opportunity.isRapportAdequationFullySigned
                                      ? "signed"
                                      : "toSign"
                                  }
                                  icon={<FaEye />}
                                  onClick={() =>
                                    generateRapportAdequation(
                                      opportunity.rapport_adequation.id,
                                      i,
                                      opportunity.isRapportAdequationFullySigned
                                        ? "signed"
                                        : ""
                                    )
                                  }
                                  loading={
                                    loadings.generateRapportAdequationBtn === i
                                  }
                                >
                                  Rapport d'adéquation
                                </Button>
                              </>
                            ) : (
                              <>
                                <FaArrowRight />
                                <Button
                                  className={"toSee"}
                                  icon={<FaPenNib />}
                                  onClick={
                                    opportunity.isRapportAdequationValid
                                      ? () =>
                                          signRapportAdequation(
                                            i,
                                            opportunity.rapport_adequation.id
                                          )
                                      : null
                                  }
                                  loading={
                                    loadings.signRapportAdequationBtn === i
                                  }
                                >
                                  Rapport d'adéquation
                                </Button>
                              </>
                            )
                          ) : (
                            <>
                              <FaArrowRight />
                              <Button
                                className={"toWait"}
                                icon={<FaHourglassHalf />}
                              >
                                Rapport d'adéquation
                              </Button>
                            </>
                          )
                        ) : (
                          <>
                            <FaArrowRight />
                            <Button
                              className={
                                opportunity.isProfileFinancierOkForEveryone
                                  ? "toSee"
                                  : "toWait"
                              }
                              icon={
                                opportunity.isProfileFinancierOkForEveryone ? (
                                  <FaPenNib />
                                ) : (
                                  <FaHourglassHalf />
                                )
                              }
                              onClick={
                                opportunity.isProfileFinancierOkForEveryone
                                  ? () => signConformity(i, opportunity.id)
                                  : null
                              }
                              loading={
                                opportunity.isProfileFinancierOkForEveryone
                                  ? loadings.signConformityBtn === i
                                  : null
                              }
                            >
                              Signer ma conformité
                            </Button>
                          </>
                        ))}
                    </div>
                  </div>
                }
              >
                {collapseContainerType == "pdf" ? (
                  <div
                    id={"pdfContainer" + i}
                    style={{
                      width: "100%",
                      height: "100vh",
                    }}
                  />
                ) : (
                  showProfileFinancier(opportunity, i)
                )}
              </Panel>
            );
          })}
        </Collapse>
      ) : (
        <p>Aucune information à suivre pour le moment.</p>
      )}
    </ConformiteWrapper>
  ) : (
    <LoadingSpinner />
  );
}
