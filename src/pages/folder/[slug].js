import Folder from "../../containers/Folder/Folder";

export default function folderPage(props) {
  return <Folder {...props} />;
}

export async function getServerSideProps() {
  const res = await fetch(process.env.API_URL + "activities");
  const { data: activities } = await res.json();
  const res2 = await fetch(process.env.API_URL + "guarantees");
  const { data: guarantees } = await res2.json();

  return { props: { activities, guarantees } };
}
