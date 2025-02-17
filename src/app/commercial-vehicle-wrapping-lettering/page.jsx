import React from "react"
import ContactFormFooter from "../components/ContactFormFooter";
import Button4P from "../components/Button";
import { Certifications120, FeaturesFullWrap, WhyChoseWrappingPageBottom, WhyChoseWrappingPageTop } from "../data/data";
import Image from "next/image";

const CommercialWrap = (props) => {
  return (
    <>
      {/******************  Banner Section ****************************/}
      <div className=" bg-gradient-to-r from-[#EFEEEE] from-85% to-whitwe to-85% pt-[190px] pb-16 mt-[-185px] mb-[180px]">
        <div className="container flex flex-wrap">
          <h1 className="lg:text-[80px] font-bold uppercase lg:leading-[85px] lg:pb-8 w-9/12 ">Transform <br /> 
                      <span className="text-4pblue">Your Fleet into</span> <br /> 
                      <span className="text-4pred">Mobile Billboards</span></h1>
          <div className="w-3/12">
            <Image
              src="/images/banner-image-commercial-wrap-1.webp"
              alt="Banner Image Commercial Wrapping"
              sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
              srcSet="/images/banner-image-commercial-wrap-1.webp 768w, /images/banner-image-commercial-wrap-1.webp 1024w"
              width={486}
              height={688}
              className="absolute top-0 right-0 w-[27vw] max-w-[489px]"
            />
          </div>
          <div className="w-3/12 relative">
            <Image
              src="/images/banner-image-commercial-wrap-2.webp"
              alt="Banner Image Commercial Wrapping"
              sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
              srcSet="/images/banner-image-commercial-wrap-2.webp 768w, /images/banner-image-commercial-wrap-2.webp 1024w"
              width={486}
              height={688}
              className="absolute top-0 right-10 w-[35vw] min-w-[27vw]  max-w-[480px]"
            />
          </div>
          <div className="w-5/12 pe-8">
            <p className="leading-[23px]">Turn your vehicles into powerful mobile advertising with professional vehicle wraps. Our expert team uses premium materials to create high-impact designs that capture attention and drive results</p>
            <div className="w-8/12 my-8">
            <Button4P buttonText={'Start Your Project from $50'} buttonLink={'/'} buttonBgAnimation={'btn-red-to-blue'} iconOption={0} textColor={'text-white ps-3'}/>
          </div>
          </div>
        </div>

      </div>

      {/******************  Certifications Section ****************************/}
      <div className="container pe-20 mb-[100px]">
        <div className="bg-4pgrey rounded-xl flex">
        <div className="w-7/12 pt-16 ps-20 pb-20">
          <h2 className="font-bold text-[60px] leading-[60px] ">OUR <span className="text-4pblue">CERTIFICATIONS</span></h2>
          <div className="grid grid-cols-2 gap-4 pe-16">
            {Certifications120.map((data, index) => {
              return(
                <div key={index} className="border-[1px] border-4plight-grey rounded-lg shadow-usual bg-white p-4 content-center justify-items-center">
                  <Image
                  src={`/images/${data.image}`}
                  alt={`${data.title}`}
                  sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
                  srcSet={`/images/${data.image} 768w, /images/${data.image} 1024w`}
                  width={218}
                  height={164}
                  className=""
                />
                <p className="text-4pblue font-bold pt-4 ">{data.title}</p>
                </div>
              )
            })}
            
          </div>
        </div>

        <div className="w-5/12 mt-16 ">
          <div className="rectangle-cuted-black items-center content-center py-16 ps-28 rounded-3xl me-[-64px]">
            <p className="text-white uppercase text-white text-[35px] font-bold leading-[70px]">
              <span className="text-4pred italic text-[100px] font-black leading-[90px]">120+</span>
              <Image
                src={`/images/stars.svg`}
                alt={`5 Stars`}
                sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
                srcSet={`/images/stars.svg 768w, /images/stars.svg 1024w`}
                width={293}
                height={54}
                className=""
              />
              Google Reviews
            </p>
            <div className="w-8/12">
            <Button4P buttonText={'View all reviews'} buttonLink={'/'} buttonBgAnimation={'btn-red-to-blue'} iconOption={2} textColor={'text-white ps-3'}/>
            </div>
          </div>
        </div>
        </div>

      </div>

      {/******************  Commercial Vehicle Wrap Section ****************************/}
      <div className="container mb-[100px]">
        <h2 className="font-bold text-[60px] leading-[60px] uppercase text-center lg:px-44">Commercial Vehicle <span className=" block text-4pblue">Wrapping / Fleet Wrapping</span></h2>

        {/*********** Full Wrap ********************/}
        <div className="grid grid-cols-12 gap-5 bg-commercial-full lg:h-[80vh] mt-16">
          <div className="col-span-7 w-[90%] rounded-3xl bg-white pt-16 pe-12 h-fit self-end">
            <h3 className="text-4pred text-[50px] font-bold">Full Vehicle Wraps</h3>
            <p className="leading-[23px]">Complete transformation of your vehicle's exterior for maximum brand visibility
              <br /><br />
              <b>Best for:</b> Businesses wanting maximum impact and brand recognition 
            </p>
            <p className="text-4pblue text-[35px] font-bold">Features</p>
            <div className="grid grid-cols-3 gap-5">
              {FeaturesFullWrap.map((data, index) => (
                <div key={index} className="border-1 border-4plight-grey rounded-xl px-4 text-[20px] font-bold text-center shadow-usual leading-[23px] py-8">
                  {data}
                </div>
              ))}
            </div>
            <div className="w-8/12 mt-8">
            <Button4P buttonText={'View all reviews'} buttonLink={'/'} buttonBgAnimation={'btn-red-to-blue'} iconOption={2} textColor={'text-white ps-3'}/>
            </div>
          </div>

          <div className="col-span-5">
            <Image
              src={`/images/commercial-flee-full-wrap-image.webp`}
              alt={`5 Stars`}
              sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
              srcSet={`/images/commercial-flee-full-wrap-image.webp 768w, /images/commercial-flee-full-wrap-image.webp 1024w`}
              width={485}
              height={623}
              className="rounded-xl"
            />
          </div>
        </div>

        {/*********** Partial Wrap *****************/}
        <div className="grid grid-cols-12 gap-5 bg-commercial-partial lg:h-[81vh]">
          <div className="col-span-5 self-end">
            <Image
              src={`/images/commercial-flee-partial-wrap-image.webp`}
              alt={`5 Stars`}
              sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
              srcSet={`/images/commercial-flee-partial-wrap-image.webp 768w, /images/commercial-flee-partial-wrap-image.webp 1024w`}
              width={485}
              height={623}
              className="rounded-xl"
            />
          </div>


          <div className="col-span-7 w-[90%] rounded-3xl bg-white pt-16 pe-12 h-fit">
            <h3 className="text-4pred text-[50px] font-bold">Full Vehicle Wraps</h3>
            <p className="leading-[23px]">Complete transformation of your vehicle's exterior for maximum brand visibility
              <br /><br />
              <b>Best for:</b> Businesses wanting maximum impact and brand recognition 
            </p>
            <p className="text-4pblue text-[35px] font-bold">Features</p>
            <div className="grid grid-cols-3 gap-5">
              {FeaturesFullWrap.map((data, index) => (
                <div key={index} className="border-1 border-4plight-grey rounded-xl px-4 text-[20px] font-bold text-center shadow-usual leading-[23px] py-8">
                  {data}
                </div>
              ))}
            </div>
            <div className="w-8/12 mt-8">
            <Button4P buttonText={'View all reviews'} buttonLink={'/'} buttonBgAnimation={'btn-red-to-blue'} iconOption={2} textColor={'text-white ps-3'}/>
            </div>
          </div>
        </div>
      </div>

      {/******************  Why Choose Us Section ****************************/}
      <div className="container flex mb-[100px]">
        <div className="w-3/12 content-center">
          <h2 className="font-bold text-[60px] leading-[60px] uppercase">Why <span className="text-4pblue">Choose </span></h2>
          <div className="w-8/12 my-8">
            <Button4P buttonText={'Call Us'} buttonLink={'/'} buttonBgAnimation={'btn-red-to-blue'} iconOption={0} textColor={'text-white'}/>
          </div>
        </div>

        <div className="w-9/12 ">
          <div className="flex justify-center ps-16">
            {WhyChoseWrappingPageTop.map((data, index) => {
              return(
              <div key={index} className="w-2/12 border-[1px] border-4plight-grey rounded-lg mx-2 min-w-[180px] justify-items-center px-8 py-8 shadow-usual bg-white">
                <img src={`/images/${data.image}`} width={83} height={70} />
                <p className="text-center text-[20px] font-bold leading-[23px] pt-2">{data.title}</p>
              </div>
              )
            })}
          </div>

          <div className="lg:min-h-[32vh] mt-[-130px] mb-[-130px] bg-why-choose-blue rounded-3xl"></div>

          <div className="flex justify-center ps-16">
            {WhyChoseWrappingPageBottom.map((data, index) => {
              return(
              <div key={index} className="w-2/12 border-[1px] border-4plight-grey rounded-lg mx-2 min-w-[180px] justify-items-center px-8 py-8 shadow-usual bg-white">
                <img src={`/images/${data.image}`} width={83} height={70} />
                <p className="text-center text-[20px] font-bold pt-2 leading-[23px]">{data.title}</p>
              </div>
              )
            })}
          </div>

          <div className=""></div>

        </div>

      </div>

      {/****************** Trustesd By Section ****************************/}
      <div className="container lg:mb-[100px]">
          <div className="custom-path">
            <div className="back-red-wrapping-page min-h-[400px] rounded-r-xl lg:ps-[389px] lg:pe-8 content-center text-white">
              <h2 className=" font-bold text-[60px] uppercase">Take The <span className="text-4pblack">First Step</span></h2>
              <h3 className="text-[30px] uppercase font-bold lg:w-[35rem] leading-[35px]">Transform Your Business Today, Get Started for Just $50.</h3>
              <p className="leading-[23px] lg:w-[36rem] py-5">Schedule Your Free Consultation Connect with our wrap experts to discuss your project and receive a personalized quote. Serving Maryland, Virginia, and DC area.</p>
              <div className="w-4/12 content-center">
                <Button4P buttonText={'Schedule Now'} buttonLink={'#contact'} buttonBgAnimation={'btn-blue-to-white'} iconOption={6} textColor={'text-white'}/>
              </div>
            </div>
          </div>
      </div>

      {/******************  Contact Form Section ****************************/}
      <ContactFormFooter />
    </>
  )
};

export default CommercialWrap;
