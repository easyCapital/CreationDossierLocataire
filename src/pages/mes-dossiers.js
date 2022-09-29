import { useRouter } from "next/router";
import MyFolders from "../containers/MyFolders/MyFolders";

export default function MyFoldersPage(props) {
  const router = useRouter();

  if (props.profileResponse?.message == "User is not signed in") {
    router.push("/signin");
  }

  return props.profileResponse ? <MyFolders {...props} /> : null;
}
