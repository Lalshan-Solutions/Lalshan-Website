import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        badge="24/7 Support"
        pageName="Contact Us"
        description="Get in touch with us to discuss how our technology solutions can transform your business and meet your specific needs."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
