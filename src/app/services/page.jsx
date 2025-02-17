import React from "react"
import ReviewSection from "../components/ReviewSection";
import ContactFormFooter from "../components/ContactFormFooter";
import Button4P from "../components/Button";
import MiniMenu from "../components/MiniMenu";
import { ApparelCardsData, CommercialLetering, CustomCarWraps, MiniMenuServices, StationaryPrintingLeft, StationaryPrintingRight, WhyChoseServicePageBottom, WhyChoseServicePageTop } from "../data/data";
import Image from "next/image";
import ApparelCard from "../components/Apparel"; 

export const metadata = {
  title: "Services",
  description: "aqui la descripcion",
};

const Services = (props) => {
  return (
    <>
      {/******************  Hero Banner Section ****************************/}
      <div className="bg-4pgrey pt-[200px] mt-[-185px] pb-8 mb-16 lg:mb-0 lg:pb-0">
        <div className="container flex flex-wrap">
          <div className="lg:w-7/12 w-full">
            <h1 className="text-[50px] leading-[55px] uppercase font-bold text-center lg:text-start">From Vehicle Wraps to Commercial Printing, <span className="lg:text-[90px] text-[75px] leading-[70px] text-4pred lg:leading-[95px] block">We've Got You Covered</span></h1>
          </div>

          <div className="lg:w-5/12 w-full content-end justify-items-end lg:pt-32 pt-12">
            <div className="shape-banner-services lg:min-h-[339px] min-h-[21rem] bg-4pblue content-center px-16 lg:max-w-[453px] items-self-end pb-8">
              <p className="text-white font-bold text-[22px] pb-4">Transform Your Brand with Our Professional Services.</p>
              <div className="w-[190px]">
              <Button4P buttonText={'Call Us'} buttonLink={'tel:+14439981717'} buttonBgAnimation={'btn-red-to-white'} iconOption={4} textColor={'text-4pblue'}/>
              </div>
            </div>
          </div>

          <div className="w-full hero-banner-services lg:h-[425px] lg:mt-[-120px] h-2/6"></div>
        </div>
      </div>

      {/******************  Mini Menu Section ****************************/}
      <div className="container lg:mb-[100px] px-6 lg:px-0 mb-16">
        <div className="border-2 border-4plight-grey rounded-lg lg:py-4 lg:mx-[-30px]">
          <MiniMenu toMap={MiniMenuServices}/>
        </div> 
      </div>

      {/******************  Vehicle Wrapping Section ************************/}
      <div className="container lg:mb-[130px] mb-16">
        <div className="flex lg:flex-nowrap flex-wrap justify-between px-6">
          <div className="lg:w-7/12 w-full">
            <h2 className="font-bold lg:text-[60px] lg:leading-[60px] text-[45px] leading-[40px] uppercase">Commercial Vehicle Wrapping/ <span className="lg:text-[60px] text-[50px] block text-4pblue">Fleet Wrapping</span></h2>          
          </div>
          <div className="lg:w-3/12 w-9/12 py-6 lg:py-0 content-center">
          <Button4P buttonText={'View all services'} buttonLink={'/services'} buttonBgAnimation={'btn-red-to-blue'} iconOption={3} textColor={'text-white'}/>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 pt-8 px-6 lg:px-0">
          <div className={``}>
            <Image
              src="/images/full-vehicle-wrap.webp"
              alt="Full Vehicle Wrapping Image"
              sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
              srcSet="/images/full-vehicle-wrap.webp 768w, /images/full-vehicle-wrap.webp 1024w"
              width={384}
              height={437}
              className="rounded-xl"
            />
            <div className="border-[1px] border-4plight-grey shadow-usual rounded-xl mt-16 mb-8">
              <h3 className="rectangle-cuted text-white font-bold text-[25px] py-[12px] lg:w-[19rem] text-center rounded-md mt-[-30px]">Full Vehicle Wraps</h3>
              <p className="leading-[23px] px-8 pt-4 pb-8">Transform your entire vehicle into a powerful marketing tool</p>
            </div>
          </div>

          <div className={`grid `}>
            <h3 className="rectangle-cuted text-white font-bold text-[25px] py-[9px] lg:w-[19rem] w-full text-center rounded-md mx-auto lg:mb-8 mb-[-15px] mt-8 lg:mt-0 order-1 lg:order-0 z-10 relative">Partial Vehicle Wraps</h3>
            <Image
              src="/images/partial-vehicle-wrap-image.webp"
              alt="Partial Vehicle Wrapping Image"
              sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
              srcSet="/images/partial-vehicle-wrap-image.webp 768w, /images/partial-vehicle-wrap-image.webp 1024w"
              width={384}
              height={437}
              className="rounded-xl order-0 lg:order-1"
            />
            <div className="border-[1px] border-4plight-grey shadow-usual rounded-xl lg:mt-8 mb-8 order-2 z-0 relative">
              <p className="leading-[23px] px-8 pt-4 pb-4">Strategic vehicle branding that targets specific areas of your vehicle. An affordable solution that creates a maximum impact.</p>
            </div>
          </div>

          <div className={`grid`}>
            <div className="border-[1px] border-4plight-grey shadow-usual rounded-xl lg:mt-4 mt-12 lg:mb-[46px] order-1 lg:order-0">
              <h3 className="rectangle-cuted text-white font-bold text-[25px] py-[12px] lg:w-[19rem] rounded-md mt-[-20px] px-4 leading-[28px]">Specialty Wrap (Matte, Gloss & Satin)</h3>
              <p className="leading-[23px] px-8 pt-4 pb-8">Choose from matte, gloss, satin or specialty materials to create a unique, head-turning look.</p>
            </div>
            <Image
              src="/images/specialty-wrap.webp"
              alt="Specialty Wrapping Image"
              sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
              srcSet="/images/specialty-wrap.webp 768w, /images/specialty-wrap.webp 1024w"
              width={384}
              height={437}
              className="rounded-xl order-0 lg:order-1"
            />
          </div>

        </div>

      </div>

      {/******************  Commercial Lettering Section ****************************/}
      <div className="container lg:mb-[100px] mb-16 px-4 lg:px-0">
        <div className="border-[1px] border-4plight-grey rounded-xl shadow-usual pb-16 px-4 lg:px-0">
          <div className="flex flex-wrap lg:flex-nowrap">
            <div className="lg:w-1/2 w-full lg:pt-16 pt-8 lg:ps-16">
              <h2 className="font-bold lg:text-[60px] lg:leading-[60px] text-[45px] leading-[40px] uppercase">Commercial Vehicle <span className="block text-4pblue">Lettering, USDOT & MHIC</span></h2>          
            </div>
            <div className="lg:w-1/2 w-full lg:mt-[-60px]">
            <Image
              src="/images/commertial-letering-image.webp"
              alt="Commertial Letering Image"
              sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
              srcSet="/images/commertial-letering-image.webp 768w, /images/commertial-letering-image.webp 1024w"
              width={534}
              height={394}
              className="rounded-xl"
            />
            </div>
          </div>

          <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 lg:px-16 px-4 my-8">
            {CommercialLetering.map((data, index) => {
              return (
                <div key={index}>
                  <div className="flex lg:h-[60px] pb-4 lg:pb-0">
                    <img src="/images/Ellipse 31.svg" width={17} height={17}  className="self-start mt-[5px]"/>
                    <h3 className="text-[25px] text-4pred font-bold leading-[27px] ps-4">{data.title}</h3>
                  </div>
                  <p>{data.text}</p>
                </div>
              )
            })}
          </div>
          <div className="lg:w-3/12 w-10/12 mx-auto">
            <Button4P buttonText={'View full information'} buttonLink={'tel:+14439981717'} buttonBgAnimation={'btn-red-to-blue'} iconOption={3} textColor={'text-white'}/>
          </div>
        </div>
      </div>

      {/******************  Custom Car Wrap Section ****************************/}
      <div className="container lg:mb-[100px] mb-16">
        <div className="bg-custom-car-wrap-sv rounded-xl lg:h-[75vh] h-[50vh]">
          <h2 className="text-white text-[60px] font-bold w-[25rem] leading-[65px] lg:pt-16 lg:ps-16 pt-8 px-6 pb-[150px]">Custom Car Wraps </h2>
        </div>
        <div className="lg:w-[80%] w-full lg:bg-custom-car-wrap-red bg-4pred lg:justify-self-end rounded-3xl lg:grid lg:grid-cols-3 gap-8 lg:ps-[105px] lg:pt-[46px] lg:pb-[40px] lg:pe-4 lg:mt-[-260px] px-12 pt-16 mt-[-120px] pb-16">
            {CustomCarWraps.map((data, index) => {
              return (
                <div key={index} className="pb-8 lg:pb-0">
                  <div className="flex lg:h-[60px]">
                    <img src="/images/Ellipse-black.svg" width={17} height={17}  className="self-start mt-[5px] black-circle"/>
                    <h3 className="text-[25px] text-white font-bold leading-[27px] ps-2">{data.title}</h3>
                  </div>
                  <p className="text-white pt-4">{data.text}</p>
                </div>
              )
            })}
            <div className="lg:col-span-3 w-11/12 mx-auto">
              <Button4P buttonText={'View full information'} buttonLink={'/'} buttonBgAnimation={'btn-white-to-blue'} iconOption={5} textColor={'text-4pblue'}/>
            </div>
          </div>

      </div>

      {/******************  Commercial Printing Section ****************************/}
      <div className="container lg:mb-[100px] mb-16 px-6 lg:px-0">
        <h2 className="font-bold lg:text-[60px] text-[45px] lg:leading-[60px] leading-[42px] uppercase text-center">Commercial <span className="text-4pblue">Printing</span></h2>
        <div className="grid grid-cols-12 gap-5 mt-7">
          <div className="lg:col-span-5 col-span-12 bg-4pred wall-wrap lg:min-h-[71vh] rounded-lg lg:ps-[50px] lg:pb-[50px] lg:pt-0 ps-8 pe-8 lg:ps-0 pt-20 pb-12 text-white content-end">
            <h3 className="text-[20px] font-bold pb-4">Commercial Wall Wrap</h3>
            <p className="lg:w-[18rem]">Transform your business walls into stunning visual displays with custom graphics.</p>
          </div>

          <div className="lg:col-span-7 col-span-12">
            <div className="grid grid-cols-2 gap-5">
              <div className="window-vinils lg:min-h-[34.5vh] rounded-lg lg:ps-[22px] lg:pb-8 ps-8 pe-8 lg:pe-0 pt-20 lg:pt-0 pb-12 text-white content-end col-span-2 lg:col-span-1">
                <h3 className="text-[20px] font-bold pb-4 pe-16 leading-[23px]">Window Vinyls (perforated and regular)</h3>
                <p className="lg:w-[18rem] ">Transform your windows into advertising space while maintaining visibility.</p>
              </div>
              <div className="banners lg:min-h-[34.5vh] rounded-lg lg:ps-[22px] lg:pb-8 ps-8 pe-8 lg:pe-0 pt-20 lg:pt-0 pb-12 text-white content-end col-span-2 lg:col-span-1">
                <h3 className="text-[20px] font-bold pb-4 pe-16 leading-[23px]">Banners (regular & rollup)</h3>
                <p className="lg:w-[19rem]">High-impact banners for indoor and outdoor advertising. Portable rollup options for events.</p>
              </div>
            </div>
            <div className="cut-vinyl lg:min-h-[34.5vh] mt-5 rounded-lg lg:ps-[50px] lg:pb-[50px] ps-8 pe-8 lg:pe-0 pt-24 lg:pt-0 pb-16 text-white content-end">
              <h3 className="text-[20px] font-bold pb-4 pe-16 leading-[23px]">Cut Vinyl/Lettering</h3>
              <p className="lg:w-[19rem]">Custom-cut letters and graphics for professional business signage.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-5 mt-5">
          <div className="car-magnets lg:col-span-5 col-span-12 lg:min-h-[43vh] rounded-lg lg:ps-[50px] lg:pb-[50px] ps-8 pe-8 lg:pe-0 pt-24 lg:pt-0 pb-16 text-white content-end">
            <h3 className="text-[20px] font-bold pb-4 pe-16 leading-[23px]">Cut Vinyl/Lettering</h3>
            <p className="lg:w-[19rem]">Custom-cut letters and graphics for professional business signage.</p>
          </div>

          <div className="lg:col-span-7 col-span-12">
            <div className="grid grid-cols-2 gap-5">
              <div className="yard-signs lg:min-h-[43vh] rounded-lg lg:ps-[22px] lg:pb-8 ps-8 pe-8 lg:pe-0 pt-24 lg:pt-0 pb-16 text-white content-end col-span-2 lg:col-span-1">
                <h3 className="text-[20px] font-bold pb-4 pe-16 leading-[23px]">Yard Signs</h3>
                <p className="lg:w-[18rem] ">Durable outdoor signs perfect for real estate and business promotions.</p>
              </div>
              <div className="stickers lg:min-h-[43vh] rounded-lg lg:ps-[22px] lg:pb-8 ps-8 pe-8 lg:pe-0 pt-20 lg:pt-0 pb-16 text-white content-end col-span-2 lg:col-span-1">
                <h3 className="text-[20px] font-bold pb-4 pe-16 leading-[23px]">Stickers (Die-cut, Cut Vinyl, and Full Decals)</h3>
                <p className="lg:w-[19rem]">Custom stickers in various styles and materials for any application.</p>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:w-3/12 w-10/12 mx-auto mt-5">
            <Button4P buttonText={'View full information'} buttonLink={'/'} buttonBgAnimation={'btn-red-to-blue'} iconOption={3} textColor={'text-white'}/>
          </div>
        </div>

        
      </div>

      {/******************  Appareal Section ****************************/}
      <div className="container lg:mb-[100px] mb-16">
        <div className="lg:w-4/12 w-10/12 mx-auto rectangle-cuted rounded-md mb-[-45px] z-10 relative">
          <h2 className=" lg:text-[60px] text-[45px] text-white font-bold text-center py-2">APPAREL</h2>
        </div>
        <div className="bg-4pblack bg-apparel rounded-3xl lg:grid lg:grid-cols-3 gap-x-5 gap-y-12 lg:px-20 px-8 pt-24 pb-20">
          {ApparelCardsData.map((data, index) => {
            return(
              <ApparelCard {...data} key={index} />
            )
          })}
          <div className="col-span-3 lg:w-4/12 w-10/12 mx-auto">
            <Button4P buttonText={'View full information'} buttonLink={'/'} buttonBgAnimation={'btn-red-to-blue'} iconOption={3} textColor={'text-white'}/>
          </div>
        </div>
      </div>

      {/******************  Stationay Printing Section ****************************/}
      <div className="container grid grid-cols-12 gap-5 lg:mb-[100px] mb-16 px-6 lg:px-0">
        <div className="lg:col-span-4 col-span-12">
          <h2 className="font-bold text-[60px] leading-[60px] uppercase mb-12 lg:mb-0">Stationery <span className="block text-4pblue">Printing</span></h2>
          <div className="w-6/12 my-8 mx-auto lg:mx-0 hidden lg:block">
            <Button4P buttonText={'Call Us'} buttonLink={'/'} buttonBgAnimation={'btn-red-to-blue'} iconOption={0} textColor={'text-white'}/>
          </div>
          <div>
            {StationaryPrintingLeft.map((data, index) => {
              return (
                <div key={index} className="px-6 min-h-[137px] h-[137px] content-center bg-white rounded-lg border-[1px] border-4plight-grey shadow-usual mb-8 pb-4 pt-6">
                  <h3 className="text-4pred text-[20px] font-bold pb-4 content-center leading-[23px]">{data.title}</h3>
                  <p className="leading-[23px]">{data.text}</p>
                </div>
              )
            })}
          </div>
        </div>
        <div className="lg:col-span-5 col-span-12 content-center">
          <Image
              src="/images/stationary-printing.webp"
              alt="Commertial Letering Image"
              sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
              srcSet="/images/stationary-printing.webp 768w, /images/stationary-printing.webp 1024w"
              width={486}
              height={560}
              className="mb-4 lg:mb-0"
            />
        </div>
        <div className="lg:col-span-3 col-span-12 content-center">
        {StationaryPrintingRight.map((data, index) => {
              return (
                <div key={index} className="px-4 min-h-[137px] h-[145px] content-center bg-white rounded-lg border-[1px] border-4plight-grey shadow-usual mb-8 pb-4 pt-4">
                  <h3 className="text-4pred text-[20px] font-bold content-center leading-[23px]">{data.title}</h3>
                  <p className="leading-[23px]">{data.text}</p>
                </div>
              )
            })}
          <div className="w-6/12 my-8 mx-auto lg:mx-0 md:hidden ">
            <Button4P buttonText={'Call Us'} buttonLink={'/'} buttonBgAnimation={'btn-red-to-blue'} iconOption={0} textColor={'text-white'}/>
          </div>
        </div>
        
      </div>

      {/******************  Why Choose Us Section ****************************/}
      <div className="container flex flex-wrap lg:flex-nowrap lg:mb-[100px] mb-16 px-6 lg:px-0">
        <div className="lg:w-4/12 w-full content-center">
          <h2 className="font-bold lg:text-[60px] lg:leading-[60px] text-[52px] leading-[45px] uppercase mb-8 lg:mb-0">Why Choose <span className="text-4pblue">Our Services</span></h2>
          <div className="w-6/12 my-8 mx-auto lg:mx-0 hidden lg:block">
            <Button4P buttonText={'Call Us'} buttonLink={'/'} buttonBgAnimation={'btn-red-to-blue'} iconOption={0} textColor={'text-white'}/>
          </div>
        </div>

        <div className="lg:w-8/12 w-full">
          <div className="flex flex-wrap lg:flex-nowrap justify-center  lg:ps-16">
            {WhyChoseServicePageTop.map((data, index) => {
              return(
              <div key={index} className="lg:w-2/12 w-full flex lg:block items-center border-[1px] border-4plight-grey rounded-lg lg:mx-4 min-w-[180px] justify-items-center px-8 lg:py-8 py-4 shadow-usual bg-white mb-4 lg:mb-0">
                <img src={`/images/${data.image}`} width={83} height={70} className="me-4 lg:me-0" />
                <p className="text-center text-[20px] font-bold leading-[23px] pt-2">{data.title}</p>
              </div>
              )
            })}
          </div>

          <div className="lg:min-h-[32vh] lg:mt-[-130px] lg:mb-[-130px] bg-why-choose-blue rounded-3xl"></div>

          <div className="flex flex-wrap lg:flex-nowrap justify-center lg:ps-16">
            {WhyChoseServicePageBottom.map((data, index) => {
              return(
              <div key={index} className="lg:w-2/12 flex lg:block w-full border-[1px] border-4plight-grey rounded-lg lg:mx-4 lg:min-w-[180px] justify-items-center px-8 lg:py-8 py-4 shadow-usual bg-white mb-4 lg:mb-0">
                <img src={`/images/${data.image}`} width={83} height={70} className="me-4 lg:me-0" />
                <p className="text-center text-[20px] font-bold pt-2 leading-[23px]">{data.title}</p>
              </div>
              )
            })}

            <div className="w-6/12 my-8 mx-auto lg:mx-0 lg:hidden block">
              <Button4P buttonText={'Call Us'} buttonLink={'/'} buttonBgAnimation={'btn-red-to-blue'} iconOption={0} textColor={'text-white'}/>
            </div>
          </div>

        </div>

      </div>

      {/******************  Review Section ****************************/}
      <ReviewSection />

      {/******************  Contact Form Section ****************************/}
      <ContactFormFooter />
    </>
  )
};

export default Services;
