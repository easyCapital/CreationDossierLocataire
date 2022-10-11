import { faBug } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Drawer } from "antd";
import { useState } from "react";
import Contact from "../../../containers/Contact/Contact";
import { ReportBugWrapper } from "./ReportBug.style";

export default function ReportBug() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <ReportBugWrapper>
      <Button
        className="reportBugBtn"
        type="primary"
        ghost
        icon={<FontAwesomeIcon icon={faBug} />}
        onClick={() => setDrawerOpen(true)}
      >
        Signaler un problème
      </Button>
      <Drawer
        className="reportBugDrawer"
        visible={drawerOpen}
        placement="left"
        onClose={() => setDrawerOpen(false)}
      >
        <Contact
          requiresEmail={false}
          buttonText="Envoyer"
          isBugReport
          textAreaPlaceholder="Détail du problème"
          onSuccess={() => setDrawerOpen(false)}
        />
      </Drawer>
    </ReportBugWrapper>
  );
}
