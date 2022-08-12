import Folder from "../containers/Folder/Folder";

export default function folderPage(props) {
  return <Folder {...props} />;
}

export async function getStaticProps() {
  const res = await fetch(process.env.API_URL + "activities");
  const { data: activities } = await res.json();

  return { props: { activities } };
}
