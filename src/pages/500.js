import Error from "../components/Error/Error";

export default function Custom500() {
  return <Error statusCode={500} />;
}
