import SignUp from "../components/Connexion/SignUp/SignUp";

export default function indexPage(props) {
  return <SignUp loggedIn={props.loggedIn} />;
}
