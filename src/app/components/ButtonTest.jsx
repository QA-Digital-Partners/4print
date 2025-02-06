import React from "react"
import Image from "next/image";

const Buttontest = ({buttonText, buttonBG, textColor, iconOption, buttonLink}) => {
    const iconList = ['ib-white-blue.svg', 'ib-blue-white.svg', 'ir-white-blue.svg']

  return (
    <>
<a 
  href={buttonLink} 
  className={`btn5 flex rounded-lg items-center font-bold shadow-[0_4px_4px_0px_rgba(0,0,0,0.1)] ${buttonBG}`}
>
  <Image
    src={`/images/${iconList[iconOption]}`} 
    alt="logo QA Digital Ads"
    width={44}
    height={46}
  />
  <p className={`ps-8 ${textColor}`}>{buttonText}</p>            
</a>


    </>
  )
};

export default Buttontest;
