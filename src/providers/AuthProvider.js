import { useRouter } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/global/Footer/Footer";
import LoadingSpinner from "../components/global/LoadingSpinner/LoadingSpinner";
import { LoadProfileAction } from "../redux/actions/ProfileActions";
import { useMediaQuery } from "react-responsive";

export default function AuthProvider({ children }) {
  const [loaded, setLoaded] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();

  const profileResponse = useSelector((state) => state.userDetails.userProfile);
  const logAction = useSelector((state) => state.userAuth);

  useEffect(() => {
    dispatch(LoadProfileAction());
  }, []);

  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    if (logAction?.authResponse?.message == "User succesfully logged out") {
      dispatch(LoadProfileAction());
    }
  }, [logAction]);

  useEffect(() => {
    setLoaded(true);
  }, [profileResponse]);

  const state = useSelector((state) => state);
  useEffect(() => {
    setLoggedIn(state?.userDetails?.userProfile?.data != null);
    if (state.userDetails.userProfile.data === null) {
      if (router.asPath.includes("/folder")) {
        router.push("/");
      }
    }

    if (
      state.userDetails.userProfile.data !== undefined &&
      state.userDetails.userProfile.data !== null
    ) {
      if (["/signin", "/signup"].includes(router.asPath)) {
        router.push("/folder");
      }
    }
  }, [state]);

  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return loaded ? (
    <>
      {React.cloneElement(children, { loggedIn, profileResponse, isDesktop })}
      {["/mes-dossiers", "/"].includes(router.asPath) ? <Footer /> : null}
    </>
  ) : (
    <LoadingSpinner />
  );
}
