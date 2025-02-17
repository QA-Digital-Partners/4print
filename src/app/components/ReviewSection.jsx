import React from "react"
import ReviewCarousel from "./ReviewCarousel";
import Button4P from "./Button";
import Image from "next/image";

const ReviewSection = (props) => {
  return (
    <>
      <div className="container shadow-usual lg:mb-[100px] mb-16 border-4plight-grey border-[1px] rounded-md">
        <div className="flex flex-wrap lg:flex-nowrap">
          <div className="lg:w-[52%] w-full lg:ps-[5rem] pt-[2rem] bg-4pgrey rounded-br-[70px] rounded-tl-md lg:mb-16 lg:pb-8 pb-12 px-4">
            <Image 
                src={"/images/quote-icon.svg"}
                alt="Quotation icon"
                sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
                srcSet="/images/quote-icon.svg 768w, /images/quote-icon.svg 1024w"
                width={112}
                height={112}
                className="self-start lg:ms-[-45px] lg:mb-[-27px] w-[4rem] lg:w-[112px] mb-[-20px]" />
            <h4 className="lg:text-[70px] font-bold lg:leading-[64px] text-[58px] leading-[52px] ps-8 lg:ps-0">WHAT OUR <span className="block text-4pblue lg:text-[80px]">CUSTOMER</span> ARE SAYING</h4>
            <p className="lg:text-[20px] font-semibold py-4 lg:ps-0 ps-8 ">Visit our Google REVIEWS</p>
            <div className="lg:max-w-[284px] ps-8 lg:ps-0 pe-8 lg:pe-0">
              <Button4P buttonText={'View all reviews'} buttonLink={'#'} textColor={'text-white'} iconOption={2} buttonBgAnimation={'btn-red-to-blue'}/>
            </div>
          </div>

          <div className="lg:w-[48%] lg:pt-[4rem] lg:ps-16 w-full px-4 pt-8 pb-8 lg:pb-0">
            <ReviewCarousel />
          </div>
        </div>
      </div>

    </>
  )
};

export default ReviewSection;
