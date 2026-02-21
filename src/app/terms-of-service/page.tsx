import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Lalshan Solutions Pvt Ltd",
  description: "Terms of Service for Lalshan Solutions Pvt Ltd.",
};

const TermsOfServicePage = () => {
  return (
    <>
      <Breadcrumb
        badge="Legal Information"
        pageName="Terms of Service"
        description="Please read these Terms of Service carefully before using our website or engaging with Lalshan Solutions Pvt Ltd."
      />

      <section className="pb-[120px] pt-[60px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white sm:text-3xl text-primary">
                  1. Acceptance of Terms
                </h3>
                <p className="mb-8 text-base text-body-color dark:text-body-color-dark">
                  By accessing and using the services of Lalshan Solutions Pvt Ltd ("Company", "we", "our", "us"), you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
                </p>

                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white sm:text-3xl text-primary">
                  2. Description of Service
                </h3>
                <p className="mb-8 text-base text-body-color dark:text-body-color-dark">
                  Lalshan Solutions provides custom web and mobile app development, IT consulting, IoT systems, cloud services, and AI solutions. We reserve the right to modify, suspend, or discontinue any aspect of our service at any time without prior notice.
                </p>

                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white sm:text-3xl text-primary">
                  3. Intellectual Property Rights
                </h3>
                <p className="mb-8 text-base text-body-color dark:text-body-color-dark">
                  All digital assets, code, designs, and content provided by Lalshan Solutions during a project remain the intellectual property of our company until full payment is received and specific copyright transfers are executed through formal agreements.
                </p>

                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white sm:text-3xl text-primary">
                  4. Limitation of Liability
                </h3>
                <p className="mb-8 text-base text-body-color dark:text-body-color-dark">
                  Lalshan Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service.
                </p>

                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white sm:text-3xl text-primary">
                  5. Governing Law
                </h3>
                <p className="mb-8 text-base text-body-color dark:text-body-color-dark">
                  These Terms shall be governed and construed in accordance with the laws of Kerala, India, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
                </p>

                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white sm:text-3xl text-primary">
                  Contact Us
                </h3>
                <p className="mb-8 text-base text-body-color dark:text-body-color-dark">
                  If you have any questions about these Terms, please contact us at info@lalshansolutions.in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsOfServicePage;
