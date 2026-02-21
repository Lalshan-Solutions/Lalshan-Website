import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Lalshan Solutions Pvt Ltd",
  description: "Privacy Policy and Data Protection guidelines for Lalshan Solutions Pvt Ltd.",
};

const PrivacyPolicyPage = () => {
  return (
    <>
      <Breadcrumb
        badge="Data Protection"
        pageName="Privacy Policy"
        description="Your privacy is important to us. Learn how Lalshan Solutions Pvt Ltd collects, uses, and protects your personal information."
      />

      <section className="pb-[120px] pt-[60px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white sm:text-3xl text-primary">
                  1. Information We Collect
                </h3>
                <p className="mb-8 text-base text-body-color dark:text-body-color-dark">
                  Lalshan Solutions ("we," "our," "us") collects personal data strictly necessary to provide our digital and IT consulting services. This data might include your name, email address, phone number, and any communication you share when reaching out through our contact forms or customer support.
                </p>

                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white sm:text-3xl text-primary">
                  2. Use of Information
                </h3>
                <p className="mb-8 text-base text-body-color dark:text-body-color-dark">
                  Information obtained is utilized to accurately scope your IT projects, communicate development milestones, reply to your inquiries, improve our services, and issue transactional/billing artifacts. We do not use your proprietary information for marketing purposes without explicit consent.
                </p>

                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white sm:text-3xl text-primary">
                  3. Information Sharing and Disclosure
                </h3>
                <p className="mb-8 text-base text-body-color dark:text-body-color-dark">
                  We do not sell, rent, or inappropriately distribute your personal or company data. Information may only be disclosed to trusted third-party service providers (such as hosting partners) who assist us in operating our website and fulfilling your IT requests, provided those parties agree to keep this information strictly confidential.
                </p>

                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white sm:text-3xl text-primary">
                  4. Data Security
                </h3>
                <p className="mb-8 text-base text-body-color dark:text-body-color-dark">
                  Lalshan Solutions employs rigorous technical and administrative security measures to protect your physical and digital data from unauthorized access, accidental loss, disclosure, or destruction. However, no data transmission over the Internet can be unconditionally guaranteed to be 100% secure.
                </p>

                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white sm:text-3xl text-primary">
                  5. Updates to This Policy
                </h3>
                <p className="mb-8 text-base text-body-color dark:text-body-color-dark">
                  We reserve the right to modify this privacy policy at any time. Any changes will be updated on this page directly, and significant revisions concerning data utilization will be actively communicated to our existing clients.
                </p>

                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white sm:text-3xl text-primary">
                  Contact Us
                </h3>
                <p className="mb-8 text-base text-body-color dark:text-body-color-dark">
                  For privacy-related questions or data deletion requests, you can reach our team directly at info@lalshansolutions.in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicyPage;
