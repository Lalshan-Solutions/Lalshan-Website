import Image from "next/image";
import Link from "next/link";
import { MailOutline, PhoneOutlined, LocationOnOutlined } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="relative mt-20 pt-20 overflow-hidden bg-white dark:bg-[#0B1121]">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container relative z-10 px-6 mx-auto sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8 text-left">

          {/* Brand & Contact Info */}
          <div className="flex flex-col items-start lg:col-span-4">
            <Link href="/" className="mb-8 inline-block drop-shadow-sm transition-transform hover:scale-105 duration-300">
              <Image
                src="/images/logo/logo-2.svg"
                alt="Lalshan Solutions logo"
                className="w-[160px] dark:hidden"
                width={160}
                height={40}
              />
              <Image
                src="/images/logo/logo.svg"
                alt="Lalshan Solutions logo"
                className="hidden w-[160px] dark:block"
                width={160}
                height={40}
              />
            </Link>
            <p className="mb-8 text-[15px] leading-relaxed text-[#64748B] dark:text-[#94A3B8] max-w-sm">
              We empower businesses through innovative technology, delivering exceptional digital experiences and robust IT solutions globally.
            </p>

            <ul className="space-y-4 w-full">
              <li className="flex items-start gap-4">
                <div className="mt-1 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <LocationOnOutlined fontSize="small" />
                </div>
                <span className="text-[14px] text-[#475569] dark:text-[#CBD5E1] leading-relaxed">
                  21/591, Poojappura X Road,<br />
                  Aroor Grama Panchayat, 688534,<br />
                  Kerala, India
                </span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <PhoneOutlined fontSize="small" />
                </div>
                <a href="tel:+919847236082" className="text-[14px] font-medium text-[#475569] hover:text-primary dark:text-[#CBD5E1] dark:hover:text-white transition-colors">
                  +91 98472 36082
                </a>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <MailOutline fontSize="small" />
                </div>
                <a href="mailto:info@lalshansolutions.in" className="text-[14px] font-medium text-[#475569] hover:text-primary dark:text-[#CBD5E1] dark:hover:text-white transition-colors">
                  info@lalshansolutions.in
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="mb-6 text-[18px] font-bold text-[#1E293B] dark:text-white flex items-center gap-2 flex-row">
              <span className="w-1.5 h-6 bg-primary rounded-full"></span>
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="inline-flex text-[15px] font-medium text-[#64748B] hover:text-primary dark:text-[#94A3B8] dark:hover:text-white transition-all hover:translate-x-1">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="inline-flex text-[15px] font-medium text-[#64748B] hover:text-primary dark:text-[#94A3B8] dark:hover:text-white transition-all hover:translate-x-1">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="inline-flex text-[15px] font-medium text-[#64748B] hover:text-primary dark:text-[#94A3B8] dark:hover:text-white transition-all hover:translate-x-1">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services (Visual Only) */}
          <div className="lg:col-span-3 lg:col-start-8">
            <h3 className="mb-6 text-[18px] font-bold text-[#1E293B] dark:text-white flex items-center gap-2 flex-row">
              <span className="w-1.5 h-6 bg-primary rounded-full"></span>
              Our Expertise
            </h3>
            <ul className="space-y-3">
              <li><span className="inline-flex text-[15px] font-medium text-[#64748B] dark:text-[#94A3B8]">Custom Web Development</span></li>
              <li><span className="inline-flex text-[15px] font-medium text-[#64748B] dark:text-[#94A3B8]">Mobile App Solutions</span></li>
              <li><span className="inline-flex text-[15px] font-medium text-[#64748B] dark:text-[#94A3B8]">IT & Cloud Consulting</span></li>
              <li><span className="inline-flex text-[15px] font-medium text-[#64748B] dark:text-[#94A3B8]">IoT & Systems Integration</span></li>
              <li><span className="inline-flex text-[15px] font-medium text-[#64748B] dark:text-[#94A3B8]">AI Data Insights</span></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="lg:col-span-2 lg:col-start-11">
            <h3 className="mb-6 text-[18px] font-bold text-[#1E293B] dark:text-white flex items-center gap-2 flex-row">
              <span className="w-1.5 h-6 bg-primary rounded-full"></span>
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/terms-of-service" className="inline-flex text-[15px] font-medium text-[#64748B] hover:text-primary dark:text-[#94A3B8] dark:hover:text-white transition-all hover:translate-x-1">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="inline-flex text-[15px] font-medium text-[#64748B] hover:text-primary dark:text-[#94A3B8] dark:hover:text-white transition-all hover:translate-x-1">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Social Line & Copyright */}
        <div className="mt-16 pt-8 pb-10 border-t border-[#E2E8F0] dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[14px] font-medium text-[#64748B] dark:text-[#94A3B8] text-center md:text-left">
            &copy; {new Date().getFullYear()} Lalshan Solutions Pvt Ltd. All Rights Reserved.
          </p>

          <div className="flex items-center justify-center gap-4">
            <a href="#" aria-label="Social Link" className="w-10 h-10 rounded-full bg-[#F1F5F9] dark:bg-white/5 flex items-center justify-center text-[#64748B] dark:text-[#94A3B8] hover:bg-primary hover:text-white dark:hover:bg-primary transition-all duration-300 transform hover:-translate-y-1">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" /></svg>
            </a>
            <a href="#" aria-label="Social Link" className="w-10 h-10 rounded-full bg-[#F1F5F9] dark:bg-white/5 flex items-center justify-center text-[#64748B] dark:text-[#94A3B8] hover:bg-primary hover:text-white dark:hover:bg-primary transition-all duration-300 transform hover:-translate-y-1">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
            </a>
            <a href="#" aria-label="Social Link" className="w-10 h-10 rounded-full bg-[#F1F5F9] dark:bg-white/5 flex items-center justify-center text-[#64748B] dark:text-[#94A3B8] hover:bg-primary hover:text-white dark:hover:bg-primary transition-all duration-300 transform hover:-translate-y-1">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
