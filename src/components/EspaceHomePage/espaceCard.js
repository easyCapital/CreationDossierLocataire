import { EspaceCardWrapper } from "./espaceCard.style";
import { Card, Button } from "antd";
const { Meta } = Card;

export default function EspaceCard({
  icon,
  title,
  amount,
  variation,
  button,
  dark,
  
}) {
  return (
    <EspaceCardWrapper
      style={{
        "margin-right": dark === true ? "0px" : "6%",
        background: dark === true ? "#e4e8eb" : "white",
      }}
    >
      <Card
        title={
          <div className="headerCard">
            {icon}
            <h3 className="title">{title}</h3>
          </div>
        }
        bordered={false}
        style={{ background: dark === true ? "#e4e8eb" : "white" }}
      >
        <div className="amount">{amount}</div>
        <div className="variation">{variation}</div>
        <Button>{button}</Button>
      </Card>
    </EspaceCardWrapper>
  );
}
