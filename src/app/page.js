import Image from "next/image";
import React from "react"
import { ActionList, ActionTitle, AdvanceTrainingCert, BestBrands, ExperienceText, FleetGraphicsCert, GeekWrapsCert, MiniMenuHome, PreferedInstallerCert, ServicesGridHome, titleHM, TrustedBy } from "./data/data";
import YouTubeVideo from "./components/YoutubeLazyLoad";
import MiniMenu from "./components/MiniMenu";
import Button4P from "./components/Button";
import ReviewCarousel from "./components/ReviewCarousel";
import ReviewSection from "./components/ReviewSection";
import Button4PSmall from "./components/ButtonSmall";
import ServicesCardHome from "./components/ServicesSectionHome";


export default function Home() {
  return (
    <>
      <div className="bg-4pgrey lg:pt-[200px] mt-[-185px] lg:pb-[300px]">
        <div className="container">
          <h1 className="lg:text-[80px] font-bold uppercase lg:leading-[90px] lg:pb-8">
            {titleHM.titleLineOneHM} <br /> 
            <span className="text-4pblue">{titleHM.titleLineTwoHM} </span> <br /> 
            <span className="text-4pred">{titleHM.titleLineTreeHM} </span>
            <span className="h1-print-HM rounded-[50px] px-8 text-white">{titleHM.titleLineFourHM}</span> </h1>

          <p className="lg:w-[35vw] lg:pb-8">Turn your vehicles into powerful mobile billboards and drive real resulbts with advertising solutions that deliver thousands of daily impressions.</p>


        </div>
      </div>

      <div className="container lg:mt-[-35vh] lg:mb-[170px]">
        <div className="flex lg:mb-[-70px] gap-8">
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

      <div className="container lg:mb-[100px]">
        <div className="custom-path">
          <div className="back-blue min-h-[400px] rounded-r-lg lg:ps-[389px] lg:pe-8 content-center">
            <h3 className="text-white font-bold text-[35px]">TRUSTED BY</h3>
            <div className="grid grid-cols-4 lg:gap-[20px] lg:mb-[30px]">
              {TrustedBy.map((data, index) => 
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

            <h3 className="text-white font-bold text-[35px]">We Work With The Best vynil BrandS</h3>
            <div className="grid grid-cols-4 lg:gap-[20px] lg:mb-[30px]">
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


      <div className="container lg:mb-[100px]">
        <div className="border-2 border-4plight-grey rounded-lg py-4">
          <MiniMenu toMap={MiniMenuHome}/>
        </div>
      </div>

      <div className="container mb-[100px]">
        <div className="justify-center flex flex-wrap">
          <h2 className="text-[70px] font-bold leading-[65px] w-full text-center">THE <span className="text-transparent">4PRINT</span> <Image
                      src="/images/Logo-no-lined.svg"
                      alt="Logo without bottom line"
                      sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
                      srcSet="/images/Logo-no-lined.svg 768w, /images/Logo-no-lined.svg 1024w"
                      width={350}
                      height={56}
                      className="inline ms-[-270px] mt-[-30px]"
                    /> <span className="block text-[80px] leading-[75px]">EXPERIENCE</span></h2>
          <p className="max-w-[587px] text-center pt-4 text-[20px] leading-[25px]">{ExperienceText}</p>
        </div>

        <div className="flex justify-between">
          <div className="bg-4pblack max-w-[282px] lg:w-[282px] h-fit px-[20px] pt-[25px] rounded-lg">
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
          <div className="max-w-[282px] lg:w-[282px] pt-32">
            <YouTubeVideo 
            image={'4print-experience-videocover-1.webp'} 
            videoId={'rBG4AFgk4js'} 
            videoWidth={282} 
            videoHeight={501}
            imageWidth={282}
            imagHeigth={501}/>
          </div>
          <div className="max-w-[282px] lg:w-[282px] pt-32">
            <YouTubeVideo 
              image={'4print-experience-videocover-2.webp'} 
              videoId={'rBG4AFgk4js'} 
              videoWidth={282} 
              videoHeight={501}
              imageWidth={282}
              imagHeigth={501}/>
          </div>
          <div className="max-w-[282px] lg:w-[282px]">
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


      <div className="container lg:mb-[100px]">
        <div className="flex">
          <div className="bg-4pred ps-[80px] pt-16 text-white w-[833px] me-[-400px] rounded-lg">
            <h2 className="font-bold text-[50px] leading-[68px]">WE FOCUS ON <span className="text-[100px] block">QUALITY!</span></h2>

            <p className="pt-16 w-[20rem]">That’s why we use advanced printing technology to deliver superior results.</p>
          </div>
          <div className="w-[790px]">
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

      <ReviewSection />

      <div className="container mb-[100px]">
        <div className="flex lg:flex-nowrap flex-wrap">
          <div className="w-9/12">
            <h2 className="font-bold text-[70px] leading-[68px]">OUR <span className="text-[80px] block text-4pblue">SERVICES</span></h2>          
          </div>
          <div className="w-3/12 content-center">
          <Button4P buttonText={'View all services'} buttonLink={'/services'} buttonBgAnimation={'btn-red-to-blue'} iconOption={3} textColor={'text-white'}/>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {ServicesGridHome.map((data, index) => {
            return(
              <ServicesCardHome {...data} key={index} index={index}/>
            )
          })}
        </div>
      </div>

      <div className="container">
        <div className="bg-4pgrey p-16 rounded-xl">
          <div className="flex lg:flex-nowrap flex-wrap">
            <div className="w-7/12 pt-4">
            <h2 className="font-bold lg:text-[70px] lg:leading-[68px]">OUR <span className="lg:block text-4pblue">CERTIFICATIONS</span></h2>
            <p className="pt-8 w-[35rem]">When you choose 4Print, you're working with professionally trained and certified installers who understand the importance of proper installation for maximum durability and visual impact. Our certifications aren't just papers on the wall – they're our commitment to delivering excellence on every project.</p>
            </div>

            <div className="w-5/12">
            <Image 
              src={"/images/logo-grey.svg"}
              alt="logo in grey scale"
              sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
              srcSet="/images/logo-grey.svg 768w, /images/logo-grey.svg 1024w"
              width={790}
              height={498}
              className="self-start" />
            </div>
          </div>

          <div className="flex lg:flex-no-wrap flex-wrap">
            <div className="w-6/12 lg:min-w-[588px] h-fit shadow-usual border-4plight-grey border-[1px] rounded-md flex p-4 bg-white mt-8">
              <div className="w-5/12">
              <Image 
              src={"/images/advance-trainer-3m.webp"}
              alt="Advance 3M certificate"
              sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
              srcSet="/images/advance-trainer-3m.webp 768w, /images/advance-trainer-3m.webp 1024w"
              width={258}
              height={194}
              className="self-start" />
              </div>

              <div className="w-7/12 px-4">
              <p className="text-4pblue font-bold text-[20px] pb-2">Advanced Training</p>
              <ul className="leading-[21px] list-disc ps-4 text-[18px]">
                {AdvanceTrainingCert.map((data, index) => (
                  <li key={index}>{data}</li>
                ))}
              </ul>
              </div>
            </div>

            <div className="ms-8 h-fit w-5/12 shadow-usual border-4plight-grey border-[1px] rounded-md p-4 mt-[-40px] bg-white">
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
              <p className="text-4pblue font-bold text-[20px] text-center pb-4">3M Preferred Installer</p>
              <ul className="leading-[23px] list-disc ps-8 text-[18px]">
                {PreferedInstallerCert.map((data, index) => <li key={index}>{data}</li>)}
              </ul>
              </div>
            </div>
          </div>


          <div className="flex lg:flex-no-wrap flex-wrap">
            <div className="me-8 h-fit w-5/12 shadow-usual border-4plight-grey border-[1px] rounded-md p-4 lg:mt-[-110px] bg-white">
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
              <p className="text-4pblue font-bold text-[20px] text-center pb-4">3M Fleet Graphics</p>
              <ul className="leading-[23px] list-disc ps-8 text-[18px]">
                {FleetGraphicsCert.map((data, index) => <li key={index}>{data}</li>)}
              </ul>
              </div>
            </div>

            <div className="w-6/12 lg:min-w-[588px] h-fit shadow-usual border-4plight-grey border-[1px] rounded-md flex p-4 bg-white lg:mt-[27px]">
              <div className="w-5/12">
              <Image 
              src={"/images/Geek-wraps-cert.webp"}
              alt="Geek Wraps Certificate"
              sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
              srcSet="/images/Geek-wraps-cert.webp 768w, /images/Geek-wraps-cert.webp 1024w"
              width={258}
              height={194}
              className="self-start" />
              </div>

              <div className="w-7/12 px-4">
              <p className="text-4pblue font-bold text-[20px]">Advanced Training</p>
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


      <div></div>

    </>
  );
}
