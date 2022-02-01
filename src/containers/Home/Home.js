import React from "react";
import { HomeWrapper } from "./Home.style";
import { Button } from "antd";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";
import ArticleGuides from "../../components/guides/ArticleGuides";
import Footer from "../../components/global/Footer/Footer";
import EspaceCard from "../../components/EspaceHomePage/espaceCard";
import { BiBuildings } from "react-icons/bi";
import router from "next/router";

import { Steps, Card, Collapse, Spin, Space, Tabs } from "antd";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../../components/global/LoadingSpinner/LoadingSpinner";
import { LoadProfileAction } from "../../redux/actions/ProfileActions";

function Home() {
  const [loaded, setLoaded] = useState(false);
  const profileResponse = useSelector((state) => state.userDetails.userProfile);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LoadProfileAction());
  }, []);

  useEffect(() => {
    if (profileResponse.data) setLoaded(true);
  }, [profileResponse]);

  return loaded ? (
    <HomeWrapper>
      <h1>Bienvenue {profileResponse.data?.contact.firstname}</h1>
      <p>
        En cliquant sur l'onglet "Ma conformité", vous trouverez les différentes
        étapes de conformité nous permettant ensuite de vous faire des
        propositions de placements adaptées à votre situation et en adéquation
        avec vos objectifs.
      </p>
      <p>Vous pourrez finaliser votre profil financier.</p>
      <div id="followMyConformityBtnWrapper">
        <Button className="ant-btn ant-btn-primary">
          <Link href="/conformite">Suivre ma conformité</Link>
        </Button>
      </div>
    </HomeWrapper>
  ) : (
    <LoadingSpinner />
  );
}

export default Home;
