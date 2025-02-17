import Image from "next/image";
import React from "react"
import { footerContact, footerMenu, footerMenuServicesleft, footerMenuServicesRight, footerText, socialIcons } from "../data/data";

const FooterComponent = (props) => {

  const year = new Date().getFullYear();

  return (
    <>
      <div className="bg-4pblack text-white">
        <div className="container flex flex-wrap lg:flex-nowrap px-8 lg:px-0 pt-8 lg:pt-0">
          <div className="lg:w-7/12 w-full content-center">
            <a href="/">
              <Image
                src="/images/logo-white.svg"
                alt="Logo without bottom line"
                sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
                srcSet="/images/logo-white.svg 768w, /images/logo-white.svg 1024w"
                width={442}
                height={89}
              />
            </a>
          </div>
          <div className="lg:w-5/12 w-full lg:py-16 py-8 pe-4">
            <p className="leading-5 pb-4">{footerText}</p>
            <ul className="flex">
              {socialIcons.map((data, index) => (
                <li key={index} className="mx-2">
                  <Image
                  src={`/images/${data.icon}.svg`}
                  alt={data.alt}
                  sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
                  srcSet={`/images/${data.icon}.svg 768w, /images/${data.icon}.svg 1024w`}
                  width={30}
                  height={30}
                />
                </li>
              ))}
              <li></li>
            </ul>
          </div>
        </div>
        <div className="bg-white container pt-[2px]"></div>
        <div className="container flex flex-wrap lg:flex-nowrap lg:px-[98px] px-8 py-8">
          <div className="lg:w-2/12 w-full mb-12 lg:mb-0">
            <p className="font-bold pb-4">Web Site Map</p>
            <div className="bg-4pblue pt-[3px] lg:w-[99px] mb-4"></div>
            <ul className="">
              {footerMenu.map((data, index) => (
                <a key={index} href={data.link} className="hover:text-4pred">
                  <li className="pb-4">
                    {data.name}
                  </li>
                </a>
              ))}
            </ul>
          </div>
          <div className="lg:w-6/12 w-full mb-12 lg:mb-0">
            <p className="font-bold pb-4">Services</p>
            <div className="bg-4pblue pt-[3px] lg:w-[99px] mb-4"></div>
            <div className="flex flex-wrap lg:flex-nowrap">
              <ul className="w-[47%] me-4 lg:me-0">
                {footerMenuServicesleft.map((data, index) => (
                  <a key={index} href={data.link} className="hover:text-4pred">
                    <li className="pb-4 leading-5">
                      {data.name}
                    </li>
                  </a>
                ))}
              </ul>

              <ul className="w-[48%]">
                {footerMenuServicesRight.map((data, index) => (
                  <a key={index} href={data.link} className="hover:text-4pred leading-3">
                  <li className="pb-4 leading-5">
                    {data.name}
                  </li>
                  </a>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:w-4/12 w-full mb-12 lg:mb-0">
            <p className="font-bold pb-4">Contact Info</p>
            <div className="bg-4pblue pt-[3px] lg:w-[99px] mb-4"></div>
            <ul className="">
                {footerContact.map((data, index) => (
                  <a key={index} href={data.link} className="hover:text-4pred">
                    <li className="pb-4 leading-5 flex items-start">
                      <Image
                        src={`/images/${data.icon}.svg`} 
                        alt="Logo without bottom line"
                        sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
                        srcSet={`/images/${data.icon}.svg 768w, /images/${data.icon}.svg 1024w`}
                        width={27}
                        height={27} 
                        className="me-2"
                      />
                      {data.name}
                    </li>
                  </a>
                ))}
              </ul>
          </div>
        </div>
        <div className="bg-white container pt-[2px]"></div>

        <div className="container flex flex-wrap lg:flex-nowrap">
          <div className="lg:w-1/2 w-full content-center justify-items-center lg:justify-items-start">
            <p>All rights reserved | Copyright © <span>{year}</span> 4Print</p>
          </div>
          <div className="lg:w-1/2 w-full flex flex-wrap lg:flex-nowrap items-center py-8 justify-around">
            <p className="w-full px-8 lg:px-0 text-center lg:text-start lg:w-11/12">
              <a href="https://qadigitalads.com/en/home/" target="_black" className="hover:text-4pred">Maryland Web Design and Development by QA Digital Ads</a>
            </p>
            <a href="https://qadigitalads.com/en/home/" className="w-full lg:w-1/12 justify-items-center pt-6 lg:pt-0">
              <Image
                src='/images/logo-QA-Digital-Ads.svg' 
                alt="logo QA Digital Ads"
                sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
                srcSet={`/images/logo-QA-Digital-Ads.svg 768w, /images/logo-QA-Digital-Ads.svg 1024w`}
                width={62}
                height={62}
              />            
            </a>
          </div>
        </div>
      </div>
    </>
  )
};

export default FooterComponent;
