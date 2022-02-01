import { Button, Collapse } from "antd";
import { useState } from "react";
import { useRef } from "react";
import { FaArrowRight, FaEye } from "react-icons/fa";
import HttpService from "../../../services/HttpService";

export default function OpportunityPanel({ opportunity, key, setOpenPanel }) {

  const containerRef = useRef(null);
  const [loadings, setLoadings] = useState({
    lettreDeMissionBtn: false,
  });

  const { Panel } = Collapse;

  const generateLettreDeMission = (opportunity, key) => {
    setOpenPanel(null);
    setLoadings({ ...loadings, lettreDeMissionBtn: true });
    console.log(localStorage.getItem("user-token"));
    const http = new HttpService();
    const data = {
      opportunity_id: opportunity.id,
    };
    return http
      .postData(data, "generateldmpdf", "user-token", true)
      .then((response) => response.blob())
      .then((blob) => {
        setLoadings({ ...loadings, lettreDeMissionBtn: false });
        setOpenPanel(key);
        var file = window.URL.createObjectURL(blob);

        const container = containerRef.current;
        let instance, PSPDFKit;
        (async function () {
          PSPDFKit = await import("pspdfkit");
          PSPDFKit.unload(containerRef.current);
          instance = await PSPDFKit.load({
            container,
            document: file,
            baseUrl: `${window.location.protocol}//${window.location.host}/`,
          });
          const defaultItems = PSPDFKit.defaultToolbarItems;
          console.log(defaultItems);
          const items = instance.toolbarItems;
          instance.setToolbarItems(
            items.filter(
              (item) =>
                ![
                  "sidebar-document-outline",
                  "sidebar-annotations",
                  "sidebar-bookmarks",
                  "annotate",
                  "ink",
                  "highlighter",
                  "text-highlighter",
                  "ink-eraser",
                  "signature",
                  "image",
                  "stamp",
                  "note",
                  "text",
                  "line",
                  "arrow",
                  "rectangle",
                  "ellipse",
                  "polygon",
                  "polyline",
                  "document-editor",
                  "document-crop",
                  "document-comparison",
                ].includes(item.type)
            )
          );
        })();

        return () => PSPDFKit && PSPDFKit.unload(containerRef.current);

        // var url = window.URL.createObjectURL(blob);
        // var a = document.createElement("a");
        // a.href = url;
        // a.download = "lettre_de_mission";
        // a.click();
        // a.remove();
        // setTimeout(() => window.URL.revokeObjectURL(url), 100);
      });
  };

  return (
      <Panel
        key={key}
        header={
          <div>
            <div className="opportunityType">
              <h1>{opportunity.type.parent.label}</h1>{" "}
              <h2>{opportunity.type.label}</h2>
            </div>
            <div className="conformityWrapper">
              <Button className="done">Entrée en relation</Button>
              <FaArrowRight />
              <Button
                className="done"
                onClick={() => generateLettreDeMission(opportunity, key)}
                loading={loadings.lettreDeMissionBtn}
                icon={<FaEye />}
              >
                Lettre de mission
              </Button>
              <FaArrowRight />
              <Button className="todo">Recueil</Button>
              <FaArrowRight />
              <Button className="todo">Profil financier</Button>
              <FaArrowRight />
              <Button className="todo">Rapport d'adéquation</Button>
            </div>
          </div>
        }
      >
        <div ref={containerRef} style={{ height: "100vh" }} />
      </Panel>
  );
}
