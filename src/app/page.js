import Image from "next/image";
import React from "react"
import { ActionList, ActionTitle, AdvanceTrainingCert, BestBrands, ExperienceText, FleetGraphicsCert, GeekWrapsCert, MiniMenuHome, PreferedInstallerCert, ServicesGridHome, titleHM, TrustedBy } from "./data/data";
import YouTubeVideo from "./components/YoutubeLazyLoad";
import MiniMenu from "./components/MiniMenu";
import Button4P from "./components/Button";
import ReviewSection from "./components/ReviewSection";
import ServicesCardHome from "./components/ServicesSectionHome";
import ContactFormFooter from "./components/ContactFormFooter";


export default function Home() {
  return (
    <>
    {/******************  Hero Banner Section ****************************/}
      <div className="bg-4pgrey lg:pt-[200px] lg:mt-[-185px] lg:pb-[300px] pt-[130px] mt-[-110px]">
        <div className="container px-6 lg:px-0">
          <h1 className="lg:text-[80px] text-[45px] font-bold uppercase lg:leading-[90px] leading-[50px] lg:pb-8">
            {titleHM.titleLineOneHM} <br /> 
            <span className="text-4pblue">{titleHM.titleLineTwoHM} </span> <br /> 
            <span className="text-4pred">{titleHM.titleLineTreeHM} </span>
            <span className="h1-print-HM rounded-[50px] px-8 text-white">{titleHM.titleLineFourHM}</span> </h1>

          <p className="lg:w-[35vw] lg:pb-8 py-6 lg:py-0">Turn your vehicles into powerful mobile billboards and drive real resulbts with advertising solutions that deliver thousands of daily impressions.</p>
        </div>
      </div>

      <div className="container lg:mt-[-35vh] lg:mb-[170px] mb-16">
        <div className="flex flex-wrap lg:flex-nowrap lg:mb-[-70px] gap-8">
            <YouTubeVideo 
              image={'banner-yt-placeholder-banner-hm.webp'} 
              videoId={'Hw_ajR5rSmo?si=9FtTMf5xnI8I3VdC'} 
              videoWidth={485}
              videoHeight={488}
              imageWidth={485}
              imagHeigth={488}/>
            <Image
              src="/images/banner-image-hm.webp"
              alt="Image on banner La Palmirana"
              sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
              srcSet="/images/banner-image-hm.webp 768w, /images/banner-image-hm.webp 1024w"
              width={689}
              height={530}
            />
          </div>
      </div>

      {/****************** Trustesd By Section ****************************/}
      <div className="container lg:mb-[100px] mb-12">
        <div className="custom-path lg:min-h-[400px] lg:h-[400px]">
          <div className="back-blue lg:min-h-[400px] rounded-r-lg lg:ps-[389px] lg:pe-8 content-center px-6 py-8 lg:py-0 lg:px-0">
            <h3 className="text-white font-bold lg:text-[35px] text-[48px] text-center lg:text-start">TRUSTED BY</h3>
            <div className="grid lg:grid-cols-4 grid-cols-2 gap-[20px] lg:mb-[30px] mb-8 justify-items-center">
              {TrustedBy.map((data, index) => 
                <Image
                  key={index}
                  src={`/images/${data}`}
                  alt="Image on banner La Palmirana"
                  sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
                  srcSet="/images/banner-image-hm.webp 768w, /images/banner-image-hm.webp 1024w"
                  width={179}
                  height={78}
                  className=""
                />              
              )}
            </div>

            <h3 className="text-white font-bold text-[35px] lg:px-8 px-2 text-center lg:text-start">We Work With The Best vynil BrandS</h3>
            <div className="grid lg:grid-cols-4 grid-cols-2 gap-[20px] lg:mb-[30px] mb-8 justify-items-center">
              {BestBrands.map((data, index) => 
                <Image
                  key={index}
                  src={`/images/${data}`}
                  alt="Image on banner La Palmirana"
                  sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
                  srcSet="/images/banner-image-hm.webp 768w, /images/banner-image-hm.webp 1024w"
                  width={179}
                  height={78}
                />              
              )}
            </div>

          </div>
        </div>
      </div>

      {/****************** Mini Menu Secion ****************************/}
      <div className="container lg:mb-[100px] px-4 mb-12">
        <div className="border-2 border-4plight-grey rounded-lg lg:py-4 pt-4 lg:mx-[-30px]">
          <MiniMenu toMap={MiniMenuHome}/>
        </div>
      </div>

      {/******************  4Print Experience Section ****************************/}
      <div className="container lg:mb-[100px] mb-12 px-4 lg:px-0">
        <div className="justify-center flex flex-wrap pb-8 lg:pb-0">
          <h2 className="lg:text-[70px] text-[45px] font-bold lg:leading-[65px] leading-[50px] w-full text-center">THE <span className="text-transparent">4PRINT</span> <Image
                      src="/images/Logo-no-lined.svg"
                      alt="Logo without bottom line"
                      sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
                      srcSet="/images/Logo-no-lined.svg 768w, /images/Logo-no-lined.svg 1024w"
                      width={350}
                      height={56}
                      className="inline lg:ms-[-270px] ms-[-180px] mt-[-30px] lg:w-[350px] w-[60%]"
                    /> <span className="block lg:text-[80px] lg:leading-[75px]">EXPERIENCE</span></h2>
          <p className="max-w-[587px] text-center pt-4 text-[20px] leading-[25px]">{ExperienceText}</p>
        </div>

        <div className="flex justify-between flex-wrap lg:flex-nowrap">
          <div className="bg-4pblack lg:max-w-[282px] lg:w-[282px] w-full h-fit px-[20px] pt-[25px] rounded-lg order-2 lg:order-1 mt-8 lg:mt-0">
            <p className="text-white text-[20px] leading-[23px] font-bold pb-4">{ActionTitle}</p>
            <ul>
              {ActionList.map((data, index) => {
                return (
                  <li key={index} className="text-white flex pb-4">
                    <Image 
                      src={"/images/check_square.svg"}
                      alt="List Icon"
                      sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
                      srcSet="/images/check_square.svg 768w, /images/check_square.svg 1024w"
                      width={21}
                      height={21}
                      className="self-start" />
                    <p className="w-[90%] text-[15px] ps-[10px]">
                      <b>{data.boldText}</b> {data.thinText}
                    </p>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="lg:max-w-[282px] lg:w-[282px] w-full lg:pt-32 order-1 lg:order-1">
            <YouTubeVideo 
            image={'4print-experience-videocover-1.webp'} 
            videoId={'rBG4AFgk4js'}
            videoWidth={282} 
            videoHeight={501}
            imageWidth={282}
            imagHeigth={501}/>
          </div>
          <div className="lg:max-w-[282px] lg:w-[282px] w-full lg:pt-32 pt-8 order-2 lg:order-2">
            <YouTubeVideo 
              image={'4print-experience-videocover-2.webp'} 
              videoId={'rBG4AFgk4js'} 
              videoWidth={282} 
              videoHeight={501}
              imageWidth={282}
              imagHeigth={501}/>
          </div>
          <div className="lg:max-w-[282px] lg:w-[282px] w-full pt-8 lg:pt-0 order-3 lg:order-3">
            <YouTubeVideo 
              image={'4print-experience-videocover-3.webp'} 
              videoId={'rBG4AFgk4js'} 
              videoWidth={282} 
              videoHeight={501}
              imageWidth={282}
              imagHeigth={501}/>
          </div>
        </div>
      </div>

      {/****************** Focus on Quality Section ****************************/}
      <div className="container lg:mb-[100px] mb-12">
        <div className="flex flex-wrap lg:flex-nowrap">
          <div className="bg-4pred lg:ps-[80px] ps-8 lg:pt-16 pt-8 text-white lg:w-[833px] w-[95%] lg:me-[-400px] rounded-lg pb-[290px] lg:pb-0">
            <h2 className="font-bold lg:text-[50px] lg:leading-[68px] text-[35px] leading-[35px]">WE FOCUS ON <span className="lg:text-[100px] text-[60px] block">QUALITY!</span></h2>

            <p className="lg:pt-16 pt-4 w-[20rem]">That’s why we use advanced printing technology to deliver superior results.</p>
          </div>
          <div className="lg:w-[790px] w-full mt-[-261px] lg:mt-0">
            <Image 
              src={"/images/quality-focus.webp"}
              alt="Quality Focus Image"
              sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
              srcSet="/images/quality-focus.webp 768w, /images/quality-focus.webp 1024w"
              width={790}
              height={498}
              className="self-start" />
          </div>
        </div>
      </div>

      {/******************  Review Section ****************************/}
      <ReviewSection />

      {/******************  Services Section ****************************/}
      <div className="container lg:mb-[100px] mb-16">
        <div className="flex lg:flex-nowrap flex-wrap px-8 lg:px-0">
          <div className="lg:w-9/12 w-full">
            <h2 className="font-bold lg:text-[70px] lg:leading-[68px] text-[52px] leading-[52px]">OUR <span className="lg:text-[80px] text-[60px] block text-4pblue">SERVICES</span></h2>          
          </div>
          <div className="lg:w-3/12 w-full content-center py-8 lg:py-0">
          <Button4P buttonText={'View all services'} buttonLink={'/services'} buttonBgAnimation={'btn-red-to-blue'} iconOption={3} textColor={'text-white'}/>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-1 px-8 lg:px-0 gap-8">
          {ServicesGridHome.map((data, index) => {
            return(
              <ServicesCardHome {...data} key={index} index={index}/>
            )
          })}
        </div>
      </div>

      {/****************** Certifications Section ****************************/}
      <div className="container lg:mb-[100px] mb-4" id="certifications">
        <div className="bg-4pgrey lg:p-16 p-8 pb-16 rounded-xl">
          <div className="flex lg:flex-nowrap flex-wrap">
            <div className="lg:w-7/12 w-full pt-4 order-1 lg:order-0">
            <h2 className="font-bold lg:text-[70px] lg:leading-[68px] text-[40px] leading-[40px]">OUR <span className="lg:block text-4pblue">CERTIFICATIONS</span></h2>
            <p className="pt-8 lg:w-[35rem]">When you choose 4Print, you're working with professionally trained and certified installers who understand the importance of proper installation for maximum durability and visual impact. Our certifications aren't just papers on the wall – they're our commitment to delivering excellence on every project.</p>
            </div>

            <div className="lg:w-5/12 w-full order-0 lg:order-1 mb-[-350px]">
            <Image 
              src={"/images/logo-grey.svg"}
              alt="logo in grey scale"
              sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
              srcSet="/images/logo-grey.svg 768w, /images/logo-grey.svg 1024w"
              width={790}
              height={498}
              className="lg:justify-self-start justify-self-end lg:w-[790px] w-[60%]" />
            </div>
          </div>

          <div className="flex lg:flex-no-wrap flex-wrap px-4 lg:px-0">
            <div className="lg:w-6/12 w-full lg:min-w-[588px] h-fit shadow-usual border-4plight-grey border-[1px] rounded-md flex flex-wrap lg:flex-nowrap p-4 bg-white mt-8">
              <div className="lg:w-5/12 w-full justify-items-center">
              <Image 
              src={"/images/advance-trainer-3m.webp"}
              alt="Advance 3M certificate"
              sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
              srcSet="/images/advance-trainer-3m.webp 768w, /images/advance-trainer-3m.webp 1024w"
              width={258}
              height={194}
              className="self-start" />
              </div>

              <div className="lg:w-7/12 w-full px-4">
              <p className="text-4pblue font-bold text-[20px] pb-2 text-center lg:text-start pt-4 lg:pt-0">Advanced Training</p>
              <ul className="leading-[21px] list-disc ps-8 lg:ps-4 text-[18px]">
                {AdvanceTrainingCert.map((data, index) => (
                  <li key={index}>{data}</li>
                ))}
              </ul>
              </div>
            </div>

            <div className="lg:ms-8 h-fit lg:w-5/12 w-full shadow-usual border-4plight-grey border-[1px] rounded-md p-4 lg:mt-[-40px] mt-8 bg-white">
              <div className="justify-center flex">
              <Image 
              src={"/images/3m-logo-cert.webp"}
              alt="3M Certificate Logo"
              sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
              srcSet="/images/3m-logo-cert.webp 768w, /images/3m-logo-cert.webp 1024w"
              width={203}
              height={153}
              className="self-center" />
              </div>

              <div className="px-4">
              <p className="text-4pblue font-bold text-[20px] text-center pb-4 pt-4 lg:pt-0">3M Preferred Installer</p>
              <ul className="leading-[23px] list-disc ps-8 text-[18px]">
                {PreferedInstallerCert.map((data, index) => <li key={index}>{data}</li>)}
              </ul>
              </div>
            </div>
          </div>


          <div className="flex lg:flex-no-wrap flex-wrap px-4 lg:px-0">
            <div className="lg:me-8 h-fit lg:w-5/12 w-full shadow-usual border-4plight-grey border-[1px] rounded-md p-4 lg:mt-[-110px] mt-8 bg-white">
              <div className="justify-center flex">
              <Image 
              src={"/images/3m-fleet-graphics.webp"}
              alt="3M Certificate Logo"
              sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
              srcSet="/images/3m-fleet-graphics.webp 768w, /images/3m-fleet-graphics.webp 1024w"
              width={124}
              height={123}
              className="self-center" />
              </div>

              <div className="px-4">
              <p className="text-4pblue font-bold text-[20px] text-center pb-4 pt-4 lg:pt-0">3M Fleet Graphics</p>
              <ul className="leading-[23px] list-disc ps-8 text-[18px]">
                {FleetGraphicsCert.map((data, index) => <li key={index}>{data}</li>)}
              </ul>
              </div>
            </div>

            <div className="lg:w-6/12 w-full lg:min-w-[588px] h-fit shadow-usual border-4plight-grey border-[1px] rounded-md flex flex-wrap lg:flex-nowrap p-4 bg-white lg:mt-[27px] mt-8">
              <div className="lg:w-5/12 w-full justify-items-center">
              <Image 
              src={"/images/Geek-wraps-cert.webp"}
              alt="Geek Wraps Certificate"
              sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
              srcSet="/images/Geek-wraps-cert.webp 768w, /images/Geek-wraps-cert.webp 1024w"
              width={258}
              height={194}
              className="self-start" />
              </div>

              <div className="lg:w-7/12 w-full px-4">
              <p className="text-4pblue font-bold text-[20px] text-center lg:text-start pt-4 lg:pt-0 pb-4 lg:pb-0">Advanced Training</p>
              <ul className="leading-[23px] list-disc ps-8 text-[18px]">
                {GeekWrapsCert.map((data, index) => (
                  <li key={index}>{data}</li>
                ))}
              </ul>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/******************  About 4Print Section ****************************/}
      <div className="about-home-page lg:p-16 px-8 pb-8 lg:mb-[100px] mb-16">
        <div className="container lg:py-16">
          <div className="flex lg:flex-nowrap flex-wrap">
            <div className="lg:w-6/12 w-full order-1 lg:order-0">
              <h2 className="lg:text-[70px] text-[52px] font-bold lg:leading-[65px] leading-[45px] w-full">ABOUT <span className="text-transparent">4PRINT</span> <br />
              <Image
                src="/images/Logo-no-lined.svg"
                alt="Logo without bottom line"
                sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
                srcSet="/images/Logo-no-lined.svg 768w, /images/Logo-no-lined.svg 1024w"
                width={350}
                height={56}
                className="inline lg:mt-[-10px] mt-[-70px]"
              /> <span className="block text-[80px] leading-[75px]"></span></h2>
            </div>
            <div className="lg:w-6/12 w-full order-0 lg:order-1 justify-items-center mt-8 mb-6 lg:my-0">
              <Image
                src="/images/about-home-owners.webp"
                alt="Logo without bottom line"
                sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
                srcSet="/images/about-home-owners.webp 768w, /images/about-home-owners.webp 1024w"
                width={279}
                height={279}
                className="lg:inline lg:mt-[-25px] lg:mb-[-100px] lg:ms-[-140px] lg:me-[140px] z-10 relative"
              />
            </div>
          </div>

          <div className="bg-rombo lg:pt-[50px] pt-8 lg:ps-[75px] ps-8 lg:pe-16 pe-0 lg:mt-16 mt-8 pb-6 lg:min-w-[580px] lg:w-[580px] lg:min-h-[284px] bg-white">
            <p className="no-skew lg:text-[18px] lg:leading-[23px] pe-4 lg:mb-4 mb-8">Since 2021, we've been transforming vehicles into powerful marketing tools throughout the DMV area. From ambitious startups companies to established corporations, we believe every business deserves the opportunity to stand out on the road.</p>
            <div className="lg:w-8/12 w-11/12 content-center no-skew">
              <Button4P buttonText={'View full information'} buttonLink={'/about'} buttonBgAnimation={'btn-red-to-blue'} iconOption={3} textColor={'text-white'}/>
            </div>
          </div>

        </div>
      </div>

      {/******************  Mission Section ****************************/}
      <div className="container bg-mission-hp justify-center flex lg:mb-[100px] lg:h-[644px]">
        <div className="lg:w-[32.3rem] w-full bg-4pred lg:pt-16 pt-8 px-8 mt-[300px] mb-[450px] lg:my-0">
          <h2 className="text-white lg:text-[70px] text-[52px] leading-[48px] lg:leading-[80px] font-bold">OUR <span className="lg:text-[80px] block">MISSION</span></h2>
          <p className="text-white py-4 leading-[23px]">At 4Print, we're dedicated to fueling business growth through professional vehicle wraps and fleet branding solutions. Our commitment goes beyond just wrapping vehicles – we create visual stories that capture attention and drive results.
            <br /><br />
            Whether you're a small business taking your first step into vehicle advertising or a large corporation upgrading your fleet, we deliver the same exceptional quality and attention to detail in design, printing, and installation.</p>
        </div>
      </div>

      {/******************  Contact Form Section ****************************/}
      <ContactFormFooter />
    </>
  );
}
