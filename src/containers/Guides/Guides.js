import { GuidesWrapper } from "./Guides.style";
import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "../../components/global/Footer/Footer";
import HeaderGuides from "../../components/guides/HeaderGuides";
import ArticleGuides from "../../components/guides/ArticleGuides";
import Link from "next/link";

import { Spin, Space, Button, Checkbox } from "antd";

export default function Outil() {
  const [showImage, setShowImage] = useState(false);

  const [loaded, setLoaded] = useState(false);
  const [tags, setTags] = useState([]);

  const CheckboxGroup = Checkbox.Group;

  useEffect(() => {
    Aos.init({ duration: 1500 });
    setLoaded(true);
    console.log("loaded");
  }, []);

  const MyArticles = [
    {
      tags: ["Tag1", "Tag2"],
      date: "Le 25/06/2021",
      title: "titre",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam soluta laudantium autem dolorem, accusantium nam vero. Praesentium animi consequatur labore.",

      theme: "Etude de cas",
      type: "small",
      img: "https://res.cloudinary.com/easycapital/image/upload/v1625216870/espace_client/fbl1getnlsjy7buymnrh.png",
    },
    {
      tags: ["Tag2"],
      date: "Le 25/06/2021",
      title: "titre",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam soluta laudantium autem dolorem, accusantium nam vero. Praesentium animi consequatur labore.",
      theme: "Etude de cas",
      img: "https://res.cloudinary.com/easycapital/image/upload/v1625487668/espace_client/y7loy1mfcpbmqra6vhyb.png",
    },
    {
      tags: ["Tag3"],
      date: "Le 25/06/2021",
      title: "titre",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam soluta laudantium autem dolorem, accusantium nam vero. Praesentium animi consequatur labore.",
      theme: "Etude de cas",
      type: "small",
      img: "https://res.cloudinary.com/easycapital/image/upload/v1625216870/espace_client/fbl1getnlsjy7buymnrh.png",
    },
    {
      tags: ["Tag1"],
      date: "Le 25/06/2021",
      title: "titre",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam soluta laudantium autem dolorem, accusantium nam vero. Praesentium animi consequatur labore.",

      theme: "Etude de cas",
      type: "small",
      img: "https://res.cloudinary.com/easycapital/image/upload/v1625216870/espace_client/fbl1getnlsjy7buymnrh.png",
    },
    {
      tags: ["Tag2"],
      date: "Le 25/06/2021",
      title: "titre",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam soluta laudantium autem dolorem, accusantium nam vero. Praesentium animi consequatur labore.",
      theme: "Etude de cas",
      type: "small",
      img: "https://res.cloudinary.com/easycapital/image/upload/v1625216870/espace_client/fbl1getnlsjy7buymnrh.png",
    },
    {
      tags: ["Tag3"],
      date: "Le 25/06/2021",
      title: "titre",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam soluta laudantium autem dolorem, accusantium nam vero. Praesentium animi consequatur labore.",
      theme: "Etude de cas",
      type: "small",
      img: "https://res.cloudinary.com/easycapital/image/upload/v1625216870/espace_client/fbl1getnlsjy7buymnrh.png",
    },
    {
      tags: ["Tag2"],
      date: "Le 25/06/2021",
      title: "titre",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam soluta laudantium autem dolorem, accusantium nam vero. Praesentium animi consequatur labore.",
      theme: "Etude de cas",
      type: "small",
      img: "https://res.cloudinary.com/easycapital/image/upload/v1625216870/espace_client/fbl1getnlsjy7buymnrh.png",
    },
    {
      tags: ["Tag3"],
      date: "Le 25/06/2021",
      title: "titre",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam soluta laudantium autem dolorem, accusantium nam vero. Praesentium animi consequatur labore.",
      theme: "Etude de cas",
      type: "small",
      img: "https://res.cloudinary.com/easycapital/image/upload/v1625216870/espace_client/fbl1getnlsjy7buymnrh.png",
    },
  ];

  var myFilteredArticles = [];
  MyArticles.forEach((article) => {
    if (tags.length) {
      var done = false;
      tags.forEach((tag) => {
        if (article.tags.includes(tag) && !done) {
          myFilteredArticles.push(article);

          done = true;
        }
      });
    } else {
      myFilteredArticles = [...MyArticles];
    }
  });
  console.log(myFilteredArticles);

  const onTagsChange = (list) => {
    setTags(list);
  };

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
      <GuidesWrapper>
        <HeaderGuides />
        <div className="barre">
          <Button className="btn_haut">Blog</Button>
          <Button className="btn_haut">Etude de cas</Button>
          <Button className="btn_haut">Fiscalité</Button>
          <Button className="btn_haut">Immobilier</Button>
          <Button className="btn_haut">Famille</Button>
          <Button className="btn_haut">Epargne</Button>
        </div>
        <div className="rechercheTags">
          <p className="rechercheText"> Recherche par tags :</p>
          <div className="btns_tag">
            <CheckboxGroup
              options={["Tag1", "Tag2", "Tag3"]}
              value={tags}
              onChange={onTagsChange}
            />
          </div>
        </div>
        <div className="ligne">
          {myFilteredArticles.map((article, index) => {
            return (
              <span key={index}>
                <ArticleGuides
                  className="article"
                  content={article.content}
                  title={article.title}
                  theme={article.theme}
                  date={article.date}
                  img={article.img}
                  type={article.type}
                  tags={article.tags}
                />
              </span>
            );
          })}
        </div>

        <Footer />
      </GuidesWrapper>
    );
}
