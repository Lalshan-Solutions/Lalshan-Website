import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Lalshan Solutions Pvt Ltd",
  description: "Get in touch with Lalshan Solutions to discuss how our technology solutions can transform your business.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        badge="Get In Touch"
        pageName="Contact Us"
        description="Get in touch with us to discuss how our technology solutions can transform your business and meet your specific needs."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
