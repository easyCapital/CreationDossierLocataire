import { Space, Spin } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../components/global/LoadingSpinner/LoadingSpinner";
import { LoadProfileAction } from "../redux/actions/ProfileActions";

export default function AuthProvider({ children }) {
  const [loaded, setLoaded] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();

  const profileResponse = useSelector((state) => state.userDetails.userProfile);

  useEffect(() => {
    dispatch(LoadProfileAction());
  }, []);

  useEffect(() => {
    if (router.asPath == "/signin" || router.asPath == "/signup") {
      if (profileResponse?.message == "user profile") {
        router.push("/");
        setLoaded(true);
      } else if (profileResponse?.message == "disconnected") {
        setLoaded(true);
      }
    } else {
      if (!localStorage.getItem("user-token")) {
        router.push("/signin");
        setLoaded(true);
      }
      if (profileResponse?.message == "user profile") {
        setLoaded(true);
      }
    }
  }, [profileResponse]);

  return loaded ? <>{children}</> : <LoadingSpinner />;
}
