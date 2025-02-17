import Image from "next/image";
import React from "react"


const Button4PSmall = ({buttonText, buttonBgAnimation, textColor, iconOption, buttonLink}) => {

  const iconList = ['ib-white-blue.svg', 'ib-blue-white.svg', 'ir-white-blue.svg', 'ib-link-blue-white.svg', 'ib-white-red.svg']
  return (
    <>
      <a href={buttonLink} className={`flex rounded-lg items-center font-bold btn-animation ${buttonBgAnimation} max-w-[130px]`}>
        <Image
            src={`/images/${iconList[iconOption]}`} 
            alt="Button Icon"
            sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
            srcSet={`/images/Group-790.svg 768w, /images/Group-790.svg 1024w`}
            width={20}
            height={23}
        />
        <p className={`ps-2 ${textColor}`}>{buttonText}</p>            
      </a>
    </>
  )
};

export default Button4PSmall;
