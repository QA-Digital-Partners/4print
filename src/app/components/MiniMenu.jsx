import React from "react"

const MiniMenu = ({toMap}) => {
  return (
    <><div className="flex flex-wrap lg:flex-nowrap justify-center">

      {toMap.map((data, index) => {
          let divider = true;
          let size
          let last = false
          if(index === 0) {
            size = "lg:w-[240px]"
          } else {
            size = "lg:w-[190px]"
          }
          if(index === toMap.length-1) {
              divider = false;
            }
          if(index === toMap.length-1) {
            last = true;
          }
            return(
                <div key={index} className={`flex flex-wrap lg:flex-nowrap lg:min-w-[190px] ${size} justify-center min-h-[106px] lh:min-h-auto w-1/2`}>
                <a href={data.link} className="content-center lg:text-[20px] text-[16px] font-semibold text-center lg:leading-6 leading-5 lg:w-[80%] self-end lg:self-center">{data.name}</a>
                
                {divider ? (
                    <>
                  <div className="w-[3px] lg:py-4 px-[1rem] content-evenly lg:block hidden">
                      <div className="bg-4plight-grey w-full min-w-[3px] min-h-[6rem] ">
                      </div>
                  </div>
                  <div className="w-full pt-4 content-evenly lg:hidden block max-h-[34px] self-end">
                      <div className="bg-4plight-grey w-full min-h-[2px] rounded-xl">
                      </div>
                  </div>
                  </>
                  
                ) : ('')
                }

                {last ? (
                  <>
                    <div className="w-full pt-4 content-evenly lg:hidden block max-h-[34px] self-end">
                      <div className="bg-4plight-grey w-full min-h-[2px] rounded-xl"></div>
                    </div>
                  </>
                ) : ('')}
                </div>
            )
        })
    }
    </div>
    </>
  )
};

export default MiniMenu;
