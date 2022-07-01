import Folder from "../../containers/Folder/Folder";

export default function folderPage(props) {
  return <Folder {...props} />;
}

export async function getServerSideProps(context) {
  const res = await fetch("https://app.passloc.fr/api/activities");
  const { data: activities } = await res.json();
  const res2 = await fetch("https://app.passloc.fr/api/guarantees");
  const { data: guarantees } = await res2.json();

  return { props: { activities, guarantees } };
}
