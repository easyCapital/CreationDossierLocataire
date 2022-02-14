import { useRouter } from "next/router";

import SignInPage from "./signin";
import SignUpPage from "./signup";
import LoadingSpinner from "../components/global/LoadingSpinner/LoadingSpinner";  
import IndexPage from "./indd";
import TenantPage from "./tenant";

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
      case  "/tenant":
        return <TenantPage/>

      default:
        return <DefaultErrorPage statusCode={404} />;
    }
  } else {
    return <LoadingSpinner />;
  }
};

export default Main;
