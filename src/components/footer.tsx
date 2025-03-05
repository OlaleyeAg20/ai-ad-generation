import Image from "next/image";
import Link from "next/link";
import React from "react";

interface FooterLink {
  label: string;
  href: string;
}

const companyLinks: FooterLink[] = [
  { label: "About Us", href: "#" },
  { label: "How it Works", href: "#" },
  { label: "FAQs", href: "#" },
  { label: "Pricing", href: "#" },
];

const featuresLinks: FooterLink[] = [
  { label: "Image Ads", href: "#" },
  { label: "Video Ads", href: "#" },
  { label: "Community", href: "#" },
  { label: "Templates", href: "#" },
];

const supportLinks: FooterLink[] = [
  { label: "Blogs", href: "#" },
  { label: "Help Center", href: "#" },
  { label: "API Docs", href: "#" },
  { label: "Contact Us", href: "#" },
];

const FooterColumn: React.FC<{ title: string; links: FooterLink[] }> = ({
  title,
  links,
}) => {
  return (
    <div className="inline-flex flex-col justify-start items-start gap-[16px] w-full sm:w-[165px]">
      <div className="inline-flex justify-center items-center gap-[10px]">
        <div className="text-black text-2xl font-semibold">{title}</div>
      </div>
      {links.map((link) => (
        <div
          key={link.label}
          className="inline-flex justify-start items-center gap-[16px] p-[4px]"
        >
          <a
            href={link.href}
            className="text-gray-600 text-lg font-medium hover:text-purple-700"
          >
            {link.label}
          </a>
        </div>
      ))}
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-6xl w-full mx-auto py-16 flex flex-col items-start gap-16 px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 w-full">
          <div className="flex flex-col justify-between items-start w-full lg:w-auto">
            <div className="pl-4">
              <Link href="/">
                <Image
                  src="/header-logo.svg"
                  alt="Adgen AI Logo"
                  width={150}
                  height={40}
                  priority
                />
              </Link>
            </div>
            <div className="flex flex-col justify-between items-start mt-8 lg:mt-0">
              <div className="flex flex-col justify-start items-start gap-5">
                <div className="text-purple-700 text-2xl font-semibold">
                  Smarter Ads,{" "}
                </div>
                <div className="text-gray-800 text-2xl font-semibold">
                  Faster Results
                </div>
              </div>
              <div className="flex flex-col justify-start items-start gap-6 mt-6">
                <div className="inline-flex justify-start items-start gap-[21px]">
                  <div className="flex justify-start items-center gap-[21px]">
                    <div className="flex justify-start items-center gap-[10px] p-[10px]">
                      <div className="flex justify-center items-center w-[18px] h-[18px] pt-[2.08px] pb-[1.5px] pl-[2.08px] pr-[1.84px]">
                        <div className="relative w-[14.07px] h-[14.42px]">
                          <div className="absolute top-0 left-0 w-[13.48px] h-[13.48px] rounded-full border-[1.5px] border-[#2A2A2A]" />
                          <div
                            data-svg-wrapper
                            className="absolute left-[11.43px] top-[11.78px]"
                          >
                            <svg
                              width="5"
                              height="5"
                              viewBox="0 0 5 5"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1.31543 0.867188L3.95845 3.50334"
                                stroke="#2A2A2A"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-start items-center gap-[10px] p-[10px]">
                      <div className="flex justify-center items-center w-[18px] h-[18px] pt-[2.08px] pb-[1.5px] pl-[2.08px] pr-[1.84px]">
                        <div className="relative w-[14.07px] h-[14.42px]">
                          <div className="absolute top-0 left-0 w-[13.48px] h-[13.48px] rounded-full border-[1.5px] border-[#2A2A2A]" />
                          <div
                            data-svg-wrapper
                            className="absolute left-[11.43px] top-[11.78px]"
                          >
                            <svg
                              width="5"
                              height="5"
                              viewBox="0 0 5 5"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1.31543 0.867188L3.95845 3.50334"
                                stroke="#2A2A2A"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-start items-center gap-[10px] p-[10px]">
                      <div className="flex justify-center items-center w-[18px] h-[18px] pt-[2.08px] pb-[1.5px] pl-[2.08px] pr-[1.84px]">
                        <div className="relative w-[14.07px] h-[14.42px]">
                          <div className="absolute top-0 left-0 w-[13.48px] h-[13.48px] rounded-full border-[1.5px] border-[#2A2A2A]" />
                          <div
                            data-svg-wrapper
                            className="absolute left-[11.43px] top-[11.78px]"
                          >
                            <svg
                              width="5"
                              height="5"
                              viewBox="0 0 5 5"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1.31543 0.867188L3.95845 3.50334"
                                stroke="#2A2A2A"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-start items-center gap-[10px] p-[10px]">
                      <div className="flex justify-center items-center w-[18px] h-[18px] pt-[2.08px] pb-[1.5px] pl-[2.08px] pr-[1.84px]">
                        <div className="relative w-[14.07px] h-[14.42px]">
                          <div className="absolute top-0 left-0 w-[13.48px] h-[13.48px] rounded-full border-[1.5px] border-[#2A2A2A]" />
                          <div
                            data-svg-wrapper
                            className="absolute left-[11.43px] top-[11.78px]"
                          >
                            <svg
                              width="5"
                              height="5"
                              viewBox="0 0 5 5"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1.31543 0.867188L3.95845 3.50334"
                                stroke="#2A2A2A"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch text-[#2A2A2A] text-[16px] font-medium leading-[24px] font-nunito break-words">
                  Copyright. All rights reserved.
                </div>
              </div>
            </div>
          </div>
          <div className="inline-flex max-w-[814px] w-full justify-between items-start flex-wrap lg:flex-nowrap">
            <FooterColumn title="Company Info" links={companyLinks} />
            <FooterColumn title="Features" links={featuresLinks} />
            <FooterColumn title="Support & Resources" links={supportLinks} />
          </div>
        </div>
        <div className="inline-flex justify-start MD:items-center gap-[36px] w-full flex-col lg:flex-row">
          <div className="w-[88px] h-[96px] bg-[#F8E6F8] mb-4 lg:mb-0" />
          <p className="text-[#5F5F5F] text-[20px] font-normal leading-[28px] break-words md:text-center lg:text-left">
            Adgen AI helps you generate video and image advertisements tailored
            for different platforms, audiences, and cultural contexts, without
            needing design or marketing expertise.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
