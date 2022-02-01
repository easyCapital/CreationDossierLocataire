import { CardWrapper } from "./card.style.js";

export default function Card({ title, description, link }) {
  return (
    <CardWrapper>
      <a href={link}>
        <h2>{title}</h2>
        <p>{description}</p>
      </a>
    </CardWrapper>
  );
}
