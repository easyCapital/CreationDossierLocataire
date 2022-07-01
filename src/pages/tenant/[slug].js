import { useRouter } from "next/router";
import Tenant from "../../components/Tenant/Tenant";

export default function slug() {
  const router = useRouter();
  return (
    <>
      <Tenant slug={router.query.slug} />
    </>
  );
}
