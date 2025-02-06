import React from "react"
import ReviewCarousel from "./ReviewCarousel";
import Button4P from "./Button";
import Image from "next/image";

const ReviewSection = (props) => {
  return (
    <>
      <div className="container shadow-usual lg:mb-[100px] border-4plight-grey border-[1px] rounded-md">
        <div className="flex">
          <div className="lg:w-[52%] lg:ps-[5rem] lg:pt-[2rem] bg-4pgrey rounded-br-[70px] rounded-tl-md mb-16 lg:pb-8">
            <Image 
                src={"/images/quote-icon.svg"}
                alt="Quotation icon"
                sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
                srcSet="/images/quote-icon.svg 768w, /images/quote-icon.svg 1024w"
                width={112}
                height={112}
                className="self-start lg:ms-[-45px] lg:mb-[-27px]" />
            <h4 className="lg:text-[70px] font-bold lg:leading-[64px]">WHAT OUR <span className="block text-4pblue lg:text-[80px]">CUSTOMER</span> ARE SAYING</h4>
            <p className="lg:text-[20px] font-semibold py-4">Visit our Google REVIEWS</p>
            <div className="lg:max-w-[284px]">
              <Button4P buttonText={'View all reviews'} buttonLink={'#'} textColor={'text-white'} iconOption={2} buttonBgAnimation={'btn-red-to-blue'}/>
            </div>
          </div>

          <div className="lg:w-[48%] pt-[4rem] ps-16">
            <ReviewCarousel />
          </div>
        </div>
      </div>

    </>
  )
};

export default ReviewSection;
