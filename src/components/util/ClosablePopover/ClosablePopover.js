import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Popover } from "antd";
import React, { useState } from "react";

export default function ClosablePopover({
  children,
  content,
  openOnInit,
  onClose,
}) {
  const [open, setOpen] = useState(openOnInit);

  return (
    <Popover
      visible={open}
      content={
        <div className="closablePopover">
          <FontAwesomeIcon
            className="xMark"
            icon={faXmark}
            onClick={() => {
              setOpen(false);
              onClose();
            }}
          />
          {content}
        </div>
      }
    >
      {children}
    </Popover>
  );
}
