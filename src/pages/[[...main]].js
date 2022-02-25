import { useRouter } from "next/router";

import LoadingSpinner from "../components/global/LoadingSpinner/LoadingSpinner";
import SignIn from "../components/Connexion/SignIn/SignIn";
import IndexContainer from "../containers/Index/IndexContainer";
import SignUp from "../components/Connexion/SignUp/SignUp";
import Tenant from "../components/Tenant/Tenant";

const Main = (props) => {
  const router = useRouter();

  if (router.asPath != "/[[...main]]") {
    switch (router.asPath) {
      case "/":
      case "/index":
        return <IndexContainer loggedIn={props.loggedIn} />;
      case "/signin":
        return <SignIn loggedIn={props.loggedIn} />;
      case "/signup":
        return <SignUp loggedIn={props.loggedIn} />;
      case "/tenant":
        return <Tenant loggedIn={props.loggedIn} />;

      default:
        return <DefaultErrorPage statusCode={404} />;
    }
  } else {
    return <LoadingSpinner />;
  }
};

export default Main;
