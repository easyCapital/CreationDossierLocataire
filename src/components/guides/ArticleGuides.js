import { ArticleGuidesWrapper } from "./ArticleGuides.style";
import "aos/dist/aos.css";

import { Button } from "antd";
import { Card } from "antd";
import { useMediaQuery } from "react-responsive";
const { Meta } = Card;

export default function Guides({
  img,
  tag1,
  tag2,
  tag3,
  title,
  content,
  date,
  theme,
  type,
  tags,
}) {

    const isMobile = useMediaQuery({ maxWidth: 767 });


  
  return (
    <ArticleGuidesWrapper>
      <Card
        hoverable
        style={{ width: type == "small" ? (isMobile ? "100%" : "400px") : 865 }}
      >
        <img
          src={img}
          className="img"
          style={{ width: type == "small" ? (isMobile ? "100%" : "350px") : 810 }}
          alt="illustration d'article"
        />
        <div className="ligne1">
          <div className="article_date">{date}</div>
          <div className="article_theme">{theme}</div>
        </div>
        <div className="tags">
          {tags ? (
            tags.map((tag, index) => {
              return (
                <Button className="tag" type="primary" key={index}>
                  {tag}
                </Button>
              );
            })
          ) : (
            <>
              <Button className="tag" type="primary">
                {tag1}
              </Button>
              <Button className="tag" type="primary">
                {tag2}
              </Button>
              <Button className="tag" type="primary">
                {tag3}
              </Button>
            </>
          )}
        </div>
        <div className="title">{title}</div>
        <div className="content">{content}</div>
      </Card>
    </ArticleGuidesWrapper>
  );
}
