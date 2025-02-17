import Image from "next/image";
import React from "react"

const ApparelCard = ({image, title, text}) => {
  return (
    <>
    <div className="mb-12 lg:mb-0">
      <Image
        src={`/images/${image}`}
        alt={title}
        sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
        srcSet={`/images/${image} 768w, /images/${image} 1024w`}
        width={330}
        height={319}
        className="rounded-xl lg:w-[330px] w-full"
      />
      <div className="px-6 mt-[-80px]">
        <div className="px-6 min-h-[166px] h-[166px] content-center bg-white rounded-lg border-[1px] border-4plight-grey shadow-usual z-10 relative">
            <h3 className="text-4pblue text-center text-[20px] font-bold min-h-[60px] h-[60px] content-center leading-[23px] px-8">{title}</h3>
            <p className="text-center leading-[23px]">{text}</p>
        </div>
      </div>
    </div>
    </>
  )
};

export default ApparelCard;
