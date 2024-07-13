import React from 'react';
import Layout from '../components/Layout/Layout';

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
      <div className="col-md-6 ">
          <img
            src="/images/contactus.jpg"
            alt="poilcy"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
        <h6 className="text-justify mt-2">
        <h6>Privacy Policy</h6>
        <h6>Terms of Service (ToS)</h6>
        <h6>Return Policy</h6>
        <h6> Warranty Policy </h6>
        <h6>Shipping Policy</h6>
        <h6> Cookie Policy</h6>
        <h6>Security Policy</h6>
        </h6>
        </div>
        </div>
    </Layout>
  );
};

export default Policy;