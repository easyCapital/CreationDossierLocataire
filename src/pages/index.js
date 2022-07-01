import Home from "../containers/Home/Home";

export default function indexPage(props) {
  return <Home loggedIn={props.loggedIn} />;
}
