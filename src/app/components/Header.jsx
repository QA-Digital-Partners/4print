"use client"
import React, { useState } from "react"
import Image from "next/image";
import { headerMenu } from "../data/data";
import Button4P from "./Button";

const HeaderComponent = () => {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="container lg:py-8 py-4 z-10 relative">
        <div className="rounded-xl border-1 border-4plight-grey lg:py-8 py-4 bg-white flex px-8 shadow-usual bg-white flex-wrap lg:flex-nowrap">

          <div className="lg:w-3/12 w-8/12">
          <Image
            src="/images/Logo-no-lined.svg"
            alt="Logo without bottom line"
            sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
            srcSet="/images/Logo-no-lined.svg 768w, /images/Logo-no-lined.svg 1024w"
            width={276}
            height={56}
            className="w-[12rem] lg:w-full"
          />
          </div>

          <div className="w-7/12 content-center text-end pe-8 hidden lg:block">
          <nav>
            {headerMenu.map((data, index) => (
              <a key={index} href={data.link} className="mx-4 uppercase text-[15px]">{data.name}</a>
            ) 
            )}
          </nav>
          </div>
          <div className="w-2/12 hidden lg:block">
            <Button4P buttonText={"Call Us"} buttonBgAnimation={"btn-red-to-blue"} textColor={"text-white"} buttonLink={"tel:+14439981717"} iconOption={0}/>
          </div>

          {/********* Seccion rresponsive ********/}

          <div className="w-2/12 lg:hidden text-center">
          <button className="lg:hidden p-2 rounded-md border border-gray-500 " aria-label="responsive menu" type="button" onClick={() => setIsOpen(!isOpen)} >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
          </button>
          </div>

          <div className="w-2/12 lg:hidden justify-items-center">
            <a href="tel:+114439981717">
            <Image
              src="/images/ib-call-resp.svg"
              alt="Logo without bottom line"
              sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
              srcSet="/images/ib-call-resp.svg 768w, /images/ib-call-resp.svg 1024w"
              width={43}
              height={46}
            />
            </a>
          </div>

          <div className={`w-full absolute top-[95px] bg-white right-0 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"} lg:hidden rounded-md`}>
            <ul>
            {headerMenu.map((data, index) => (
              <a key={index} href={data.link}><li  className="mx-4 uppercase text-[18px] py-2">{data.name}</li></a>
            )
            )}
            </ul>
          </div>         
        </div>
      </div>
    </>
  )
};

export default HeaderComponent;
