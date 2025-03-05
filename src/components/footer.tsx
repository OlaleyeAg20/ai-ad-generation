import React from "react";
import Link from "next/link";
import Image from "next/image";

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
    <div className="inline-flex flex-col justify-start items-start gap-[16px] w-[165px] h-[240px]">
      <div className="inline-flex justify-center items-center gap-[10px]">
        <div className="text-black text-[24px] font-[600] leading-[32px] font-nunito break-words">
          {title}
        </div>
      </div>
      {links.map((link) => (
        <div
          key={link.label}
          className="inline-flex justify-start items-center gap-[16px] p-[4px]"
        >
          <a
            href={link.href}
            className="text-[#5F5F5F] text-[18px] font-[700] leading-[28px] font-manrope break-words hover:text-purple-700"
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
    <footer className="flex flex-col items-start gap-[68px] w-[1440px] h-[548px] pt-[66px] pr-[67.23px] pb-[78.202px] pl-[78.802px] bg-white">
      {/* Top Section: Logo, Tagline & Navigation Columns */}
      <div className="inline-flex justify-start items-start gap-[96px] w-[1282.40px] h-[240px] pr-[12px]">
        {/* Logo & Tagline */}
        <div className="inline-flex flex-col justify-between items-start self-stretch">
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
          <div className="inline-flex flex-col justify-between items-start w-[360.40px] h-[240px]">
            {/* Top Half: Tagline */}
            <div className="flex flex-col justify-start items-start gap-[20px] h-[104px]">
              <div className="self-stretch">
                <span className="break-words text-[#B800B8] text-[28px] font-semibold leading-[36px] font-nunito">
                  Smarter Ads,{" "}
                </span>
                <span className="break-words text-[#2A2A2A] text-[28px] font-semibold leading-[36px] font-nunito">
                  Faster Results
                </span>
              </div>
            </div>
            {/* Bottom Half: Icon Row & Copyright */}
            <div className="flex flex-col justify-start items-start gap-[24px] h-[86px]">
              <div className="inline-flex justify-start items-start gap-[21px]">
                {/* Icon Example – repeat or map over icons as needed */}
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

                {/* Add additional icon blocks here as needed */}
              </div>
              <div className="self-stretch text-[#2A2A2A] text-[16px] font-medium leading-[24px] font-nunito break-words">
                Copyright. All rights reserved.
              </div>
            </div>
          </div>
        </div>
        {/* Navigation Columns */}
        <div className="inline-flex w-[814px] h-[240px] justify-between items-start ">
          <FooterColumn title="Company Info" links={companyLinks} />
          <FooterColumn title="Features" links={featuresLinks} />
          <FooterColumn title="Support & Resources" links={supportLinks} />
        </div>
      </div>
      {/* Bottom Section: Copyright and Description */}
      <div className="inline-flex justify-start items-center gap-[36px] w-[1292.77px] h-[95.8px]">
        {/* Vector/Image placeholder */}
        <div className="w-[88px] h-[96px] bg-[#F8E6F8]" />
        <p className="w-[1168.9px] text-[#5F5F5F] text-[20px] font-normal leading-[28px] break-words">
          Adgen AI helps you generate video and image advertisements tailored
          Adgen AI helps you generate video and image adements tailored for
          different platforms, audiences and cultural contexts, without needing
          design or marketing expertise different platforms, audiences and
          cultural contexts, without needing design or marketing expertise.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
