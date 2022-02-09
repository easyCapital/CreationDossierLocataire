import Home from "../containers/Home/Home";
import Nous from "../containers/Nous/Nous";
import Outil from "../containers/Outil/Outil";
import Guides from "../containers/Guides/Guides";
import Tarifs from "../containers/Tarifs/Tarifs";
import Securite from "../containers/Securite/Securite";
import { useRouter } from "next/router";
import Profil from "../containers/Profil/Profil";
import EspaceHomePage from "../containers/EspaceHomePage/EspaceHomePage";
import EspaceHomePageNew from "../containers/EspaceHomePage/EspaceHomePageNew";
import Optimisations from "../containers/Optimisations/Optimisations";
import Contact from "../containers/Contact/contact";
import ComebackLater from "../containers/ComebackLater/ComebackLater";
import DefaultErrorPage from "next/error";

import SignInPage from "./signin";
import SignUpPage from "./signup";
import Conformite from "../containers/Conformite/Conformite";
import LoadingSpinner from "../components/global/LoadingSpinner/LoadingSpinner";
import SecondHome from "../containers/SecondHome/SecondHome";
import IndexPage from "./indd";

const Main = () => {
  const router = useRouter();

  if (router.asPath != "/[[...main]]") {
    switch (router.asPath) {
      case "/":
        return <IndexPage />;
      case "/index":
        return <IndexPage />;
      case "/signin":
        return <SignInPage />;
      case "/signup":
        return <SignUpPage />;
      case "/conformite":
        return <Conformite />;npm
      case "/home":
        return <SecondHome />;
      case "/nous":
        return <Nous />;
      case "/outil":
        return <Outil />;
      case "/guides":
        return <Guides />;
      case "/tarifs":
        return <Tarifs />;
      case "/securite":
        return <Securite />;
      case "/profil":
        return <Profil />;
      case "/espaceHomePage":
        return <EspaceHomePage />;
      case "/espaceHomePageNew":
        return <EspaceHomePageNew />;
      case "/optimisations":
        return <Optimisations />;
      case "/contact":
        return <Contact />;
      case "/comebacklater":
        return <ComebackLater />;

      default:
        return <DefaultErrorPage statusCode={404} />;
    }
  } else {
    return <LoadingSpinner />;
  }
};

export default Main;
