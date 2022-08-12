import Folder from "../../containers/Folder/Folder";
import axios from "axios";

export default function folderPage(props) {
  return <Folder {...props} />;
}

export async function getServerSideProps() {
  const { data: activities } = await axios.get(
    process.env.API_URL + "activities"
  );

  const { data: guarantees } = await axios.get(
    process.env.API_URL + "guarantees"
  );

  return { props: { activities, guarantees } };
}
