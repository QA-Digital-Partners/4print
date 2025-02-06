import React from "react"
import Image from "next/image";
import { headerMenu } from "../data/data";
import Button4P from "./Button";
import Buttontest from "./ButtonTest";

const HeaderComponent = () => {

  return (
    <>
      <div className="container py-8 z-10 relative">
        <div className="rounded-xl border-1 border-4plight-grey py-8 bg-white flex px-8 shadow-usual bg-white">

          <div className="w-3/12">
          <Image
            src="/images/Logo-no-lined.svg"
            alt="Logo without bottom line"
            sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
            srcSet="/images/Logo-no-lined.svg 768w, /images/Logo-no-lined.svg 1024w"
            width={276}
            height={56}
          />
          </div>

          <div className="w-7/12 content-center text-end pe-8">
          <nav>
            {headerMenu.map((data, index) => (
              <a key={index} href={data.link} className="mx-4 uppercase text-[15px]">{data.name}</a>
            ) 
            )}
          </nav>
          </div>
          <div className="w-2/12">
            <Button4P buttonText={"Call Us"} buttonBgAnimation={"btn-red-to-blue"} textColor={"text-white"} buttonLink={"tel:+14439981717SS"} iconOption={0}/>
          </div>
        </div>
      </div>
    </>
  )
};

export default HeaderComponent;
