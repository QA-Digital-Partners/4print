import Image from "next/image";
import React from "react"


const Button4P = ({buttonText, buttonBgAnimation, textColor, iconOption, buttonLink}) => {

    const iconList = ['ib-white-blue.svg', 'ib-blue-white.svg', 'ir-white-blue.svg', 'ib-link-blue-white.svg']
  return (
    <>
      <a href={buttonLink} className={`flex rounded-lg items-center font-bold shadow-[0_4px_4px_0px_rgba(0,0,0,0.1)] btn-animation ${buttonBgAnimation} btn-1`}>
        <Image
            src={`/images/${iconList[iconOption]}`} 
            alt="Button Icon"
            sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
            srcSet={`/images/Group-790.svg 768w, /images/Group-790.svg 1024w`}
            width={44}
            height={46}
        />
        <p className={`ps-8 ${textColor}`}>{buttonText}</p>            
      </a>
    </>
  )
};

export default Button4P;
