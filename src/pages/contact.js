import { useRouter } from "next/router";
import Contact from "../containers/Contact/Contact";

export default function contactPage(props) {
  const router = useRouter();

  return (
    <Contact
      buttonText="Envoyer ma demande"
      onSuccess={()=>router.push("/")}
      {...props}
    />
  );
}
