import { Button } from "antd";
import { useEffect, useState } from "react";
import { ButtonGroupRadioWrapper } from "./ButtonGroupRadio.style";

const ButtonGroupRadio = ({ values, initialValue, onChange }) => {
  const [selectedButtonValue, setSelectedButtonValue] = useState(initialValue);

  useEffect(() => {
    setSelectedButtonValue(initialValue);
  }, [initialValue]);

  const onClick = (value) => {
    if (selectedButtonValue === value) return;
    setSelectedButtonValue(value);
    onChange(value);
  };

  return (
    <ButtonGroupRadioWrapper>
      {values.map(({ value, element, color }) => {
        const isSelected = selectedButtonValue === value;
        return (
          <Button
            key={value}
            type="text"
            onClick={() => onClick(value)}
            className={!isSelected ? "notSelected button" : "button"}
            style={{ outlineColor: color, color: color }}
          >
            {element}
          </Button>
        );
      })}
    </ButtonGroupRadioWrapper>
  );
};

export default ButtonGroupRadio;
