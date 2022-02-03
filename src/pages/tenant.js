import Tenant from "../components/Tenant/Tenant";
import TenantContainer from "../containers/Tenant/TenantContainer";
import Head from 'next/head'

const TenantPage = () => {
  return (
    <div>

      <Head>
        <title>Mon projet</title>
      </Head>
      
    <TenantContainer>
      <Tenant />
    </TenantContainer>
    </div>
  );
};

export default TenantPage;
