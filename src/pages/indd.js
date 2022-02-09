import Head from 'next/head'
import { useState, useEffect } from "react";
import "aos/dist/aos.css";
import "react-inputs-validation/lib/react-inputs-validation.min.css";
import IndexContainer from '../containers/Index/IndexContainer';

const IndexPage = () => {
  return (
    <div>

      <Head>
        <title>Passloc</title>
        
      </Head>
      <IndexContainer/>
      
    </div>
  );
};

export default IndexPage;
