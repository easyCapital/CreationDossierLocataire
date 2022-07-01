import Folder from "../containers/Folder/Folder";

export default function folderPage(props) {
  return <Folder {...props} />;
}

export async function getStaticProps() {
  const res = await fetch("https://app.passloc.fr/api/activities");
  const { data: activities } = await res.json();

  return { props: { activities } };
}
