import Tenant from "../components/Tenant/Tenant";
import TenantContainer from "../containers/tenant/TenantContainer";

const TenantPage = () => {
  return (
    <TenantContainer>
      <Tenant />
    </TenantContainer>
  );
};

export default TenantPage;
