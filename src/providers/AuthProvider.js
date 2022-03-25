import { useRouter } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../components/global/LoadingSpinner/LoadingSpinner";
import { LoadProfileAction } from "../redux/actions/ProfileActions";

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
    if (logAction?.authResponse?.message == "succefully logged out") {
      dispatch(LoadProfileAction());
    }
  }, [logAction]);

  useEffect(() => {
    setLoaded(true);
    console.log(profileResponse)
  }, [profileResponse]);

  const state = useSelector((state) => state);
  useEffect(() => {
    setLoggedIn(state?.userDetails?.userProfile?.data != null);
    if (state.userDetails.userProfile.data === null) {
      if (router.asPath == "/tenant") {
        router.push("/");
      }
    }

    if (state.userDetails.userProfile.data !== undefined && state.userDetails.userProfile.data !== null) {
      if (["/signin", "/signup"].includes(router.asPath)) {
        router.push("/tenant");
      }
    }
  }, [state]);

  return loaded ? (
    <>{React.cloneElement(children, { loggedIn: loggedIn })}</>
  ) : (
    <LoadingSpinner />
  );
}
