import { BlogArticleWrapper } from "./BlogArticle.style";
import Link from "next/link";

import {
  Card,
  Button,
} from "antd";

export default function BlogArticle({
  tag,
  title,
  content,
  avatar,
  name,
  date,
}) {
  const { Meta } = Card;

  return (
    <BlogArticleWrapper>
      <div className="article">
        <Link href="/">
          <Card hoverable style={{ width: 400 }} data-aos="fade-right">
            <div className="btn_articles">
              <Button id="btn_articles" type="primary">
                {tag}
              </Button>
            </div>

            <Meta title={title} description={content} />
            <div className="footer_article_blog">
              <img src={avatar} className="avatar_blog" />
              <div className="article_info">
                <div className="article_author">{name}</div>
                <div className="article_date">{date}</div>
              </div>
            </div>
          </Card>
        </Link>
      </div>
    </BlogArticleWrapper>
  );
}
