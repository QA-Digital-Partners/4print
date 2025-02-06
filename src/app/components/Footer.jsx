import Image from "next/image";
import React from "react"
import { footerContact, footerMenu, footerMenuServicesleft, footerMenuServicesRight, footerText, socialIcons } from "../data/data";

const FooterComponent = (props) => {

  const year = new Date().getFullYear();

  return (
    <>
      <div className="bg-4pblack text-white">
        <div className="container flex">
          <div className="w-7/12 content-center">
            <Image
              src="/images/Logo-no-lined.svg"
              alt="Logo without bottom line"
              sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
              srcSet="/images/Logo-no-lined.svg 768w, /images/Logo-no-lined.svg 1024w"
              width={442}
              height={89}
            />
          </div>
          <div className="w-5/12 py-16 pe-4">
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
        <div className="container flex px-[98px] py-8">
          <div className="w-2/12">
            <p className="font-bold pb-4">Web Site Map</p>
            <div className="bg-4pblue pt-[3px] lg:w-[99px] mb-4"></div>
            <ul className="">
              {footerMenu.map((data, index) => (
                <li key={index} className="pb-4">
                  <a href={data.link} className="hover:text-4pred">{data.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-6/12">
            <p className="font-bold pb-4">Services</p>
            <div className="bg-4pblue pt-[3px] lg:w-[99px] mb-4"></div>
            <div className="flex">
              <ul className="lg:w-[42%]">
                {footerMenuServicesleft.map((data, index) => (
                  <li key={index} className="pb-4 leading-5">
                    <a href={data.link} className="hover:text-4pred">{data.name}</a>
                  </li>
                ))}
              </ul>

              <ul className="lg:w-[50%]">
                {footerMenuServicesRight.map((data, index) => (
                  <li key={index} className="pb-4 leading-5">
                    <a href={data.link} className="hover:text-4pred leading-3">{data.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-4/12">
            <p className="font-bold pb-4">Contact Info</p>
            <div className="bg-4pblue pt-[3px] lg:w-[99px] mb-4"></div>
            <ul className="">
                {footerContact.map((data, index) => (
                  <li key={index} className="pb-4 leading-5 flex items-start">
                    <Image
                      src={`/images/${data.icon}.svg`} 
                      alt="Logo without bottom line"
                      sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
                      srcSet={`/images/${data.icon}.svg 768w, /images/${data.icon}.svg 1024w`}
                      width={27}
                      height={27}
                    />
                    <a href={data.link} className="hover:text-4pred ms-2">{data.name}</a>
                  </li>
                ))}
              </ul>
          </div>
        </div>
        <div className="bg-white container pt-[2px]"></div>

        <div className="container flex">
          <div className="w-1/2 content-center">
            <p>All rights reserved | Copyright © <span>{year}</span> 4Print</p>
          </div>
          <div className="w-1/2 flex items-center py-8 justify-around">
            <p>
              <a href="https://qadigitalads.com/en/home/" target="_black" className="hover:text-4pred">Maryland Web Design and Development by QA Digital Ads</a>
            </p>
            <a href="https://qadigitalads.com/en/home/">
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
