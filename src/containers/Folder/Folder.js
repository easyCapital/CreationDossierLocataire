import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useSWR from "swr";
import GarantForm from "../../components/Folder/GarantForm";
import PiecesForm from "../../components/Folder/PiecesForm";
import PresentationForm from "../../components/Folder/PresentationForm";
import ResourceForm from "../../components/Folder/ResourceForm";
import SituationForm from "../../components/Folder/SituationForm";
import HttpService from "../../services/HttpService";
import { FolderWrapper } from "./Folder.style";

export default function Folder({ activities, guarantees }) {
  const profileResponse = useSelector((state) => state.userDetails.userProfile);
  const fetcher = async (url) => {
    const token = await localStorage.getItem("user-token");
    return fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
        "Content-type": "application/json",
        "Cache-Control": "private",
        Accept: "application/json",
      },
    }).then((r) => r.json());
  };
  const { data, mutate } = useSWR(
    profileResponse?.data?.user
      ? "https://app.passloc.fr/api/users/" + profileResponse.data.user.id
      : null,
    fetcher
  );
  const user = data?.data.user;
  const router = useRouter();
  const folder = user?.folders.find((e) => e.slug === router.query.slug);

  const [currentStep, setCurrentStep] = useState();
  useEffect(() => {
    if (folder) {
      setCurrentStep(parseInt(folder.current_step));
    }
  }, [user]);

  useEffect(() => {
    mutate();
  }, [currentStep]);

  const handleCurrentStepChanged = (isNext) => {
    const newStep = currentStep + (isNext ? 1 : -1);
    setCurrentStep(newStep);
    const data = {
      current_step: newStep,
    };
    let url = "folders/" + folder.slug;
    new HttpService().putData(data, url);
  };

  const arePreviousItemsFilled = (name, values, fieldsToFill) => {
    let ok = true;
    Object.keys(values)
      .filter((key) => (fieldsToFill ? fieldsToFill.includes(key) : true))
      .find((key) => {
        if (key == name) {
          return true;
        } else {
          if (values[key] == null) {
            ok = false;
            return true;
          }
        }
      });
    return ok;
  };

  const validateMessages = {
    types: {
      email: "Veuillez spécifier une adresse e-mail valide.",
    },
  };

  const formsProps = {
    arePreviousItemsFilled,
    validateMessages,
    user,
    folder,
    activities,
    guarantees,
    handleCurrentStepChanged,
  };

  return (
    <FolderWrapper>
      {currentStep == 1 && <PresentationForm {...formsProps} />}
      {currentStep == 2 && <SituationForm {...formsProps} />}
      {currentStep == 3 && <ResourceForm {...formsProps} />}
      {currentStep == 4 && <GarantForm {...formsProps} />}
      {currentStep == 5 && <PiecesForm {...formsProps} />}
    </FolderWrapper>
  );
}
