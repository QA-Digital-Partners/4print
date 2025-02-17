import Image from "next/image";
import React from "react"
import { AccesibleStart, AdvanceTrainingCert, FleetGraphicsCert, GeekWrapsCert, PreferedInstallerCert, QualityProcess } from "../data/data";
import ReviewSection from "../components/ReviewSection";

export const metadata = {
    title: "About us - 4Print ",
    description: "aqui la descripcion",
  };

const AboutPage = (props) => {
  return (
    <>
      {/******************  Hero Banner Section ****************************/}
      <div className="container lg:mb-[100px] mb-16">
        <h1 className="text-4pblue font-bold text-[22px] text-center uppercase">About 4Print</h1>
        <h2 className="uppercase lg:text-[70px] text-[62px] leading-[52px] font-bold text-center lg:leading-[80px]">We Are The DMV's 
          <span className="text-4pred block lg:text-[110px]">Premier Vehicle</span>
          <span className="bg-banner-ap lg:pt-[43px] pt-[80px] lg:pb-[136px] pb-[30px] block rounded-2xl text-white mt-4 lg:text-[80px] text-[55px]">Wrapping & Commercial Printing Specialists</span>
          </h2>
        <div className="">

        </div>
      </div>

      {/******************  Who We Are Section ****************************/}
      <div className="bg-gradient-to-r from-white lg:from-40% from-20% to-4pgrey lg:to-40% to-20% lg:mb-[100px] mb-16">
        <div className="container flex flex-wrap lg:flex-nowrap">
          <div className="lg:w-1/2 w-full flex flex-wrap lg:flex-nowrap justify-evenly order-1 lg:order-0">
          <Image 
            src={"/images/who-we-are-image-1.webp"}
            alt="Who we are image 1"
            sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
            srcSet="/images/who-we-are-image-1.webp 768w, /images/who-we-are-image-1.webp 1024w"
            width={282}
            height={477}
            className="self-start rounded-xl lg:w-[282px] w-[45%]" />
          <Image 
            src={"/images/who-we-are-image-2.webp"}
            alt="Who we are image 1"
            sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
            srcSet="/images/who-we-are-image-2.webp 768w, /images/who-we-are-image-2.webp 1024w"
            width={282}
            height={477}
            className="self-start rounded-xl mt-16 lg:ms-8 lg:w-[282px] w-[45%]" />
          </div>
          
          <div className="lg:w-1/2 w-full lg:ps-16 ps-8 pe-8 lg:pe-0 content-center lg:pt-[100px] pt-8 order-0 lg:order-1">
            <h2 className="font-bold lg:text-[70px] text-[55px] leading-[55px] lg:leading-[70px] z-10 relative">WHO <span className="text-4pblue lg:text-[80px] block">WE ARE</span></h2>
            <p className="lg:w-[35rem] w-full leading-[23px] pt-8 relative z-10">Since 2021, we've been transforming vehicles into powerful marketing tools throughout the DMV area. From ambitious startups to established corporations, we believe every business deserves the opportunity to stand out on the road. With our expert team and state-of-the-art technology, we've built a reputation for excellence in vehicle wrapping and commercial printing services.</p>
            <Image 
                    src={"/images/logo-grey.svg"}
                    alt="logo in grey scale"
                    sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
                    srcSet="/images/logo-grey.svg 768w, /images/logo-grey.svg 1024w"
                    width={544}
                    height={411}
                    className="lg:justify-self-start justify-self-end lg:mt-[-230px] mt-[-100px] lg:ms-[100px] z-0 lg:w-[544px] w-[70%]" />
          </div>
        </div>
      </div>

      {/******************  Our Vision Section ****************************/}
      <div className="container flex flex-wrap lg:flex-nowrap lg:mb-[100px] mb-16">
        <div className="lg:w-7/12 w-full content-center">
        <div className="bg-gradient-to-r lg:from-white from-4pgrey lg:from-30% from-80% lg:to-4pgrey to-white lg:to-30% to-80% lg:pt-[97px] pt-8 lg:pb-[133px] pb-[230px] px-8 lg:px-0">
        <h2 className="font-bold lg:text-[70px] lg:leading-[70px] text-[55px] leading-[55px] z-10 relative lg:ps-8">OUR <span className="text-4pblue lg:text-[80px] block">VISION</span></h2>
          <div className="flex pt-8">
          <span className={"divider flex lg:w-[105px] border-4pred"} style={{ borderBlockStartWidth:'5px', borderBlockStartStyle:"solid"}}></span>
            <p className="lg:ps-4 lg:w-[27rem] leading-[23px] relative z-10 ">To be the DMV area's most trusted partner in vehicle branding and commercial printing, helping businesses of all sizes turn their vehicles into mobile marketing masterpieces.</p>
          </div>
        </div>
        </div>
        <div className="lg:w-5/12 w-full pe-8 ps-16 lg:px-0 lg:mt-0 mt-[-170px]">
          <Image 
            src={"/images/vision-image.webp"}
            alt="Our Vision"
            sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
            srcSet="/images/vision-image.webp 768w, /images/vision-image.webp 1024w"
            width={486}
            height={634}
            className="self-start rounded-xl" />
        </div>
      </div>

      {/******************  Our Mission Section ****************************/}
      <div className="container flex flex-wrap lg:flex-nowrap lg:mb-[100px] mb-16 px-8 lg:px-0">
        <div className="lg:w-8/12 w-full">
          <Image 
            src={"/images/our-mission.webp"}
            alt="Our Mission"
            sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
            srcSet="/images/our-mission.webp 768w, /images/our-mission.webp 1024w"
            width={760}
            height={484}
            className="self-start" />
        </div>

        <div className="lg:w-7/12 w-full lg:ms-[-200px] mt-[-80px] lg:mt-0 content-center lg:pt-[140px]">
          <h2 className="font-bold lg:text-[70px] lg:leading-[70px] text-[55px] leading-[55px] z-10 relative lg:ps-8 pb-6 lg:pb-0 text-white">OUR <span className="text-4pblack lg:text-[80px] block">MISSION</span></h2>
          <p className="lg:ps-[90px] lg:pt-[60px] leading-[23px] relative z-10 ">At 4Print, we're dedicated to fueling business growth through professional vehicle wraps and fleet branding solutions. Our commitment goes beyond just wrapping vehicles – we create visual stories that capture attention and drive results.
            <br/><br/>Whether you're a small business taking your first step into vehicle advertising or a large corporation upgrading your fleet, we deliver the same exceptional quality and attention to detail in design, printing, and installation.</p>
        </div>
      </div>

      {/******************  4Print Experience Section ****************************/}
      <div className="container flex flex-wrap lg:flex-nowrap lg:mb-[100px] mb-16">
        <div className="lg:w-[41rem] w-full bg-4pblack pt-[72px] rounded-xl text-white lg:pb-16">
          <h2 className="lg:text-[70px] text-[45px] font-bold leading-[65px] w-full text-center">THE <span className="text-transparent">4PRINT</span> 
          <Image
            src="/images/logo-4red.svg"
            alt="Logo in white with 4 in red"
            sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
            srcSet="/images/logo-4red.svg 768w, /images/logo-4red.svg 1024w"
            width={350}
            height={56}
            className="inline lg:ms-[-270px] ms-[-170px] lg:mt-[-32px] mt-[-28px] lg:w-[350px] w-[260px]"
            /> <span className="block lg:text-[80px] lg:leading-[75px] text-[50px]">EXPERIENCE</span></h2>

          <div className="relative lg:ps-[102px] mt-16">
            <Image
            src="/images/4p-experience-about.webp"
            alt="4Print Experience background"
            sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
            srcSet="/images/4p-experience-about.webp 768w, /images/4p-experience-about.webp 1024w"
            width={816}
            height={500}
            className="absolute rounded-xl z-10 lg:min-w-[51rem] lg:min-h-[28em] hidden lg:block"
            />
            <Image
            src="/images/4p-experience-about-resp.webp"
            alt="4Print Experience background"
            sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
            srcSet="/images/4p-experience-about-resp.webp 768w, /images/4p-experience-about-resp.webp 1024w"
            width={816}
            height={500}
            className="absolute rounded-xl z-10 w-full lg:hidden block"
            />
            <div className="border-l-[39px] border-4pred rounded-s-xl z-20 relative lg:min-h-[28em] min-h-[34em] bg-[#121212b3] content-end ps-8 pe-16 pb-8">
              <p className="font-bold text-[22px] pb-2">Quality-Focused Process</p>
              <ul className="leading-[23px] list-disc ps-8 text-[18px] pb-4">
                {QualityProcess.map((data, index) => (<li key={index} className="pb-2">{data}</li>))}
              </ul>

              <p className="font-bold text-[22px] pb-2 leading-[21px]">Client-Friendly Approach</p>
              <ul className="leading-[23px] list-disc ps-8 text-[18px]">
                {QualityProcess.map((data, index) => (<li key={index} className="pb-2">{data}</li>))}
              </ul>
            </div>
          </div>
        </div>

        <div className="lg:w-6/12 w-full ps-8 pt-4">
          <p className="italic text-[30px] font-bold leading-[35px] pb-8">"Actions speak louder than wraps. Here's how we deliver excellence:"</p>
          <p className="font-bold text-[22px]">Accessible Starting Point</p>
          <ul className="leading-[23px] list-disc ps-8 text-[18px]">
            {AccesibleStart.map((data, index) => (<li key={index} className="pb-2">{data}</li>))}
          </ul>
        </div>
      </div>

      {/******************  Expertise and Core Section ****************************/}
      <div className="container flex flex-wrap lg:flex-nowrap lg:mb-[100px] mb-16 px-8 lg:px-0">
        <div className="lg:w-4/12 w-full justify-items-center">
          <h2 className="font-bold lg:text-[70px] lg:leading-[70px] text-[41px] leading-[40px] z-10 relative lg:me-[-160px] lg:pb-16 pb-6">OUR EXPERTISE<span className="text-4pblue lg:text-[80px] lg:leading-[75px] text-[60px] block leading-[55px]">AND CORE VALUES</span></h2>
          <Image 
            src="/images/arlon-small.webp"
            alt="Logo Arlon"
            sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
            srcSet="/images/arlon-small.webp 768w, /images/arlon-small.webp 1024w"
            width={232}
            height={104}
            className="lg:justify-self-end"
            />

          <Image 
            src="/images/brightline-small.webp"
            alt="Logo Arlon"
            sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
            srcSet="/images/brightline-small.webp 768w, /images/brightline-small.webp 1024w"
            width={232}
            height={104}
            className="lg:justify-self-end"
            />
        </div>

        <div className="lg:w-8/12 w-full flex flex-wrap lg:ps-[55px] lg:pt-16">
          <div className="lg:w-8/12 w-full pt-8 pb-8 lg:pb-0">
            <p className="leading-[23px] lg:pt-4">When you choose 4Print, you're partnering with certified professionals who bring more than just technical expertise to your project. Our team of certified installers understands that each vehicle wrap is an opportunity to tell your brand's unique story.
              <br/><br/>
              As passionate enthusiasts of our craft, we pour our creativity and dedication into every project, ensuring that each design not only meets but exceeds industry standards.</p>
          </div>

          <div className="lg:w-4/12 w-full justify-items-center lg:justify-items-end">
            <Image 
              src="/images/3m-small.webp"
              alt="Logo 3M"
              sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
              srcSet="/images/3m-small.webp 768w, /images/3m-small.webp 1024w"
              width={232}
              height={104}
              className="lg:justify-self-end"
              />

            <Image 
              src="/images/avery-small.webp"
              alt="Logo Arlon"
              sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
              srcSet="/images/avery-small.webp 768w, /images/avery-small.webp 1024w"
              width={232}
              height={104}
              className="lg:justify-self-end"
              />
          </div>
          <div className="w-full lg:pe-16">
            <p className="leading-[23px] pt-4 pe-8">Our experience in the vehicle wrapping industry has given us invaluable insights into what makes a design truly stand out on the road. We've honed our skills through years of hands-on experience, constantly adapting to market trends while maintaining our commitment to premium quality and innovative solutions.
              <br /><br />
              What truly sets us apart is our collaborative approach. We believe that the best results come from working closely with our clients, combining your vision with our technical expertise. </p>
          </div>
        </div>

      </div>

      {/****************** Certifications Section ****************************/}
      <div className="container lg:mb-[100px] mb-16">
              <div className="bg-cert-ap rounded-lg pt-[100px] pb-[157px] px-16 shadow-usual">
                <h3 className="text-white text-[40px] text-center leading-[45px]">Our team <span className="font-extrabold italic">doesn't just execute projects</span>; we engage in <span className="italic font-extrabold text-4pred underline">meaningful partnerships</span>, offering personalized guidance and creative input throughout the entire process. From the initial design consultation to the final installation, <span className="font-extrabold italic">we ensure clear communication and attention to detail at every step.</span></h3>
              </div>
              <div className="bg-4pgrey lg:p-[45px] px-4 py-8 rounded-xl lg:mx-[54px] mx-8 lg:mt-[-90px]">
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
      
                <div className="flex lg:flex-nowrap flex-wrap">
                  <div className="lg:w-5/12 w-full lg:min-w-[588px] h-fit shadow-usual border-4plight-grey border-[1px] rounded-md flex flex-wrap lg:flex-nowrap p-4 bg-white mt-8">
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
      
      
                <div className="flex lg:flex-nowrap flex-wrap">
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

      {/******************  Review Section ****************************/}
      <ReviewSection />
    </>
  )
};

export default AboutPage;
