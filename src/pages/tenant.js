import Tenant from "../components/Tenant/Tenant";

export default function indexPage(props) {
  return <Tenant loggedIn={props.loggedIn} />;
}
