import Folder from "../../containers/Folder/Folder";
import axios from "axios";

export default function folderPage(props) {
  return <Folder {...props} />;
}

export async function getServerSideProps() {
  const {
    data: { data: activities },
  } = await axios.get(process.env.API_URL + "activities");

  const {
    data: { data: maritalStatuses },
  } = await axios.get(process.env.API_URL + "marital_statuses");

  const {
    data: { data: guarantees },
  } = await axios.get(process.env.API_URL + "guarantees");

  return { props: { activities, guarantees, maritalStatuses } };
}
