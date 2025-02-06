import React from "react"
import Button4PSmall from "./ButtonSmall";

const ServicesCardHome = ({title, video, link, index}) => {

    let desfase = ''
    if (index==0 || index==3) {
        desfase = 'mt-32'
    }else if (index==1 || index==4) {
        desfase = 'mt-16'
    }

  return (
    <>
          <div className={` ${desfase}`}>
            <div className="relative w-full overflow-hidden min-h-[513px] rounded-xl">
            <video autoPlay muted loop className="absolute top-1/2 left-1/2 min-w-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover z-[-1]">
            <source src={`/videos/${video}`} type="video/mp4" />
              Tu navegador no soporta el formato de video.
            </video>
            <div className="absolute bottom-0 w-full justify-center min-h-[139px] divpath btn-blue-to-red btn-animation p-4">
              <p className="text-white text-[20px] font-bold pb-4">
              {title}
              </p>
              <Button4PSmall buttonText={'Learn More'} buttonLink={link} iconOption={3} buttonBgAnimation={'transparent'} textColor={'text-white'}/>
            </div>
            </div>
          </div>
    </>
  )
};

export default ServicesCardHome;
