import React from 'react';
import Layout from '../components/Layout/Layout';

const About = () => {
  return (
    <Layout title={"About us - Tanmay Air Tech"}>
        <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Welcome to Tanmay Air Tech Website, your trusted source for high-quality compressors and compressor accessories. With  years of experience in the industry, we pride ourselves on delivering top-notch products and exceptional customer service.

At Tanmay Air Tech, we understand the importance of reliable equipment for your business or personal projects. That's why we offer a wide range of compressors to meet your specific needs, whether you're a professional contractor, a hobbyist, or a DIY enthusiast.

Our team is dedicated to providing you with expert guidance and support throughout your compressor purchasing journey. From helping you select the right product to offering maintenance tips and troubleshooting advice, we're here to ensure your satisfaction every step of the way.

In addition to our comprehensive selection of compressors, we also carry a variety of accessories and parts to enhance the performance and functionality of your equipment. Plus, with fast shipping and hassle-free returns, shopping with us is convenient and stress-free.

Thank you for choosing Tanmay Air Tech. We look forward to serving all your compressor needs and helping you tackle your next project with confidence.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;